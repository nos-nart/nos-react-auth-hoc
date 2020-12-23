import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../slice/userSlice';

export const Login = () => {
  const [email, setEmail] = React.useState('eve.holt@reqres.in');
  const [password, setPassword] = React.useState('cityslicka');

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(login({ email, password }));
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email"/>
      <br/>
      <label htmlFor="password">password</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password"/>
      <button type="submit">login</button>
    </form>
  )
}
