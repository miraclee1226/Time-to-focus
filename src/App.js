import './App.css';
import {useState, useEffect} from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'




function App() {
  let [time, setTime] = useState(new Date())
  let [text, setText] = useState("")
  let [list, setList] = useState([])
  let [isValid, setIsValid] = useState(false)

  
  useEffect(()=>{
    setInterval(() => {
      setTime(new Date());
    }, 1000);
    return (
      clearInterval()
      )
    }, []);

    function post (e) {
      const copyList = [...list];
      copyList.push(text);
      setList(copyList);
      setText('');

    }
    


  return (
    <div className='App'>
      <div className='nav'>
        <h4>Pomodoro</h4>
      </div>
      <div className='date'>{time.toLocaleTimeString()}</div>
      
    <Routes>

      <Route path='/' element= {
      <div className='todoContent'>
        <Todo />
        <div className='todayContent'>
          <h1>오늘</h1>
          <div className='todayMainContent'>
            <p>완료한 시간</p>
            <p>완료한 작업</p>
          </div>
          <div>
            <input 
              type="text" 
              onChange={(e)=>{
                setText(e.target.value);
              }} 
              onKeyUp={(e)=> {
                e.target.value.length > 0
                ? setIsValid(true) 
                : setIsValid(false);
              }}
              value={text}
              placeholder='✔ 할 일 추가' />
              <button 
              type='button'
              onClick={post}
              disabled={isValid ? false : true}
              >버튼</button>
          </div>
        </div>
      </div>
         } />

      <Route path='/tomorrowtodo' element= {
        <div className='todoContent'>
          <Todo />
        </div>
         } />

      <Route path='/someday' element= {
        <div className='todoContent'>
          <Todo />
        </div> } />

      <Route path='/complete' element= {
        <div className='todoContent'>
          <Todo />
        </div> } />

    </Routes>
    

    </div>

  );
}

function Todo(props) {
  return(

      <div className='leftnav'>
        <div className='todoLink'>
          <Link to ="/">🌞 오늘 할 일</Link>
          <Link to="/tomorrowtodo">📆 내일 할 일</Link>
          <Link to="/someday">📅 추후</Link>
          <Link to="/complete">✅ 완료</Link>
        </div>
       </div>
      


  )
}



export default App;
