import React from 'react'
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { About, Home, Login, Register, Nav } from './components';

export default function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <PrivateRoute exact path='/about' component={About} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </>
  )
}
