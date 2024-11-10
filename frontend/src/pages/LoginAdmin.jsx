import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function LoginAdmin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const findUser = async (e) => {
        e.preventDefault();

        const data1 = {
            username: username,
            password: password,
        };
        try {
            const response = await axios.post('/api/user/login', data1, {
                headers: { 'Content-Type': 'application/json' }
            });
            console.log(response.data.data);
            navigate('/admin');
        } catch (error) {
            console.error('Login error:', error);
            setError('Login failed. Please check your credentials.');
        }
    }

    return (
        <div style={styles.container}>
            <div style={styles.leftPanel}>
                <div style={styles.socialIcons}>
                    <h2>Log In</h2>
                    {/* <div style={{ display: 'flex', gap: '10px', }}>
                            <button style={styles.iconButton}>f</button>
                            <button style={styles.iconButton}>w</button>
                        </div> */}
                </div>
                <form style={styles.form} onSubmit={findUser}>
                    <label style={styles.label}>USERNAME</label>
                    <input
                        type="text"
                        value={username}
                        placeholder="Username"
                        style={styles.input}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label style={styles.label}>PASSWORD</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        style={styles.input}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit" style={styles.signInButton}>Log In</button>

                    <div style={styles.options}>
                        <label style={styles.checkbox}>
                            <input type="checkbox" /> Remember Me
                        </label>
                        <Link style={styles.forgotPassword}>Forgot Password</Link>
                    </div>
                </form>
            </div>
            <div style={styles.rightPanel}>
                <h2>Welcome to login</h2>
                <p>Don't have an account?</p>
                <Link to={'/adminReg'} style={{ width: '100%' }}>
                    <button style={styles.signUpButton}>Sign Up</button>
                </Link>
            </div>
        </div>
    )
}
const styles = {
    container: {
        display: 'flex',
        maxWidth: '800px',
        margin: 'auto',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
        marginTop: '10%',
    },
    leftPanel: {
        flex: 1,
        padding: '40px',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    rightPanel: {
        flex: 1,
        background: 'linear-gradient(to right,#4e54c8, #8f94fb)',
        color: '#fff',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    socialIcons: {
        display: 'flex',
        // flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px',
        justifyContent: 'Space-Between',
    },
    iconButton: {
        background: '#f1f1f1',
        borderRadius: '50%',
        width: '35px',
        height: '35px',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        cursor: 'pointer',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        fontWeight: 'bold',
        fontSize: '12px',
        marginBottom: '5px',
        color: '#333',
    },
    input: {
        padding: '10px',
        marginBottom: '15px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '14px',
        color: '#333',
        outline: 'none',
    },
    signInButton: {
        background: 'linear-gradient(to right,#4e54c8, #8f94fb)',
        border: 'none',
        color: '#fff',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        marginBottom: '15px',
        width: '100%',
    },
    options: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '14px',
        color: '#888',
    },
    checkbox: {
        display: 'flex',
        alignItems: 'center',
    },
    forgotPassword: {
        color: '#4e54c8',
        textDecoration: 'none',
    },
    signUpButton: {
        backgroundColor: '#fff',
        color: '#4e54c8',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '20px',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop: '10px',
        width: '80%',
    },
};