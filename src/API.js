import axios from 'axios'
const api = axios.create({
    baseURL: 'https://happy-tails-rescue.herokuapp.com/'
})
export default api