import "./pickup.css";
import copy from '../../assets/images/copy.png';
import React, { useState } from 'react';

function PickUp() {

    const [copySuccess, setCopySuccess] = useState('');
    const textToCopy = '288-234-123';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopySuccess('Copied!');
        }).catch((err) => {
            setCopySuccess('Failed to copy!');
            console.error('Could not copy text: ', err);
        });
    };

    return (
     <>
        {/* Pick up information */}
        <div className="pickup__info">
            <div>
                <h4>Pick up Code</h4>

                <div className="pickup__code">
                    <p>{textToCopy}</p>
                    <button onClick={copyToClipboard}>
                        <img src={copy} alt="copy icon with double square" className="copy__icon" />
                    </button>
                    {copySuccess && <p className="copy__success">{copySuccess}</p>}
                </div>
                {/* This section is very important in this screen. I changed the color of the numbers to improve accessibility because the contrast wasn't very clear. I also added a background color to make them stand out. */}
            </div>
            <div>
                <h4>Compartment</h4>
                <p>104</p>
                {/* I also changed the color of number to improve accessibility. */}
            </div>
        </div>

        <div className="unlock__button">
                <a href="/">Unlock Compartment</a>
        </div>
        {/* I also changed the color of the button which is the same color of numbers to improve accessibility. */}
        </>
    );
  }
  
  export default PickUp;