import "./status.css";
import React, { useState, useEffect } from 'react';
import { useBattery } from 'react-use';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryFull, faWifi, faSignal } from '@fortawesome/free-solid-svg-icons';

const Status = () => {
  const battery = useBattery();
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="status-bar">
    <div className="time">{time}</div>
    <div className="icons">
      <FontAwesomeIcon icon={faSignal} />
      <FontAwesomeIcon icon={faWifi} />
      {battery.fetched && (
        <span>
          <FontAwesomeIcon icon={faBatteryFull} />
        </span>
      )}
    </div>
  </div>
  );
};


  export default Status;