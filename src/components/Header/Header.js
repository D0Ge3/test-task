import { useSelector, useDispatch } from 'react-redux'

import { Button } from '../../ui/Button/Button'
import { logout } from '../../redux/actions/authActions'

import s from './Header.module.scss'

export const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuth)
  const dispatch = useDispatch()
  return (
    <nav className={s.header}>
      {isAuth && <Button onClick={() => dispatch(logout())}>Выйти</Button>}
    </nav>
  )
}
