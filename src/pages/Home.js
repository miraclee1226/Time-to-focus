// import userEvent from '@testing-library/user-event';
import React from 'react';
import {useState, useEffect, useRef, Link} from 'react';
import Timer from './Timer'
import TodoInsert from '../TodoComponents/TodoInsert';
import TodoList from '../TodoComponents/TodoList';
import TodoListItem from '../TodoComponents/TodoListItem';
import Complete from './Complete';
// import { noop } from '@tanstack/query-core/build/types/packages/query-core/src/utils';


function Home () {
    let [time, setTime] = useState(new Date())
    let min = useState(25)
    let sec = useState(0)
    let restTime = useState(3)
    let min2 = useState(10)
    let sec2 = useState(0)
    let [done , setDone] = useState(0)
    let [todos, setTodos] = useState([])
    let [complete, setComplete] = useState([])

    function addTodo(text) {
        setTodos([
            ...todos,
            {
                id: Math.random().toString(), textValue: text, checked: false
            },
        ]);
    };

    const onRemove = function (id) {
        return function (e) {
            return setTodos(todos.filter(todo => todo.id !== id))
        } 
    }
    
    const onToggle = function(id) {
        return function(e) {
            setTodos(
                todos.map(todo=> 
                    todo.id === id ? {...todo, checked: !todo.checked} : todo
                )
            )
        }
    }

    function addDone() {
        setDone(done+1)
    }

    function removeDone(text) {
        setDone(done-1)
        setComplete([
            ...complete,
            {
                id: Math.random().toString(), textValue: text, checked: true
            }
        ])

    }

    useEffect(()=>{
    setInterval(() => {
        setTime(new Date());
    }, 1000);
    return (
        clearInterval()
        )
    }, []);

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
                    <div className='homeTimer'>
                        <Timer min={min} sec={sec} min2={min2} sec2={sec2} restTime={restTime} />
                    </div>
                </div>
            </div>

            {/* Add Todo */}
            <div className='textList2'>
                <div className='textList'>
                    <p>할 일</p>
                    <div className='inputButton'>
                        <TodoInsert onAddTodo={addTodo} />
                        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} addDone={addDone} removeDone={removeDone} />
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Home