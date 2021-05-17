import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import classes from './login.module.css'
import { useDispatch } from 'react-redux'
import { loadProfile } from '../../redux/ducks/profile'
import { Redirect } from 'react-router-dom'
import {useTypedSelector} from "../../hooks/useTypedSelector";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch()

  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLogin = (e:React.ChangeEvent<HTMLInputElement>): void => {
    setLogin(e.target.value)
  }
  const handlePassword = (e:React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
  }

  const isLoading = useTypedSelector(state => state.profile.isLoading)
  const error = useTypedSelector(state => state.profile.error)
  const isLoggedIn = useTypedSelector(state => state.profile.isLoggedIn)

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault()
    if (login && password) {
      dispatch(loadProfile(login, +password))
    }
  }

  if (isLoggedIn) {
    return <Redirect to="/profile" />
  }

  return (
    <div className={classes['login-block']}>
      <Form onSubmit={handleSubmit} className={classes['login-form']}>
        <Form.Group>
          <Form.Label>Логин</Form.Label>
          <Form.Control
            name="login"
            placeholder="Введите логин"
            type="text"
            value={login}
            onChange={handleLogin}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            name="password"
            placeholder="Введите пароль"
            type="password"
            value={password}
            onChange={handlePassword}
          />
        </Form.Group>
        {error && (
          <Alert className={classes['form-alert']} variant="danger">
            Имя пользователя или пароль введены неверно
          </Alert>
        )}
        <Form.Group>
          <Button
            disabled={isLoading}
            type="submit"
            variant="primary mx-auto d-block"
          >
            {isLoading ? 'Loading…' : 'Войти'}
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default LoginPage
