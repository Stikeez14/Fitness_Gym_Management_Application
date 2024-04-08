// LogInForm.js
import React, { useState } from 'react';
import { Link } from '@reach/router';

const LogInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Perform login logic here
    console.log('Logging in:', { username, password });

    // Reset formErrors state
    setFormErrors('');
  };

  return (
    <div>
      <h2>Log In</h2>
      {formErrors && <p style={{ color: 'red' }}>{formErrors}</p>}
      <form onSubmit={handleLogin}>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <label style={{ width: '150px' }}>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <label style={{ width: '150px' }}>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Log In</button>
      </form>
      <p>Don't have an account? <Link to="/signin">Sign Up</Link></p>
    </div>
  );
};

export default LogInForm;

