import React, { useState } from 'react';
import { Link } from '@reach/router';

const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [formErrors, setFormErrors] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();

    const incompleteFields = [];

    if (!username) {
      incompleteFields.push('Username');
    }
    if (!password || !isValidPassword(password)) {
      incompleteFields.push('Password');
    }
    if (!fullName) {
      incompleteFields.push('Full Name');
    }
    if (!phoneNumber || phoneNumber.length < 9 || phoneNumber.length > 11 || !/^\d+$/.test(phoneNumber)) {
      incompleteFields.push('Phone Number');
    }
    if (!email) {
      incompleteFields.push('Email');
    }
    if (!role) {
      incompleteFields.push('Role');
    }

    if (incompleteFields.length > 0) {
      setFormErrors(`Please fill in the following fields: ${incompleteFields.join(', ')}!`);
      return;
    }

    // Perform signup logic here, using the values of all fields
    console.log('Sign up:', { username, password, fullName, address, phoneNumber, email, role });

    // Reset formErrors state
    setFormErrors('');
  };

  const handleInputChange = (e, setter) => {
    if (setter === setPhoneNumber) {
      // Validate phone number input
      if (!/^\d*$/.test(e.target.value) || e.target.value.length < 9 || e.target.value.length > 11) {
        setPhoneNumberError(true);
      } else {
        setPhoneNumberError(false);
      }
    }
    if (setter === setPassword) {
      // Validate password input
      if (!isValidPassword(e.target.value)) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    }
    setter(e.target.value);
    // Reset formErrors state when input changes
    setFormErrors('');
  };
  
  const isValidPassword = (password) => {
    // Password must contain at least one uppercase letter, one lowercase letter, one digit, one symbol, and be at least 8 characters long
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <p>All the fields marked with (*) are required to be completed!</p>
      {formErrors && <p style={{ color: 'red' }}>{formErrors}</p>}
      <form onSubmit={handleSignUp}>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <label style={{ color: !username && formErrors ? 'red' : 'inherit', width: '150px' }}>
            Username*:
          </label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <label style={{ color: passwordError || (!password && formErrors) ? 'red' : 'inherit', width: '150px' }}>
            Password*:
          </label>
          <input type="password" value={password} onChange={(e) => handleInputChange(e, setPassword)} />
        </div>
        {passwordError && (
          <p style={{ color: 'red', marginLeft: '150px' }}>
            Password must contain at least one uppercase letter, one lowercase letter, one digit, one symbol, and be at least 8 characters long!
          </p>
        )}
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <label style={{ color: !fullName && formErrors ? 'red' : 'inherit', width: '150px' }}>
            Full Name*:
          </label>
          <input type="text" value={fullName} onChange={(e) => handleInputChange(e, setFullName)} />
        </div>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <label style={{ width: '150px' }}>Address:</label>
          <input type="text" value={address} onChange={(e) => handleInputChange(e, setAddress)} />
        </div>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <label style={{ color: phoneNumberError ? 'red' : !phoneNumber && formErrors ? 'red' : 'inherit', width: '150px' }}>
            Phone Number*:
          </label>
          <input type="text" value={phoneNumber} onChange={(e) => handleInputChange(e, setPhoneNumber)} />
        </div>
        {phoneNumberError && <p style={{ color: 'red', marginLeft: '150px' }}>Phone number must have between 9 and 11 digits!</p>}
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <label style={{ color: !email && formErrors ? 'red' : 'inherit', width: '150px' }}>
            Email*:
          </label>
          <input type="email" value={email} onChange={(e) => handleInputChange(e, setEmail)} />
        </div>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <label style={{ color: !role && formErrors ? 'red' : 'inherit', width: '150px' }}>
            Role*:
          </label>
          <select value={role} onChange={(e) => handleInputChange(e, setRole)}>
            <option value="">Select Role</option>
            <option value="Member">Member</option>
            <option value="Staff">Staff</option>
            <option value="Gym Administrator">Gym Administrator</option>
          </select>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
         <p>Already have an account? <Link to="/login">Log In</Link></p>
      </p>
    </div>
  );
};

export default SignInForm;

