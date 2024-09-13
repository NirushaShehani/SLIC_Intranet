import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BASE_URL, ENDPOINTS } from "../../Services/ApiConfig";
import axios from "axios";
import '../../Styles/Home.css';
import userImage from '../../assets/bgimag.png';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [adminLevel, setAdminLevel] = useState(null);
    const [error, setError] = useState('');
    const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const redirectPath = queryParams.get('redirect') || '/';

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); 

        if (!isRememberMeChecked) {
            setError('You must check "Remember me" to log in.');
            return;
        }

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
        <div style={styles.background}>
            <div style={styles.container}>
                {adminLevel === null ? (
                    <>
                        <div style={styles.iconContainer}>
                            <span style={styles.icon}></span>
                        </div>
                        <form onSubmit={handleLogin} style={styles.form}>
                            <div style={styles.inputGroup}>
                                <span className="fa fa-user" style={styles.inputIcon}></span>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    style={styles.input}
                                />
                            </div>
                            <div style={styles.inputGroup}>
                                <span className="fa fa-lock" style={styles.inputIcon}></span>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={styles.input}
                                />
                            </div>
                            <div style={styles.options}>
                                <label style={styles.rememberMe}>
                                    <input 
                                        type="checkbox" 
                                        checked={isRememberMeChecked} 
                                        onChange={() => setIsRememberMeChecked(!isRememberMeChecked)} 
                                    /> Remember me
                                </label>
                             
                            </div>
                            {error && <p style={styles.error}>{error}</p>}
                            <button 
                                type="submit" 
                                style={styles.button}
                                disabled={!isRememberMeChecked}
                            >
                                LOGIN
                            </button>
                        </form>
                    </>
                ) : (
                    <div>
                        <h2>Welcome! You are logged in as Admin Level {adminLevel}</h2>
                        {renderAdminButtons()}
                    </div>
                )}
            </div>
        </div>
    );
}

const styles = {
    background: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to right, #ffcccb, #05A3C1, #2c3e50)', // Light pink to dark blue gradient
    },
    container: {
        width: '350px',
        padding: '20px',
        borderRadius: '12px',
        background: '#fff',
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    iconContainer: {
        marginBottom: '20px',
    },
    icon: {
        display: 'inline-block',
        width: '80px',
        height: '80px',
        backgroundImage: `url(${userImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '50%',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputGroup: {
        position: 'relative',
        marginBottom: '15px',
    },
    inputIcon: {
        position: 'absolute',
        left: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#007bff',
        fontSize: '20px',
    },
    input: {
        padding: '12px 10px 12px 35px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
    },
    options: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
    },
    rememberMe: {
        fontSize: '14px',
    },
    forgotPassword: {
        fontSize: '14px',
        color: '#007bff',
        textDecoration: 'none',
    },
    button: {
        padding: '12px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        width: '100%',
    },
    error: {
        color: 'red',
        marginBottom: '10px',
    },
};

export default Login;
