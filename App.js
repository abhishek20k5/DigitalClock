// import React, { useState, useEffect } from 'react';

// const DigitalClock = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     // Function to update the time
//     const updateTime = () => {
//       setTime(new Date());
//     };

//     // Set up the interval to update the time every second
//     const intervalId = setInterval(updateTime, 1000);

//     // Cleanup function to clear the interval
//     return () => clearInterval(intervalId);
//   }, []); // Empty dependency array means this effect runs once on mount

//   // Format the time as HH:MM:SS
//   const formattedTime = time.toLocaleTimeString();

//   return (
//     <div>
//       <h1>Digital Clock</h1>
//       <h2>{formattedTime}</h2>
//     </div>
//   );
// };
import React from 'react';
import DigitalClock from './DigitalClock';

const App = () => {
  return (
    <div>
      <DigitalClock />
    </div>
  );
};

export default App ;
