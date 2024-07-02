import "./links.css";
import React from 'react';
import locker from '../../assets/images/locker.png';
import edit from '../../assets/images/edit.png';

function Links() {
    return (
        <>
        <div className="border"></div>
        <div className="links__card">
                <div>
                    <img src={locker} alt="icon of locker doors" className="locker__image" />
                    {/* I changed the color of the icon to match the same blue as the others. */}
                </div>
                <div>
                    <h4>Residential Unit Registration</h4>
                    {/* I changed the font size to make it more visible as the heading for this section. */}
                    <p>
                    Register your unit with BlueBox to enable delivery by unit feature.
                    </p>
                    {/* I changed the color of 'p' to improve the accessibility */}
                </div>
        </div>
        <div className="links__card">
                <div>
                    <img src={edit} alt="icon edit which is square and pencil" className="locker__image" />
                     {/* I changed the color of the icon to match the same blue as the others. */}
                </div>
                <div>
                    <h4>Create a support ticket</h4>
                    <p>
                    Submit a support ticket form to us.
                    </p>
                     {/* I changed the color of 'p' to improve the accessibility */}
                </div>
        </div>       
        </>
    );
  }
  
  export default Links;