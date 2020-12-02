export const SET_INITIALIZED = 'app/SET_INITIALIZED'
export const SET_ERROR = 'app/SET_ERROR'

export const setError = (error) => ({ type: SET_ERROR, error })

export const catchNetworkError = (error) => async (dispatch) => {
  error.response
    ? dispatch(setError('Ошибка сервера!'))
    : dispatch(setError('Ошибка соединения!'))
}
