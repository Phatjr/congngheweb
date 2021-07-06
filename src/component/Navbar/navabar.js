import React from 'react'

import "./navbar.css"
const navabar = () => {

    return (
        <section className="navbar d-flex justify-content-between align-items-center">
            <div className="navbar_logo col-md-3">
                <img src="images/logo.jpg" alt="logo" />
            </div>
            <ul className="navbar_list d-flex justify-content-between align-items-center col-md-8">
                <li>Home</li>
                <li>About Us</li>
                <li>How it works</li>
                <li>Categories</li>
                <li>Testimony</li>
                <li>Sign up</li>
            </ul>
        </section>
    )
}

export default navabar
