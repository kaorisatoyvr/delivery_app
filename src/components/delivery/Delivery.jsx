import "./delivery.css";
import React from 'react';
import Badge from 'react-bootstrap/Badge';

function Deliver() {
    
    return (
     <>
        <div className="delivery__number">
            <h2>Delivery# 487303</h2>
            <Badge pill bg="secondary" className="pending__badge rounded-3">
                <span style={{ color: '#961313' }}>Pending</span>
            </Badge>
        </div>
        {/* I changed the color of 'pending' to improve accessibility because the contrast isn't very clear. */}

        <div className="ad__space">
            Ad Space
        </div>
    </>
    );
  }
  
  export default Deliver;