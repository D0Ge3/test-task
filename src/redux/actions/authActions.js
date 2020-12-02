import { authAPI } from '../../api/auth'
import { instance } from '../../api/axiosInstance'

export const SET_AUTH = 'auth/SET_AUTH'
export const SET_IS_FETCHING = 'auth/SET_IS_FETCHING'

export const setAuth = (isAuth) => ({ type: SET_AUTH, isAuth })
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })

const setTokenToLocalStorage = async (token) => {
  localStorage.setItem('token', token)
  instance.defaults.headers.Authorization = `Token ${token}`
}

export const login = (username, password) => async (dispatch) => {
  const res = await authAPI.getToken(username, password)
  if (res.status === 200) {
    setTokenToLocalStorage(res.data.token).then(() => {
      dispatch(setAuth(true))
    })
  }
  return res
}

export const logout = () => async (dispatch) => {
  localStorage.removeItem('token')
  dispatch(setAuth(false))
}

export const verify = () => async (dispatch) => {
  dispatch(setIsFetching(true))
  try {
    await authAPI.verifyToken()
  } catch (error) {
    dispatch(setIsFetching(false))
    if (error.response.status === 404) {
      dispatch(setAuth(true))
      return error
    }
  }
}
