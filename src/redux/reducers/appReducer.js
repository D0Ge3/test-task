import * as actionTypes from '../actions/appActions'

const initialState = {
  error: null,
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}
