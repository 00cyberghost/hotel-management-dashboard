"use client"
import Link from 'next/link'
import InputError from '@/app/components/InputError/InputError'
import { useAuth } from '@/app/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthSessionStatus from '@/app/(pages)/(auth)/AuthSessionStatus'
//import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'

export default function Login() {

    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/admin',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

  return (
    
    <div className="authincation h-100">
        <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-6">
                    <div className="authincation-content">
                        <div className="row no-gutters">
                            <div className="col-xl-12">
                                <div className="auth-form">
									<div className="text-center mb-3">
                                        <Link href="/">
                                            <img  className="light-login" src="/assets/images/logo-white.png" alt="" />

                                        </Link>
										<Link href="/">
                                            <img  className="dark-login" src="/assets/images/logo-dark.png" alt="" />

                                        </Link>
									</div>
                                    <h4 className="text-center mb-4">Sign in your account</h4>
                                    <AuthSessionStatus className="mb-4" status={status} />
                                    <form onSubmit={submitForm}>
                                       
                                        <div className="mb-3">
                                            <label className="mb-1"><strong>Email</strong></label>
                                            <input type="email" 
                                                value={email} 
                                                onChange={event => setEmail(event.target.value)} 
                                                className="form-control" 
                                                placeholder="ozorclinton@gmail.com" />

                                                <span className='text-danger'>{errors.email}</span>

                                            
                                        </div>
                                        <div className="mb-3 position-relative">
                                            <label className="mb-1"><strong>Password</strong></label>
											<input type="password" 
                                                id="dz-password" 
                                                value={password}
                                                onChange={event => setPassword(event.target.value)} 
                                                className="form-control" required />
											<span className="show-pass eye">
											
												<i className="fa fa-eye-slash"></i>
												<i className="fa fa-eye"></i>
											
											</span>
                                            <span className='text-danger'>{errors.password}</span>
                                        </div>
                                        
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary btn-block">Sign Me In</button>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                        <p>Dont have an account? <Link className="text-primary" href="/register">Register</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
