import * as actionTypes from '../actions/authActions'

const initialState = {
  isAuth: false,
  isFetching: true,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_AUTH:
      return { ...state, isAuth: action.isAuth }
    case actionTypes.SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    default:
      return state
  }
}
