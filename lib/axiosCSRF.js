import Axios from 'axios'

const axiosCSRF = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_SANCTUM_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true
})

export default axiosCSRF
