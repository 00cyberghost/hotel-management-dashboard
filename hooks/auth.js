import useSWR from 'swr'
import axios from '@/lib/axios'
import axiosCSRF from '@/lib/axiosCSRF'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

export const useAuth = ({ middleware} = {}) => {
    const router = useRouter()
    const params = useParams()

    const { data: user, error, mutate } = useSWR('/api/user', () =>
        axios
            .get('/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error
                router.push('/verify-email')
            }),
    )

    const csrf = () => axiosCSRF.get('/sanctum/csrf-cookie')

    const register = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        axios.post('/register', props)
        .then((res) => {

            mutate()

            //direct user to login page
            router.push('/')
        })
        .catch(error => {
            console.log(error)
            if (error.response.status !== 422) throw error

            setErrors(error.response.data.errors)
        })
    }

    const login = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios.post('/login', props)
        .then((res) => {
            mutate()
        })
        .catch(error => {
            if (error.response.status !== 422) throw error

            setErrors(error.response.data.errors)
        })
    }

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/reset-password', { token: params.token, ...props })
            .then(response =>
                router.push('/login?reset=' + btoa(response.data.status)),
            )
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resendEmailVerification = ({ setStatus }) => {
        axios
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        
       if(user != null){

            mutate()
            if (!error) {
                await axios.post('/logout')
            }

            window.location.pathname = '/login'

       }
        //router.push('/login')
    }

    const redirectIfAuthenticated = () => {

        const role = user?.role

        if(role != null || role != undefined){

            switch (role) {
                case 'Admin':
                    router.push('/admin')
                    
                    break;
    
                case 'House Keeping':
                    router.push('/housekeeping')
                    
                    break;
    
                    case 'Receptionist':
                    router.push('/reception')
                    
                    break;
    
                    case 'management':
                    router.push('/management')
                    
                    break;
            
                default:
                    logout()
                    break;
            }
        }else{
            router.push('/login')
        }
    }

    useEffect(() => {
        if (middleware === 'guest' && user) redirectIfAuthenticated()
        if (window.location.pathname === '/verify-email' && user?.email_verified_at) redirectIfAuthenticated()
        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}
