import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'

import { login } from '../../redux/actions/authActions'

import { TextField } from '../../ui/TextField/TextField'
import { Button } from '../../ui/Button/Button'
import { FormAlert } from '../../ui/FormAlert/FormAlert'

import s from './Login.module.scss'

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Обязательное поле!'),
  password: Yup.string().required('Обязательное поле!'),
})

export const LoginForm = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      const { username, password } = values
      dispatch(login(username, password)).catch((error) => {
        if (error.response.status === 400) {
          formik.setStatus({
            status: 'error',
            msg: 'Неправильный логин или пароль!',
          })
        }
      })
    },
  })

  const errorFieldStyle = { border: '2px solid red' }

  const { errors, touched } = formik

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2 className={s.form_title}>Авторизация</h2>
      <div className={s.form_control}>
        <TextField
          style={touched.username && errors.username && errorFieldStyle}
          type="text"
          name="username"
          placeholder="Ваш логин"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
      </div>
      <div className={s.form_control}>
        <TextField
          style={touched.password && errors.password && errorFieldStyle}
          type="password"
          name="password"
          placeholder="Пароль"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <Button type="submit" className={s.button}>
        Войти
      </Button>
      {formik.status && (
        <FormAlert className={s.alert} status={formik.status} />
      )}
    </form>
  )
}
