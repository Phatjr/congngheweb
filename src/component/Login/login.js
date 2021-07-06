import React from 'react'
import './login.css'
const Login = ({ openModal }) => {
    console.log(openModal);

    return (
        <div className={openModal ? 'login' : 'login d-none'}>
            <div className="d-flex">
                <div className="col-md-6 login-left">
                </div>
                <div className="col-md-6 login-right">
                    <div className="login-username d-flex justify-content-center align-items-center">
                        <img src="https://freesvg.org/img/abstract-user-flat-1.png" alt="" width="10%" />
                        <input className="form-control" placeholder="Username or email" />
                    </div>
                    <div className="login-password d-flex justify-content-center align-items-center">
                        <img src="https://www.clipartmax.com/png/middle/426-4262867_svg-png-icon-free-room-keys-icon.png" alt="" width="10%" />
                        <input className="form-control" placeholder="password" type="password" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
