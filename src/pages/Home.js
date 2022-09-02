// import userEvent from '@testing-library/user-event';
import React from 'react';
import {useState, useEffect, useRef} from 'react';
import Timer from './Timer'
import TodoInsert from '../TodoComponents/TodoInsert';
import TodoList from '../TodoComponents/TodoList';

// import { noop } from '@tanstack/query-core/build/types/packages/query-core/src/utils';


function Home () {
    let min = useState(25)
    let sec = useState(0)
    let [done , setDone] = useState(0)
    let [todos, setTodos] = useState([])

    function addTodo(text) {
        setTodos([
            // 이전에 있던 목록은 그대로 유지하면서
            ...todos,
            // 새로운 목록을 추가한 배열을 생성함
            {
                id: Math.random().toString(), textValue: text, checked: false
            },
        ]);
    };

    const onRemove = function (id) {
        return function (e) {
             setTodos(todos.filter(todo => todo.id !== id))
        } 
    }
    
    const onToggle = function(id) {
        return function(e) {
            setTodos(
                todos.map(todo=> 
                    todo.id === id ? {...todo, checked: !todo.checked} : todo
                )
            )
            // console.log(todos)
        }
    }

    function addDone() {
        setDone(done+1)
    }

    function removeDone() {
        setDone(done-1)
    }
    
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
                        <Timer min={min} sec={sec} />
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