// App.js
import React from 'react';
import { Router } from '@reach/router';
import LogInForm from './components/LogInForm';
import SignInForm from './components/SignInForm';

const App = () => {
  return (
    <Router>
      <LogInForm path="/" />
      <LogInForm path="/login" />
      <SignInForm path="/signin" />
    </Router>
  );
};

export default App;

