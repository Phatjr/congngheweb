import React from 'react'

import "./subscribe.css"

const subscribe = () => {
    return (
        <div className="subscribe">
            <div className="text7">
                <h2>Subscribe to our newsletter</h2>
                <p>A monthly digest of the new WOODIES products, hot offers, and resources.</p>
            </div>
             <div className="placeholder">
                <input type="tel" id="mail" name="email" placeholder="Your email address" />
                
             </div>
        </div>
    
    )
}

export default subscribe;
