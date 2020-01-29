import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.SERVER
})

export default api