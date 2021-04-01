import React from 'react';

const Login = () => {
  return (
    <div>
      <label>UserName: </label>
      <input type='text'></input>
      <br />

      <label>Password: </label>
      <input type='password'></input>
      <br />

      <input type='checkbox'></input>
      <label>Remember me</label>
      <br />

      <button>Login</button>
    </div>
  );
};

export default Login;
