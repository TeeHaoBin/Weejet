// import React, { useState, useEffect } from 'react';

// const Kaboom = () => {
//   const [targetDate, setTargetDate] = useState('');
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let timerId: ReturnType<typeof setInterval>;

//     if (isRunning && targetDate) {
//       timerId = setInterval(() => {
//         const now = new Date().getTime();
//         const target = new Date(targetDate).getTime();
//         const difference = target - now;

//         if (difference <= 0) {
//           setIsRunning(false);
//           setTimeLeft({
//             days: 0,
//             hours: 0,
//             minutes: 0,
//             seconds: 0
//           });
//           clearInterval(timerId);
//           return;
//         }

//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//         setTimeLeft({ days, hours, minutes, seconds });
//       }, 1000);
//     }

//     return () => {
//       clearInterval(timerId);
//     };
//   }, [isRunning, targetDate]);

//   const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTargetDate(e.target.value);
//     setIsRunning(true);
//   };

//   interface TimeDisplayProps {
//     value: number;
//     label: string;
//   }

//   const TimeDisplay: React.FC<TimeDisplayProps> = ({ value, label }) => (
//     <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 w-24">
//       <span className="text-3xl font-bold text-blue-600">{value}</span>
//       <span className="text-sm text-gray-600">{label}</span>
//     </div>
//   );

//   return (
//     <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
//       <h2 className="text-2xl font-bold text-center mb-6">Countdown Timer</h2>
      
//       <div className="space-y-6">
//         <div className="flex flex-col space-y-2">
//           <label htmlFor="datetime" className="text-sm font-medium">
//             Select Target Date and Time:
//           </label>
//           <input
//             type="datetime-local"
//             id="datetime"
//             value={targetDate}
//             onChange={handleDateChange}
//             className="p-2 border rounded-md"
//           />
//         </div>

//         <div className="flex justify-between space-x-2">
//           <TimeDisplay value={timeLeft.days} label="Days" />
//           <TimeDisplay value={timeLeft.hours} label="Hours" />
//           <TimeDisplay value={timeLeft.minutes} label="Minutes" />
//           <TimeDisplay value={timeLeft.seconds} label="Seconds" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Kaboom;



// // Version 2

// import React, { useState, useEffect } from 'react';

// const Kaboom = () => {
//   const [targetDate, setTargetDate] = useState('');
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });
//   const [isRunning, setIsRunning] = useState(false);
//   const [isExploded, setIsExploded] = useState(false);

//   useEffect(() => {
//     let timerId: ReturnType<typeof setInterval>;

//     if (isRunning && targetDate) {
//       timerId = setInterval(() => {
//         const now = new Date().getTime();
//         const target = new Date(targetDate).getTime();
//         const difference = target - now;

//         if (difference <= 0) {
//           setIsRunning(false);
//           setTimeLeft({
//             days: 0,
//             hours: 0,
//             minutes: 0,
//             seconds: 0
//           });
//           setIsExploded(true);
//           // Reset explosion after animation
//           setTimeout(() => setIsExploded(false), 2000);
//           clearInterval(timerId);
//           return;
//         }

//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//         setTimeLeft({ days, hours, minutes, seconds });
//       }, 1000);
//     }

//     return () => {
//       clearInterval(timerId);
//     };
//   }, [isRunning, targetDate]);

//   const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTargetDate(e.target.value);
//     setIsRunning(true);
//     setIsExploded(false);
//   };

//   interface TimeDisplayProps {
//     value: number;
//     label: string;
//   }

//   const TimeDisplay: React.FC<TimeDisplayProps> = ({ value, label }) => (
//     <div className={`flex flex-col items-center bg-gray-100 rounded-lg p-4 w-24
//       ${isExploded ? 'animate-[explode_0.5s_ease-out]' : ''}`}>
//       <span className="text-3xl font-bold text-blue-600">{value}</span>
//       <span className="text-sm text-gray-600">{label}</span>
//     </div>
//   );

//   return (
//     <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
//       <style>
//         {`
//           @keyframes explode {
//             0% {
//               transform: scale(1);
//               opacity: 1;
//             }
//             50% {
//               transform: scale(1.5);
//               opacity: 0.5;
//               background-color: #ff4444;
//             }
//             100% {
//               transform: scale(0.1);
//               opacity: 0;
//               background-color: #ff0000;
//             }
//           }
          
//           @keyframes shake {
//             0%, 100% { transform: translateX(0); }
//             25% { transform: translateX(-5px); }
//             75% { transform: translateX(5px); }
//           }

//           .explosion {
//             position: fixed;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//             font-size: 6rem;
//             color: #ff4444;
//             animation: explode 0.5s ease-out forwards;
//             z-index: 1000;
//           }
          
//           .shake {
//             animation: shake 0.2s ease-in-out infinite;
//           }
//         `}
//       </style>
      
//       <h2 className="text-2xl font-bold text-center mb-6">Countdown Timer</h2>
      
//       <div className="space-y-6">
//         <div className="flex flex-col space-y-2">
//           <label htmlFor="datetime" className="text-sm font-medium">
//             Select Target Date and Time:
//           </label>
//           <input
//             type="datetime-local"
//             id="datetime"
//             value={targetDate}
//             onChange={handleDateChange}
//             className="p-2 border rounded-md"
//           />
//         </div>

//         <div className={`flex justify-between space-x-2 ${timeLeft.seconds <= 10 && isRunning ? 'shake' : ''}`}>
//           <TimeDisplay value={timeLeft.days} label="Days" />
//           <TimeDisplay value={timeLeft.hours} label="Hours" />
//           <TimeDisplay value={timeLeft.minutes} label="Minutes" />
//           <TimeDisplay value={timeLeft.seconds} label="Seconds" />
//         </div>

//         {isExploded && (
//           <div className="explosion">💥 BOOM!</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Kaboom;




// Version 3

import React, { useState, useEffect } from 'react';

const Kaboom = () => {
  const [targetDate, setTargetDate] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isRunning, setIsRunning] = useState(false);
  const [isExploded, setIsExploded] = useState(false);

  useEffect(() => {
    let timerId: ReturnType<typeof setInterval>;

    if (isRunning && targetDate) {
      timerId = setInterval(() => {
        const now = new Date().getTime();
        const target = new Date(targetDate).getTime();
        const difference = target - now;

        if (difference <= 0) {
          setIsRunning(false);
          setTimeLeft({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
          });
          setIsExploded(true);
          clearInterval(timerId);
          return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [isRunning, targetDate]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetDate(e.target.value);
    setIsRunning(true);
    setIsExploded(false);
  };

  interface TimeDisplayProps {
    value: number;
    label: string;
  }

  const TimeDisplay: React.FC<TimeDisplayProps> = ({ value, label }) => (
    <div className={`flex flex-col items-center rounded-lg p-4 w-24 transition-colors duration-300
      ${isExploded ? 'bg-red-500 text-white' : 'bg-gray-100'}`}>
      <span className={`text-3xl font-bold ${isExploded ? 'text-white' : 'text-blue-600'}`}>
        {value}
      </span>
      <span className={`text-sm ${isExploded ? 'text-white' : 'text-gray-600'}`}>
        {label}
      </span>
    </div>
  );

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
      <style>
        {`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }

          .kaboom {
            animation: shake 0.2s ease-in-out;
            font-size: 2.5rem;
            text-shadow: 2px 2px 8px rgba(255, 0, 0, 0.5);
          }
        `}
      </style>
      
      <h2 className="text-2xl font-bold text-center mb-6">Kaboom Timer</h2>
      
      <div className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label htmlFor="datetime" className="text-sm font-medium">
            Select Target Date and Time:
          </label>
          <input
            type="datetime-local"
            id="datetime"
            value={targetDate}
            onChange={handleDateChange}
            className="p-2 border rounded-md"
          />
        </div>

        <div className={`flex justify-between space-x-2 ${timeLeft.seconds <= 10 && isRunning ? 'animate-[shake_0.2s_ease-in-out_infinite]' : ''}`}>
          <TimeDisplay value={timeLeft.days} label="Days" />
          <TimeDisplay value={timeLeft.hours} label="Hours" />
          <TimeDisplay value={timeLeft.minutes} label="Minutes" />
          <TimeDisplay value={timeLeft.seconds} label="Seconds" />
        </div>

        {isExploded && (
          <div className="text-center text-red-500 font-bold kaboom">
            💥 KABOOM! 💥
          </div>
        )}
      </div>
    </div>
  );
};

export default Kaboom;