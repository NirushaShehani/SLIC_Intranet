import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BASE_URL, ENDPOINTS } from "../../Services/ApiConfig";
import axios from "axios";
import '../../Styles/Home.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [adminLevel, setAdminLevel] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const redirectPath = queryParams.get('redirect') || '/';

    const handleLogin = async (e) => {
      e.preventDefault();
      setError(''); 
  
      try {
          const apiUrl = `${BASE_URL}/${ENDPOINTS.AdminLogin}`;
          console.log("Logging in with:", { username, password });
          const response = await axios.get(apiUrl, {
            params: {
              p_un: username,
              p_pw: password,
            },
            headers: {
              "Content-Type": "application/json",
            },
          });
  
          const result = response.data; 
  
          if (response.status === 200 && result.isValid === 1) {
              console.log("Login successful");
              setAdminLevel(result.adminLevel);
          } else {
              console.log("Login failed, result:", result);
              setError('Invalid username or password');
          }
      } catch (err) {
          console.error('Error during login:', err);
          setError('An unexpected error occurred');
      }
  };
  
  const renderAdminButtons = () => {
    if (adminLevel === 1) {
      return <button style={styles.button} onClick={handleIdeaHubClick}>IdeaHub Admin</button>;
    } else if (adminLevel === 2) {
      return <button style={styles.button} onClick={handleSalesLeadsClick}>SalesLeads Admin</button>;
    } else if (adminLevel === 3) {
      return (
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={styles.button} onClick={handleIdeaHubClick}>IdeaHub Admin</button>
          <button style={styles.button} onClick={handleSalesLeadsClick}>SalesLeads Admin</button>
        </div>
      );
    }
    return null;
  };  

  const handleIdeaHubClick = () => {
    navigate('/Idea_Hub_Admin_View');
  }

  const handleSalesLeadsClick = () => {
    navigate('/SalesLead_Admin_View');
  }

    return (
      <div style={styles.container}>
        {adminLevel === null ? (
          <>
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
          </>
        ) : (
          <div>
            <h2>Welcome! You are logged in as Admin Level {adminLevel}</h2>
            {renderAdminButtons()}
          </div>
        )}       
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