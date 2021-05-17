import React, { useEffect } from 'react'
import classes from './profile.module.css'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Redirect, useHistory } from 'react-router-dom'
import { loadProfile, logout } from '../../redux/ducks/profile'
import {useTypedSelector} from "../../hooks/useTypedSelector";

type addressType = {
  street?: string,
  suite?: string
}

type profileType =  {
  name?: string
  email?: string
  phone?: string
  website?: string
  address?: addressType
}

const ProfilePage:React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadProfile())
  }, [dispatch])

  const isLoading = useTypedSelector(state => state.profile.isLoading)
  const isLoggedIn = useTypedSelector(state => state.profile.isLoggedIn)
  const profile: profileType = useTypedSelector(state => state.profile.profile)

  const { name, email, phone, website, address } = profile

  if (isLoading) {
    return <div>Loading...</div>
  }

  const handleLogout = () => {
    dispatch(logout())
    history.push('/login')
  }

  if (isLoggedIn) {
    return (
      <div className={classes['profile-block']}>
        <div className={classes['profile-left']}>
          <h4 className={classes['profile-name']}>{name}</h4>
          <div className={classes['profile-email']}>
            Email: <span>{email}</span>
          </div>
          <div className={classes['profile-phone']}>
            Phone: <span>{phone}</span>
          </div>
          <div className={classes['profile-address']}>
            Address:
            <span> {address?.street} {address?.suite}</span>
          </div>
          <Button variant="success mt-4">
            <a className="text-white" href={website}>Web Site</a>
          </Button>
          <Button onClick={handleLogout} variant="secondary mt-4 ml-4">
            Выйти
          </Button>
        </div>
        <div className={classes['profile-avatar']} />
      </div>
    )
  }

  return <Redirect to="/login" />



}

export default ProfilePage
