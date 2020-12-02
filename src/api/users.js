import { instance } from './axiosInstance'

export const usersAPI = {
  getUsers() {
    return instance.get('/api/v1/users/').then((res) => res)
  },
}
