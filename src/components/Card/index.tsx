import React from 'react'
import { Card } from 'react-bootstrap'
import classes from './card.module.css'

type PhotoType = {
  url: string,
  title: string
}

interface CardProps {
  photo: PhotoType
}

const CardComponent: React.FC<CardProps> = (props) => {
  const { url, title } = props.photo

  return (
    <Card className={classes['card']}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardComponent
