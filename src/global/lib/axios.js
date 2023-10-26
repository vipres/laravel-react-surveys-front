import axios from 'axios'
import { useRouter } from 'next/navigation'


const URL = process.env.NEXT_PUBLIC_API_URL
//console.log(process.env.NEXT_PUBLIC_API_URL)
const axiosClient = axios.create({
    headers:{
        'X-Requested-With': 'XMLHttpRequest',

    },

    baseURL: `${URL}/api`,

})

axiosClient.interceptors.request.use((config) => {
    //const token = '123'
    config.headers.Authorization = `Bearer ${localStorage.getItem('TOKEN')}`
    return config
})

axiosClient.interceptors.response.use(response => {
    return response
}, error=>{
    if(error.response && error.response.status === 401){
        useRouter().push('/login')
        return error
    }

    throw error


}
)

export default axiosClient
