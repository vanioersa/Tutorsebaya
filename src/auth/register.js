import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: 'Password and confirm password do not match',
      });
      return;
    }

    try {
      const response = await axios.post('http://localhost:3030/users', {
        name,
        email,
        password
      });

      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'Your account has been created successfully!',
      }).then(() => {
        history.push('/login');
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: error.response.data.message,
      });
    }
  };

  return (
    <div style={{ textAlign: 'center', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}>Register</button>
      </form>
      <p style={{ marginTop: '15px' }}>Sudah memiliki akun? <Link to="/login">Masuk disini</Link></p>
    </div>
  );
}

export default Register;
