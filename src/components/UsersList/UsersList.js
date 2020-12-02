import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as cn from 'classnames'

import { setSortMode, getUsers } from '../../redux/actions/usersActions'
import { universalUserSelector, sortModeSelector } from './selectors'

import { UserItem } from './UserItem/UserItem'
import { SortIcon } from '../../ui/icons/SortIcon/SortIcon'
import { Search } from './Search/Search'

import s from './UsersList.module.scss'
import { Loader } from '../../ui/Loader/Loader'

export const UserList = () => {
  /* 
    Тут решение для небольшого объема данных. 
    На production, backend не должен отдавать всех пользователей в 1 запросе. 
    Должна быть пагинация и фильтрация на сервере. В production приведенный тут поиск недопустим,
    потому что будет отправка большого кол-ва бесполезных промежуточных запросов.
    Для решения проблемы следует сделать кнопку для поиска (по нажатию которой, произойдет запрос), 
    или реализовать debounce.
  */
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.auth.isAuth)
  const isFetching = useSelector((state) => state.users.isFetching)

  const sortMode = useSelector(sortModeSelector)

  let users = useSelector(universalUserSelector)

  const filterError = users.length === 0 ? 'Не найдено!' : null
  const usersItems = users.map((u) => <UserItem user={u} key={u.id} />)

  const changeSortMode = () => {
    if (sortMode === 'down') {
      dispatch(setSortMode('up'))
    } else {
      dispatch(setSortMode('down'))
    }
  }

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  const cellIdClasses = cn({
    [s.cell]: true,
    [s.cell_id]: true,
  })

  return isAuth ? (
    <div className={s.container}>
      <h2 className={s.title}>Пользователи</h2>
      <Search />
      <table className={s.table}>
        <thead className={s.thead}>
          <tr>
            <th className={cellIdClasses}>
              <span className={s.sort_btn} onClick={changeSortMode}>
                ID <SortIcon mode={sortMode} />
              </span>
            </th>
            <th className={s.cell}>Username</th>
          </tr>
        </thead>
        <tbody>{usersItems}</tbody>
      </table>
      {filterError && !isFetching && <span>{filterError}</span>}
      {isFetching && (
        <div className={s.loader_wrapper}>
          <Loader className={s.loader} />
        </div>
      )}
    </div>
  ) : (
    <Redirect to="/login" />
  )
}
