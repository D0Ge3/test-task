import * as axios from 'axios'

const token = localStorage.getItem('token')
const baseUrl = 'https://emphasoft-test-assignment.herokuapp.com'

export const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: token && `Token ${token}`,
  },
})
