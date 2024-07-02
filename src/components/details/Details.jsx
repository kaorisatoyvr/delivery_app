import "./details.css";
import React from 'react';
import fedexImage from '../../assets/images/fedex.png';

function Details() {
    return (
     <div className="detail__container">
        <div className="border"></div>
        {/* Delivery Header */}
        <div className="deliver__details">
            <h3>Delivery Details</h3>
            {/* I changed the font size to make it more visible as the heading for this section. */}
            <p>Delivery time: 2023-10-17-17:05:05:54</p>
            {/* I changed the color of Delivery time to improve the accessibility */}
        </div>

        {/* Delivery Details */}
        <div className="card__container">
            <div>
                <img src={fedexImage} alt="Square logo of Fedex" className="fedex__image" />
            </div>
            <div className="fedex__info">
                <h4>Delivery from Fedex</h4>
                <p>Bluebits Office Metrotown</p>
                <address>4289 Kingsway, Burnaby, BC, Canada, V6B0C8</address>
            </div>
        </div>
    </div>
    );
  }
  
  export default Details;