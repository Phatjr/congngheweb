import React, { useState } from 'react'
import Login from '../Login/login'

import "./navbar.css"
const Navbar = (props) => {
    const [open, setOpen] = useState(false)

    const openModal = () => {
        setOpen(!open)
    }

    console.log(open);

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
                <li onClick={openModal}>Sign up</li>
            </ul>
            <Login openModal={open} />
        </section>
    )
}

export default Navbar
