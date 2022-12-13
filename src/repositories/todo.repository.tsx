import { useQuery } from 'react-query'
import { Todo } from '@models'
import { todoServer } from '@server'

export function useGetTodos() {
  return useQuery<Todo[]>('getText', async () => {
    const res = await todoServer.get('/todos')
    return res.data
  })
}
