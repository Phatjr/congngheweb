import React from 'react'

import "./footer.css"



const footer = () => {
    return (
        <div className="footer">
            <hr  width="60%" align="center" size="20%" />
            <div className="row">
            <div className="col-xs-6 col-md-3">
                    <h6>Tiệm Mèo Lười</h6>
                    <ul className="footer-links">
                        <li>0935759000</li>
                        <li>ducphat198@gmail.com</li>
                        <li>Đà Nẵng, Việt Nam</li>
                    </ul>
                </div>

                <div className="col-xs-6 col-md-3">
                    <h6>Product</h6>
                    <ul className="footer-links">
                        <li>Furniture</li>
                        <li>Packages</li>
                        <li>Services</li>
                    </ul>
                </div>

                <div className="col-xs-6 col-md-3">
                    <h6>Contact Us</h6>
                    <ul className="footer-links">
                        <li><a href="https://www.facebook.com/tiemmeoluoi.petshop">Facebook</a></li>
                        <li><a href="https://www.instagram.com/cat.house.99/">Instagram</a></li>                        
                        <li><a href="https://www.youtube.com/channel/UCZogUWQR1DIGGISBHYw1KyA">Youtube</a></li>
                    </ul>
                </div>

                <div className="col-xs-6 col-md-3">
                    <div className="end">
                        <img src="images/logo.png" alt="logo" />
                    </div>
                </div>
            </div>

        </div>
            )
}

            export default footer
