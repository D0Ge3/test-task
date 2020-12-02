import * as cn from 'classnames'

import s from './TextField.module.scss'

export const TextField = ({ className, ...rest }) => {
  const fieldClasses = cn({
    [s.field]: true,
    [className]: className,
  })
  return <input className={fieldClasses} {...rest} />
}
