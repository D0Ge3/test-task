import { usersAPI } from '../../api/users'
import { catchNetworkError } from './appActions'

export const SET_USERS = 'users/SET_USERS'
export const SET_FILTER_QUERY = 'users/SET_FILTER_QUERY'
export const SET_SORT_MODE = 'users/SET_SORT_MODE'
export const SET_IS_FETCHING = 'users/SET_IS_FETCHING'

export const setUsers = (users) => ({ type: SET_USERS, users })
export const setFilterQuery = (query) => ({ type: SET_FILTER_QUERY, query })
export const setSortMode = (mode) => ({ type: SET_SORT_MODE, mode })
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })

export const getUsers = () => async (dispatch) => {
  try {
    dispatch(setIsFetching(true))
    const res = await usersAPI.getUsers()
    dispatch(setUsers(res.data))
    dispatch(setIsFetching(false))
  } catch (error) {
    dispatch(catchNetworkError(error))
  }
}
