import React from 'react'
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav style={{ margin: '1rem 0', display: 'flex',flexDirection: 'column'}}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  )
}
