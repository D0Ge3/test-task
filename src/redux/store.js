import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { authReducer } from './reducers/authReducer'
import { appReducer } from './reducers/appReducer'
import { usersReducer } from './reducers/usersReducer'

let reducers = combineReducers({
  app: appReducer,
  auth: authReducer,
  users: usersReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

window.store = store