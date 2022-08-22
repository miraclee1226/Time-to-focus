import './App.css';
import {useState, useEffect} from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'




function App() {
  let [time, setTime] = useState(new Date())

  let [text, setText] = useState("")
  let [text2, setText2] = useState("")

  let [list, setList] = useState([])
  let [list2, setList2] = useState([])

  let [isValid, setIsValid] = useState(false)
  let [isValid2, setIsValid2] = useState(false)

  let [min, setMin] = useState(25)
  let [sec, setSec] = useState(0)
  let [done , setDone] = useState(0)
  let [doneList, setDoneList] = useState([])
  
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

    function post2 (e) {
      const copyList2 = [...list2];
      copyList2.push(text2);
      setList2(copyList2);
      setText2('');
    }

    function startTimer() {
      setInterval(() => {
        setMin(min => min -1)
      }, 1000);
      

      const countDown = setInterval(() => {
        if(parseInt(sec > 0)) {
          setSec(parseInt(sec)-1);
        }
        if(parseInt(sec === 0)){
          if(parseInt(min === 0)) {
            clearInterval(countDown);
          } else {
            setMin(parseInt(min) - 1);
            setSec(59);
          }
        }
      },1000);
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
            <div className='mainAndtimer'>
              <div>
                <h1>오늘</h1>
                
                <div className='todayMainContent'>
                  <p>완료한 시간</p>
                  <p>완료한 작업{done}</p>
                </div>
              </div>
              <div className='timer'>
                {min}:{sec < 10 ? `0${sec}` : sec}
              <button onClick={startTimer}>Start</button>
              </div>
            </div>
            <div className='textList'>
              <p>할 일</p>
              <div className='inputButton'>
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


           {
              list.map((textArr, i) => {
                return (
                  <div className='todoList'>
                    <button onClick={()=> {
                      setDone(done+1)
                      let copy = [...list];
                      copy.splice(i, 1);
                      setList(copy);
                    }}>완료</button>
                    <p>{textArr}</p>
                    <button onClick={()=>{
                      let copy = [...list];
                      copy.splice(i, 1);
                      setList(copy);
                    }}>삭제</button>
                  </div>
                )
              })
            }
          </div>
        </div>
          } />






        <Route path='/tomorrowtodo' element= {
          <div className='todoContent'>
            <Todo />
            <div className='todayContent'>
              <h1>내일</h1>

              <div className='textList'>
                <p>할 일</p>
                <div className='inputButton'>
                  <input 
                    type="text" 
                    onChange={(e)=>{
                      setText2(e.target.value);
                    }} 
                    onKeyUp={(e)=> {
                      e.target.value.length > 0
                      ? setIsValid2(true) 
                      : setIsValid2(false);
                    }}
                    value={text2}
                    placeholder='✔ 할 일 추가' />
                    <button 
                    type='button'
                    onClick={post2}
                    disabled={isValid2 ? false : true}
                    >버튼</button>
                </div>
              </div>

              {
              list2.map((textArr2, i) => {
                return (
                  <div className='todoList'>
                    <p>{textArr2}</p>
                    <button onClick={()=>{
                      let copy2 = [...list2];
                      copy2.splice(i, 1);
                      setList2(copy2);
                    }}>삭제</button>
                  </div>
                )
              })
            }

            </div>
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

function Todo() {
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
