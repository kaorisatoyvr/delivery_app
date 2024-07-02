import "./header.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';


function Header() {
    
    return (
        <>
            <a className="back__button" href="/"><span><FontAwesomeIcon icon={faAngleLeft} size="lg" /></span>Back</a>
            {/* Add text 'back' where to go */}
        </>
    );
  }
  
  export default Header;