// import userEvent from '@testing-library/user-event';
import React from 'react';
import {useState, useEffect, useRef} from 'react';
import Timer from './Timer'


function Home () {
    let [time, setTime] = useState(new Date())
    let [text, setText] = useState("")
    let [list, setList] = useState([])
    let [isValid, setIsValid] = useState(false)
    let [done , setDone] = useState(0)
    let [min, setMin] = useState('25')
    let [sec, setSec] = useState('0')
    
    
    

    useEffect(()=>{
    setInterval(() => {
        setTime(new Date());
    }, 1000);
    return (
        clearInterval()
        )
    }, []);

    // useEffect(()=> {
    //     const timerId = setTimeout(() => {
            
    //     }, 1000);
    // })

    
    function post (e) {
        const copyList = [...list];
        copyList.push(text);
        setList(copyList);
        setText('');
    }

    // const onMinChange = (e)=> {
    //     setMin(e.target.value);
    // }

    // const onSecChange = (e)=> {
    //     setSec(e.target.value);
    // }

    return (
        <div className='todoContent'>
            
            <div className='todayContent'>
                <div className='mainAndtimer'>
                    <div>
                        <h1>오늘</h1>
                        
                        <div className='todayMainContent'>
                            <p>완료한 시간</p>
                            <p>완료한 작업{done}</p>
                        </div>
                    </div>
                    {/* <Timer min={min} sec={sec} /> */}
                    <div className="timer">
                        
                        <h2>
                            {min} : {sec}
                        </h2>
                    <button onClick={<Timer min={min} sec={sec} />}>Start</button>
                    </div>


                </div>

            {/* 할 일 */}
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
    )
}




export default Home