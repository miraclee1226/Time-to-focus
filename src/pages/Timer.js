import React from 'react';
import {useState, useEffect, useRef} from 'react';

function padNumber (num, length){
    return String(num).padStart(length,'0');
};

function Timer(props) {
  
  const [min, setMin] = useState(padNumber(parseInt(props.min), 2));
  const [sec, setSec] = useState(padNumber(parseInt(props.sec), 2));
  const [min2, setMin2] = useState(padNumber(parseInt(props.min2), 2));
  const [sec2, setSec2] = useState(padNumber(parseInt(props.sec2), 2));
  const initialTime = useRef(parseInt(props.min) * 60 + parseInt(props.sec));
  const initialTime2 = useRef(parseInt(props.min2) * 60 + parseInt(props.sec2));
  const interval = useRef(null);
  const [isActive, setIsActive] = useState(false);
  
  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    initialTime.current = 1500
    interval.current = 5

    interval.current = setInterval(() => {
      initialTime.current -= 1;
      const setMinpad = padNumber(parseInt(initialTime.current / 60), 2)
      setMin(setMinpad);
      const seSecPad =padNumber(initialTime.current % 60, 2)
      setSec(seSecPad);
    }, 1000);

      clearInterval(interval.current);
  }
  // console.log(reset);


  
  useEffect(() => {
      if (isActive) {
        interval.current = setInterval(() => {
          initialTime.current -= 1;
          const setMinpad = padNumber(parseInt(initialTime.current / 60), 2)
          setMin(setMinpad);
          const seSecPad =padNumber(initialTime.current % 60, 2)
          setSec(seSecPad);
        }, 1000);
      } else if(!isActive && min !== 0 && sec !== 0) 
      clearInterval(interval.current);

      return ()=> clearInterval(interval.current)
    }, [isActive, min, sec]);


    useEffect(() => {  
        if (initialTime.current <= 0) {
          clearInterval(interval.current);
          alert('rest')
        }
        return ()=> clearInterval(interval.current)
      }, [sec])
      
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
                <button>
                  Coffee Time
                </button>
              </div>
            </div>
          );
      
      };

    








export default Timer