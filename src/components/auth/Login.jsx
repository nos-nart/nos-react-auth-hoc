import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../slice/userSlice';
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  const authenticated = useSelector(state => state.user.authenticated);
  const [email, setEmail] = React.useState('eve.holt@reqres.in');
  const [password, setPassword] = React.useState('cityslicka');

  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      dispatch(login({ email, password }))
        .then((x) => {
          debugger;
          console.log('x: ', x);
          history.push('/');
        });
    } catch (err) {
      // NOTE: HANDLE ERROR
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email"/>
      <br/>
      <label htmlFor="password">password</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password"/>
      <button type="submit">login</button>
      <br/>
      <p>{authenticated}</p>
    </form>
  )
}
