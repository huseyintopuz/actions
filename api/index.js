import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://cdn.mallconomy.com',
    headers: {
        'Content-Type': 'application/json'
    },
})