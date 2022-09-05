import React from 'react';
import {useState, useEffect, useRef} from 'react';

function padNumber (num, length){
    return String(num).padStart(length,'0');
};

function Timer(props) {
  
  const [min, setMin] = useState(padNumber(parseInt(props.min), 2));
  const [sec, setSec] = useState(padNumber(parseInt(props.sec), 2));
  const initialTime = useRef(parseInt(props.min) * 60 + parseInt(props.sec));
  const interval = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(false);
  
  function toggle() {
    setIsActive(!isActive);
  }

  function coffeTime() {
    initialTime.current = 900
    interval = null

    interval.current = setInterval(() => {
      initialTime.current -= 1;
      const setMinpad = padNumber(parseInt(initialTime.current / 60), 2)
      setMin(setMinpad);
      const seSecPad =padNumber(initialTime.current % 60, 2)
      setSec(seSecPad);
    }, 1000);

      clearInterval(interval.current);
  }

  function reset() {
    initialTime.current = 1500
    interval = null

    interval.current = setInterval(() => {
      initialTime.current -= 1;
      const setMinpad = padNumber(parseInt(initialTime.current / 60), 2)
      setMin(setMinpad);
      const seSecPad =padNumber(initialTime.current % 60, 2)
      setSec(seSecPad);
    }, 1000);

      clearInterval(interval.current);
  }
  
  useEffect(() => {
      if (isActive) {
        interval.current = setInterval(() => {
          initialTime.current -= 1;
          setMin(padNumber(parseInt(initialTime.current / 60), 2));
          setSec(padNumber(initialTime.current % 60, 2));
        }, 1000);
      } else if(!isActive && min !== 0 && sec !== 0) 
      clearInterval(interval.current);

      return ()=> clearInterval(interval.current)
    }, [isActive, min, sec]);


    useEffect(() => {  
      if(isActive) {
        if (initialTime.current === 0) {
          initialTime.current = 300
          alert('Time to break!')
          // clearInterval(interval.current)
          }         
        }
        // clearInterval(interval.current)
        return ()=> clearInterval(interval.current)
    }, [isActive, min,sec])
      
        return (
            <div className="timer">
              <h2 className='minAndsec'>
                {min} : {sec}
              </h2>
              <div className='timerBtns'>
                <button className='firstTimeBtn' onClick={toggle}>
                  {isActive ?  'Stop' : 'Start'}
                </button>
                <button onClick={reset}>
                  Reset
                </button>
                <button onClick={coffeTime}>
                  Coffee Time
                </button>
              </div>
            </div>
          );
      };



export default Timer







//// 2

// import React from 'react';
// import {useState, useEffect, useRef} from 'react';


// function Timer() {
//   let [minutes, setMinutes] = useState(25);
//   let [seconds, setSeconds] =  useState(0);
//   const [displayMessage, setdisplayMessage] = useState(false);
//   const interval = useRef(null);
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     interval.current =  setInterval(()=>{
    
//         if(isActive) {

//           if(seconds === 0) {
//             if(minutes !== 0) {
//               setSeconds(59);
//               setMinutes(minutes-1);
//             } else {
//               let minutes = displayMessage ? 24 : 4;
//               let seconds = 59;
              
//               setSeconds(seconds);
//               setMinutes(minutes);
//               setdisplayMessage(!displayMessage);
//             }
//           } else {
//             setSeconds(seconds-1);
//           }

//         } else if(!isActive && minutes !==0 && seconds !==0){
//       clearInterval(interval.current);
//       interval.current = null;
//         }

//     },1000)
//   },[isActive, minutes ,seconds]);
  
//   const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
//   const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;  


//   function toggle() {
//     setIsActive(!isActive);
//   }

//   // function reset() {
//   //   initialTime.current = 1500
//   //   interval.current = 5

//   //   interval.current = setInterval(() => {
//   //     initialTime.current -= 1;
//   //     const setMinpad = padNumber(parseInt(initialTime.current / 60), 2)
//   //     setMin(setMinpad);
//   //     const seSecPad =padNumber(initialTime.current % 60, 2)
//   //     setSec(seSecPad);
//   //   }, 1000);

//   //     clearInterval(interval.current);
//   // }
//   // console.log(reset);


  
//   // useEffect(() => {
//   //     if (isActive) {
//   //       interval.current = setInterval(() => {
//   //         initialTime.current -= 1;
//   //         const setMinpad = padNumber(parseInt(initialTime.current / 60), 2)
//   //         setMin(setMinpad);
//   //         const seSecPad =padNumber(initialTime.current % 60, 2)
//   //         setSec(seSecPad);
//   //       }, 1000);
//   //     } else if(!isActive && min1 !== 0 && sec1 !== 0) 
//   //     clearInterval(interval.current);

//   //     return ()=> clearInterval(interval.current)
//   //   }, [seconds]);


//   //   useEffect(() => {  
//   //       if (initialTime.current <= 0) {
//   //         let minutes = displayMessage ? 24 : 4;
//   //         let seconds = 59;

//   //         setMin(minutes);
//   //         setSec(seconds);
//   //         setdisplayMessage(!displayMessage);

//   //       }
//   //       return ()=> clearInterval(interval.current)
//   //     }, [sec1])
      
//         return (
//             <div className="timer">
//               <h2 className='minAndsec'>
//                 <div>
//                  {displayMessage && <div>Times to Break</div>} 
//                 </div>
//                 {timerMinutes} : {timerSeconds}
//               </h2>
//               <div className='timerBtns'>
//                 <button className='firstTimeBtn' onClick={toggle}>
//                   {isActive ?  'Stop' : 'Start'}
//                 </button>
//                 <button>
//                   Reset
//                 </button>
//                 <button>
//                   Coffee Time
//                 </button>
//               </div>
//             </div>
//           );
      
//       };

// export default Timer