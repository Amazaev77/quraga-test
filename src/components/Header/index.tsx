import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" className="mb-3">
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/" exact>
          На главную
        </Nav.Link>
        <Nav.Link as={NavLink} to="/posts">
          Посты
        </Nav.Link>
        <Nav.Link as={NavLink} to="/profile">
          Профиль
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Header
