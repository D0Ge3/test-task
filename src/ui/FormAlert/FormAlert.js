import * as cn from 'classnames'

import s from './FormAlert.module.scss'

export const FormAlert = ({ status, className, ...rest }) => {
  const alertClasses = cn({
    [s.alert]: true,
    [s.alert_error]: status.status === 'error',
    [s.alert_success]: status.status === 'success',
    [className]: className,
  })

  return (
    <span className={alertClasses} {...rest}>
      {status.msg}
    </span>
  )
}
