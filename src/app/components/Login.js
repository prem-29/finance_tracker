import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectList, loginSuccess } from '../slices/user_slice';
import { FaUserCircle } from "react-icons/fa";
import MyButton from './MyButton';
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const dispatch = useDispatch();
    const getuserList = useSelector(selectList);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!email || !password) {
            setError("Email and Password is mandatory!");
        } else {
            const user = getuserList.find(
                (user) => user.email === email && user.password === password
            )

            if (!user) {
                setError('Email or Password is invalid')
            } else {
                dispatch(loginSuccess());
                navigate('/home')
            }

        }
    }

    const validateEmail = (e) => {
        const email = e.target.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    }

    return (
        <section>
            <div style={styles.container}>
                <div style={styles.form}>
                    <h1 style={{ textAlign: 'center' }}>Login</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: 10 }}>
                        <FaUserCircle style={{ width: 50, height: 50 }} />
                    </div>
                    <div>
                        <p style={styles.text}>Email *</p>
                    </div>
                    <div style={styles.fieldStyle}>
                        <input style={{ ...styles.input, borderColor: emailError ? "red" : "black" }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validateEmail} />
                    </div>
                    <div>
                        <p style={styles.text}>Password *</p>
                    </div>
                    <div style={styles.fieldStyle}>
                        <input style={styles.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {error && <div style={styles.error}>{error}</div>}
                    <div style={{ width: '100', textAlign: 'center' }}>
                        <MyButton onClick={handleSubmit} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p>Or</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: -20 }}>
                        <p><u>Register
                        </u></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // to center vertically
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        borderRadius: '10px',
        borderWidth: '1px',
        borderStyle: 'solid',
        padding: 50
    },
    fieldStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
    },
    text: {
        marginRight: '10px'
    },
    error: {
        color: 'red',
        paddingBottom: 10
    },
    input: {
        flex: 1,
        padding: '10px',
        borderRadius: '10px',
        borderWidth: '1px'
    },
};

export default Login