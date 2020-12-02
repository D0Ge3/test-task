import * as cn from 'classnames'

import s from './Button.module.scss'

export const Button = ({ className, children, ...rest }) => {
  const buttonClasses = cn({
    [s.button]: true,
    [className]: className,
  })
  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  )
}
