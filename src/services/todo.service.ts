import Axios from 'axios'

export const todoServer = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})
