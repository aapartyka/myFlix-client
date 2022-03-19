import React, { useState } from 'react';

export function LoginView(props) {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  }

  const handleSignup = (e) => {
    console.log('Route to Reistration view.');
  }

  return (
    <form>
      <h1>MyFlix</h1>
      <p>Welcome back, please login to your account.</p>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label><br></br>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label><br></br>
      <button type="submit" onClick={handleSubmit}>Login</button><br></br>
      <button type="button" onClick={handleSignup}>Create account</button>
    </form>
  );
}