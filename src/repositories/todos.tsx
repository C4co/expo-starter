import { useQuery } from 'react-query'
import { Todo } from '@models'

export function useGetTodos() {
  return useQuery<Todo[]>('getText', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    return res.json()
  })
}
