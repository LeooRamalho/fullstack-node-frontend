import axios from 'axios'

const api = axios.create({
    baseURL: 'https://fullstack-node-backend.herokuapp.com'
})

export default api;