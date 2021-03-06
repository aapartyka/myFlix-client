import React, { useState } from 'react';

export function RegistrationView(props) {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  }

  return (
    <form>
      <h1>Welcome to myFlix</h1>

      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="mail" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <button type="submit" onClick={handleSubmit}>Sign up</button>
    </form>
  );
}