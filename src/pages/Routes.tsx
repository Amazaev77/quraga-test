import React from 'react'
import { Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'
import PostsPage from './PostsPage'
import LoginPage from './LoginPage'

const Routes: React.FC = () => {
  return (
    <Container>
      <Route path="/" exact component={HomePage} />
      <Route path="/posts" component={PostsPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/login" component={LoginPage} />
    </Container>
  )
}

export default Routes
