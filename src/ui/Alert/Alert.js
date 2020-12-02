import s from './Alert.module.scss'

export const Alert = ({ error }) => {
  return error ? <div className={s.alert}>{error}</div> : null
}
