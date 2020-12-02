import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { LoginForm } from './LoginForm'
import { Loader } from '../../ui/Loader/Loader'

import s from './Login.module.scss'

export const Login = () => {
  const isAuth = useSelector((state) => state.auth.isAuth)
  const isFetching = useSelector((state) => state.auth.isFetching)

  return isAuth ? (
    <Redirect to="/users" />
  ) : (
    <div className={s.wrapper}>
      {isFetching ? <Loader className={s.loader} /> : <LoginForm />}
    </div>
  )
}
