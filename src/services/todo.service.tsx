import { useQuery } from 'react-query'
import { Todo } from '@models'
import Axios from 'axios'

export const todoServer = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

export function useGetTodos() {
  return useQuery<Todo[]>('getText', async () => {
    const res = await todoServer.get('/todos')

    return res.data
  })
}
