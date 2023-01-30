import React from 'react';
import {useState, useEffect, useRef} from 'react';


function Timer() {
  
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const interval = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [displayMessage, setdisplayMessage] = useState(false);
  
  function toggle() {
    setIsActive(!isActive);
  }

  useEffect(()=>{
    if(isActive) {
      interval.current = setInterval(()=>{
        if (seconds === 0) {
          if(minutes !== 0) {
            setSeconds(59)
            setMinutes(minutes - 1)
          } else {
            let minutes = displayMessage ? 24 : 4
            let seconds = 59 
            setSeconds(seconds)
            setMinutes(minutes)
            setdisplayMessage(!displayMessage)
          }
        } else {
          setSeconds(seconds - 1)
        }
      }, 1000)
    } else if (!isActive && minutes !== 0 && seconds !== 0) {
      clearInterval(interval.current)
    }

    return () => clearInterval(interval.current)
  }, [isActive, seconds])

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds
      
        return (
            <div className="timer">
              <div>
                {
                displayMessage && 
                <div className="displayMessage">
                  Break Time!
                </div>
                }
              </div>
              <h2 className='minAndsec'>
                {timerMinutes} : {timerSeconds}
              </h2>
              <div className='timerBtns'>
                <button className='firstTimeBtn' onClick={toggle}>
                  {isActive ?  'Stop' : 'Start'}
                </button>
              </div>
            </div>
          );
      };



export default React.memo(Timer);
