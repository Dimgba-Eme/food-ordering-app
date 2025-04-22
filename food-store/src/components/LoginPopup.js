import React, { useState } from 'react'
import './loginPopup.scss'
import close_icon from '../assets/icons/close_icon.png'
import { validateEmail } from './utils'

const LoginPopup = ({ setShowLogin }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState({
        value: '',
        isFocused: false,
    })

    const [currentState, setCurrentState] = useState("Login");

    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();
        alert(currentState === "Login" ? "You have logged in" : "You have successfully created an account")
    }

    const clearForm = () => {
        setName('');
        setEmail('');
        setPassword({
            value: '',
            isFocused: false,
        });
    }

    return (
        <div className='login-container'>
            <div className='login-inner'>
                <img src={close_icon} alt='close icon' onClick={() => setShowLogin(false)} />
                <h1>{currentState}</h1>
                <form onSubmit={handleSubmit}>
                    {currentState === "Login" ? <></> : <input type='text' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} required />}

                    <br />
                    <input type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <br />
                    <input type='password' placeholder='Enter password' value={password.value} onChange={(e) => setPassword({ ...password, value: e.target.value })} onBlur={() => setPassword({ ...password, isFocused: true })} />
                    <br />
                    <button type='submit'>{currentState === "Login" ? "Sign In" : "Create Account"}</button>

                    {currentState === "Login"
                        ?
                        <p className='login-signup-text'>Don't have an account? <span onClick={() => setCurrentState("Sign Up")}>Click to sign up</span></p>
                        :
                        <p className='login-signup-text'>Already have an account? <span onClick={() => setCurrentState("Login")}>Click to login</span></p>
                    }
                </form>
            </div>

        </div>
    )
}

export default LoginPopup
