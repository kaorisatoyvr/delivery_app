import "./delivery.css";
import React from 'react';
import Badge from 'react-bootstrap/Badge';

function Deliver() {
    
    return (
     <>
        <div className="ad__space">
            Ad Space
        </div>
        <div className="border"></div>
        <div className="delivery__number">
            <h2>Delivery# 487303</h2>
            <Badge pill bg="secondary" className="pending__badge rounded-3">
                <span style={{ color: '#961313' }}>Pending</span>
            </Badge>
        </div>
        {/* I changed the color of 'pending' to improve accessibility because the contrast isn't very clear. */}
        {/* Delivery Header */}
        <div className="deliver__details">
            <h3>Details</h3>
            {/* remove the "Delivery" because it is easy to see that is the details */}
            <p>Delivery time: 2023-10-17-17:05:05:54</p>
            {/* I changed the color of Delivery time to improve the accessibility. I also change the bigger font size because delivery time should be important information. */}
        </div>
    </>
    );
  }
  
  export default Deliver;