import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import {Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Tomorrow  from './pages/Tomorrow';
import Someday from './pages/Someday'
import Rest from './pages/Rest';


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
    <div className='scrollBar'>
      <div className='nav'>
        <h4>Pomodoro</h4>
      </div>

      <div className='allContent'>
          <div className='leftContainer'>
            <div className='leftnav'>
              <div className='todoLink'>
                <Link to ="/">🌞 오늘 할 일</Link>
                <Link to="/tomorrowtodo">📆 내일 할 일</Link>
                <Link to="/someday">📅 추후</Link>
                <Link to="/rest">🙌 휴식</Link>
              </div>
            </div>
          <div className='date'>{time.toLocaleTimeString()}</div>
          </div>
        

        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/tomorrowtodo' element= {<Tomorrow />} />
          <Route path='/someday' element= {<Someday />} />
          <Route path='/rest' element= {<Rest />} />
        </Routes>
      </div>
    </div>
  );
}


export default React.memo(App);