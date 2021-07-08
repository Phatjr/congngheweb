import React from 'react'


import './homelogin.css'
const Homelogin = ({ openModal }) => {
    console.log(openModal);

    return (
        <div className={openModal ? 'login' : 'login d-none'}>
        <div className="d-flex">
            <div className="col-md-6 login-left">
                <div className="login-username sign-in-container d-flex justify-content-center align-items-center">
                    <form action="#">
                        <h1>Sign in</h1>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="a">Forgot your password?</a>
                        
                    </form>
                </div>
            </div>
            <div className="or">
                <h2>OR</h2>
            </div>
            <div className="sign-up signup-container col-md-6 login-right">
                <form action="a">
                    <h1>Create Account</h1>
                    <div class="social-container">
                        <a href="https://www.facebook.com/" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://accounts.google.com/" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="https://www.linkedin.com/" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button><a href="Signup.js">Sign In</a>Sign Up</button>
                </form>
            </div>
        </div>

    </div>

    )
}

export default Homelogin;
