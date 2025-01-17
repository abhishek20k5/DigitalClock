import React, { useState, useEffect } from 'react';
import './DigitalClock.css'; // Import the CSS file

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Function to update the time
    const updateTime = () => {
      setTime(new Date());
    };

    // Set up the interval to update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  // Format the time as HH:MM:SS
  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="clock-container"> {/* Apply the CSS class */}
      <h1>Digital Clock</h1>
      <h2>{formattedTime}</h2>
    </div>
  );
};

export default DigitalClock;