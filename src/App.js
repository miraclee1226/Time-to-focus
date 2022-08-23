import './App.css';
import {useState, useEffect} from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import Home from './pages/Home.js'
import Tomorrow  from './pages/Tomorrow';
import Someday from './pages/Someday'
import Complete from './pages/Complete'



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
      <div className='allContent'>
        <div className='leftnav'>
          <div className='todoLink'>
            <Link to ="/">🌞 오늘 할 일</Link>
            <Link to="/tomorrowtodo">📆 내일 할 일</Link>
            <Link to="/someday">📅 추후</Link>
            <Link to="/complete">✅ 완료</Link>
          </div>
        </div>
        
        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/tomorrowtodo' element= {<Tomorrow/>} />
          <Route path='/someday' element= {<Someday/>} />
          <Route path='/complete' element= {<Complete/>} />
        </Routes>
      </div>
    </div>
  );
}



// function TextList(props) {
//   return (
//     <div className='todoList'>
//       <button>완료</button>
//       <p>{props.usertext}</p>
//       <button onClick={()=>{
//         let copy = [...list];
//         copy.splice(i, 1);
//         setList(copy);
//       }}>삭제</button>
//     </div>
//   )
// }



export default App;