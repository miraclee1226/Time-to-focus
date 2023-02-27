import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import Today from './pages/Today'
import Tomorrow  from './pages/Tomorrow';
import Someday from './pages/Someday'
import Calender from './pages/Calender';


function App() {
  let [time, setTime] = useState(new Date())

  useEffect(()=>{
    const timer = setInterval(() => {
        setTime(new Date());
    }, 1000);
    return ()=>{
      clearInterval(timer)
    }
    }, []); 

  return (
    <div className='app'>
      <div className='header'>
        <h4>Time to Focus</h4>
      </div>

      <div className='allContent'>
        <div className='leftNav'>
          <div className='leftNavLink'>
            <Link to ="/">🌞 오늘 할 일</Link>
            <Link to="/tomorrow">📆 내일 할 일</Link>
            <Link to="/someday">📅 추후</Link>
            <Link to="/calender">🙌 달력</Link>
          </div>
          <div className='nowTime'>
            {time.toLocaleTimeString()}
          </div>
        </div>
      </div>
          <Routes>
            <Route path='/' element={<Today />} />
            <Route path='/tomorrow' element={<Tomorrow />} />
            <Route path='/someday' element={<Someday />} />
            <Route path='/calender' element={<Calender />} />
          </Routes>
    </div>
  );
}


export default React.memo(App);