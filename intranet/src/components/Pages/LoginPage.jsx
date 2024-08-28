// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// function Login() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const location = useLocation();
  
//     const queryParams = new URLSearchParams(location.search);
//     const redirectPath = queryParams.get('redirect') || '/';

//     const handleLogin = (e) => {
//         e.preventDefault();
//         // Simulate login process and redirect to the target page
//         // (Replace this with actual login logic)
//         navigate(redirectPath);
//     };
  
//     return (
//       <div style={styles.container}>
//         <h2 style={styles.title}>Login</h2>
//         <form onSubmit={handleLogin} style={styles.form}>
//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Username</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               style={styles.input}
//             />
//           </div>
//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={styles.input}
//             />
//           </div>
//           {error && <p style={styles.error}>{error}</p>}
//           <button type="submit" style={styles.button}>Login</button>
//         </form>
//       </div>
//     );
//   }

// const styles = {
//   container: {
//     width: '300px',
//     margin: '100px auto',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center',
//   },
//   title: {
//     marginBottom: '20px',
//     fontSize: '24px',
//     fontWeight: 'bold',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   inputGroup: {
//     marginBottom: '15px',
//   },
//   label: {
//     marginBottom: '5px',
//     textAlign: 'left',
//     fontSize: '14px',
//     fontWeight: 'bold',
//   },
//   input: {
//     padding: '10px',
//     fontSize: '14px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     width: '100%',
//   },
//   button: {
//     padding: '10px',
//     fontSize: '16px',
//     color: '#fff',
//     backgroundColor: '#007bff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
//   error: {
//     color: 'red',
//     marginBottom: '10px',
//   },
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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
            // Send POST request to backend login route
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const result = await response.json();

            if (response.ok) {
                // Login successful
                navigate(redirectPath);
            } else {
                // Display error message
                setError(result.error || 'Login failed');
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
