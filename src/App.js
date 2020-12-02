import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import { verify } from './redux/actions/authActions'

import { Header } from './components/Header/Header'
import { Login } from './components/Login/Login'
import { UserList } from './components/UsersList/UsersList'
import { Alert } from './ui/Alert/Alert'

export const App = () => {
  /*
   при запуске приложения, я бы отправил запрос на endpoint для проверки токена из localStorage, 
   но в данном API его нет. Поэтому для такой проверки я решил использовать запрос на /api/v1/users/0
  */
  const networkError = useSelector((state) => state.app.error)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(verify())
  }, [])
  return (
    <>
      <Alert error={networkError} />
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/users">
          <UserList />
        </Route>
        <Redirect from="/" to="/login" />
      </Switch>
    </>
  )
}
