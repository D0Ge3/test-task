import * as cn from 'classnames'

import s from '../UsersList.module.scss'

export const UserItem = ({ user }) => {
  const cellIdClasses = cn({
    [s.cell]: true,
    [s.cell_id]: true,
  })
  const textTransform = (text) =>
    text.length > 20 && window.innerWidth < 767
      ? text.substr(0, 20) + '...'
      : text
  return (
    <tr>
      <td className={cellIdClasses}>{user.id}</td>
      <td className={s.cell} title={user.username}>
        {textTransform(user.username)}
      </td>
    </tr>
  )
}
