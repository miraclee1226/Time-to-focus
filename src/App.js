import './App.css';
import {useState, useEffect} from 'react';

function App() {
  let [time, setTime] = useState(new Date())


  useEffect(()=>{
    setInterval(() => {
      setTime(new Date());
    }, 1000);
    return (
      clearInterval()
      )
  }, []);



  return (
    <div className='App'>
      <div className='nav'>
        <h4>Pomodoro</h4>
      </div>
      <div className='date'>{time.toLocaleTimeString()}</div>
      <div className='rightnav'>
      </div>
      

    </div>

  );
}



export default App;
