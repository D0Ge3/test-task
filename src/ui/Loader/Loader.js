import * as cn from 'classnames'

import s from './Loader.module.scss'

export const Loader = ({ className }) => {
  const loaderStyles = cn({
    [s['lds-ring']]: true,
    [className]: className,
  })

  return (
    <div className={loaderStyles}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
