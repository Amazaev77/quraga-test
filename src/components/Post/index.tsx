import React from 'react'
import { Card } from 'react-bootstrap'

type PostType = {
  title: string,
  body: string,
}

interface PostProps {
  post: PostType
}

const Post: React.FC<PostProps> = (props) => {
  const { title, body } = props.post;

  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Post
