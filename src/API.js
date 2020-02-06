import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.SERVER,
    withCredentials: true
})

api.interceptors.request.use(function (config)  {
  if (localStorage.getItem('authToken')) {
    config.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authToken')}`
  }
  return config
})

api.interceptors.response.use(function (response) {
  let token = response.data.authToken 
  localStorage.setItem('authToken', token, { expires: 1/24 })
  return response 
})

export default api