import React from 'react'

import "./aboutus.css"

const aboutus = () => {
    return (
        <div className="About"> 
            <div className="About-left">
                <div className="Text1">
                    <p>Are you looking for <b>woodden</b></p> 
                    <p><b>furniture</b> for yout place?</p>            
                </div>
                <div className="Text2">
                    <p>This is the</p>
                    <p>Right Place</p>
                </div>
                <div className="Text3">
                    <p>Explore Furniture</p>
                </div>
            </div>
            <div className="About-right">
                <div className="image1">
                    <img src="images/anh1.png" alt="logo" />
                </div>
            
                <div className="image2">
                    <img src="images/nen1.png" alt="logo" />
                </div>
            </div>
        </div>

    )
}

export default aboutus
