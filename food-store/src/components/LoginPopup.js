import React, { useState } from 'react'
import './loginPopup.scss'
import close_icon from '../assets/icons/close_icon.png'

const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Login");
    return (
        <div className='login-container'>
            <div className='login-inner'>
                <img src={close_icon} alt='close icon' onClick={() => setShowLogin(false)} />
                <h1>{currentState}</h1>
                <form>
                    {currentState === "Login" ? <></> : <input type='text' placeholder='Enter name' />}

                    <br />
                    <input type='email' placeholder='Enter email' />
                    <br />
                    <input type='password' placeholder='Enter password' />
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
