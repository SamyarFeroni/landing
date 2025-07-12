import axios from 'axios'

export interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
}

export const getUser = async (): Promise<User> => {
  const response = await axios.get<User>('https://jsonplaceholder.typicode.com/users/1')
  return response.data
}
