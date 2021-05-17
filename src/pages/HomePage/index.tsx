import React, { useEffect } from 'react'
import Card from '../../components/Card'
import { useDispatch } from 'react-redux'
import { loadPhotos } from '../../redux/ducks/photos'
import classes from '../HomePage/home.module.css'
import {useTypedSelector} from "../../hooks/useTypedSelector";

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPhotos())
  }, [dispatch])

  const photos = useTypedSelector(state => state.photos.items)
  const loading = useTypedSelector(state => state.photos.loading)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className={classes['card-group']}>
      {photos.map((item) => (
        <Card key={item.id} photo={item} />
      ))}
    </div>
  )
}

export default HomePage
