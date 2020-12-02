import * as actionTypes from '../actions/usersActions'

const initialState = {
  users: [],
  filterQuery: '',
  sortMode: null,
  isFetching: true,
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USERS:
      return { ...state, users: action.users }
    case actionTypes.SET_FILTER_QUERY:
      return { ...state, filterQuery: action.query }
    case actionTypes.SET_SORT_MODE:
      return { ...state, sortMode: action.mode }
    case actionTypes.SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    default:
      return state
  }
}
