import React from 'react';
import '../../styles/SaleBanner.css'
const SaleBanner = (props) => {
    return ( 
        <div className="salebanner">
            <img className="salebanner-image" src="static/sale banner.jpg" />
            <h2 className="salebanner-head">Minimum 50% OFF</h2>
            <button className="salebanner-button">Visit Now</button>
        </div>
     );
}
 
export default SaleBanner;