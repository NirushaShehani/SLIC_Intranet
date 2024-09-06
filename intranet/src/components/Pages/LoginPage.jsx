import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BASE_URL, ENDPOINTS } from "../../Services/ApiConfig";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const redirectPath = queryParams.get('redirect') || '/';

    const handleLogin = async (e) => {
      e.preventDefault();
      setError(''); // Clear previous error messages
  
      try {
          // Use the CORS proxy to bypass the CORS issue
          const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
          const apiUrl = `${proxyUrl}${BASE_URL}/${ENDPOINTS.AdminLogin}?p_un=${username}&p_pw=${password}`;
  
          // Send GET request to the login API through the proxy
          const response = await fetch(apiUrl, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              },
          });
  
          const result = await response.text(); // API returns text response (1 for success)
  
          if (response.ok && result === '1') {
              // Login successful
              navigate(redirectPath); // Redirect user to the desired page
          } else {
              // Display error message
              setError('Invalid username or password');
          }
      } catch (err) {
          console.error('Error during login:', err);
          setError('An unexpected error occurred');
      }
  };
  

    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    );
}

const styles = {
  container: {
    width: '300px',
    margin: '100px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    textAlign: 'left',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default Login;
