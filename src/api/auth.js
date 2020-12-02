import { instance } from './axiosInstance'

export const authAPI = {
  getToken(username, password) {
    return instance
      .post('/api-token-auth/', { username, password })
      .then((res) => res)
  },
  verifyToken() {
    return instance.get('/api/v1/users/0/')
  },
}
