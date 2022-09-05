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
          alert('Time to break! If you want to reset, Please click Reset button.')
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



export default React.memo(Timer);
