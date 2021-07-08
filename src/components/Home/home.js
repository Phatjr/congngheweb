import React from 'react'

import "./home.css"

const home = () => {
    return (
        <div className="Home">
            <div className="text1">
                <h2><span>Who we are</span></h2>
                <p>ABOUT US</p>
            </div>
            <div className="image3">
                <img src="images/anh3.png" alt="logo" />
            </div>
            <div className="image4">
                <img src="images/text5.png" alt="logo" />
            </div>
            <div className="image5">
                <img src="images/nen6.png" alt="logo" />
            </div>
            <div className="text2">
                <h2>Customized furniture <span>made just for you</span></h2>
                <p>Get it easy to adjust furniture to the shape and size of your dwelling or business.</p>
            </div>
        </div>

    )
}

export default home
