// import userEvent from '@testing-library/user-event';
import React from 'react';
import {useState, useCallback, useEffect} from 'react';
import Timer from './Timer'
import TodoInsert from '../TodoComponents/TodoInsert';
import TodoList from '../TodoComponents/TodoList';
import QuotesDatabase from '../QuotesDatabase';

function Today () {
    let [done , setDone] = useState(()=> {
        const saved = window.localStorage.getItem("doneInLocal");
        if(saved !== null) {
        return JSON.parse(saved);
        } else {
        return 0;
        }
      });
    let [todos, setTodos] = useState(()=> {
        const saved = window.localStorage.getItem("todayInLocal");
        if(saved !== null) {
            return JSON.parse(saved);
        } else {
            return [];
        }
    });
    
    useEffect(()=> {
        window.localStorage.setItem("doneInLocal", JSON.stringify(done));
        window.localStorage.setItem("todayInLocal", JSON.stringify(todos));
      }, [todos, done]);
    
    const addTodo = useCallback((text)=>{
        setTodos([
            // 이전에 있던 목록은 그대로 유지하면서
            ...todos,
            // 새로운 목록을 추가한 배열을 생성함
            {
                id: Math.random().toString(), textValue: text, checked: false
            },
        ]);
        
    }, [todos])


    const onRemove = useCallback((id)=> {
        return function (e) {
             setTodos(todos.filter(todo => todo.id !== id))
        } 
    }, [todos])
    
    const onToggle = useCallback((id) => {
        return function(e) {
            setTodos(
                todos.map(todo=> 
                    todo.id === id ? {...todo, checked: !todo.checked} : todo
                )
            )
        }
    }, [todos])

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
                            <QuotesDatabase />
                            <p>완료한 작업 개수 : {done}</p>
                        </div>
                    </div>
                    <div className='homeTimer'>
                        <Timer />
                    </div>
                </div>
            </div>

            {/* Add Todo */}
            <div className='textList2'>
                <div className='textList'>
                    <p>할 일</p>
                    <div className='inputButton'>
                        <TodoInsert onAddTodo={addTodo} />
                        <TodoList 
                            todos={todos} 
                            setTodos={setTodos} 
                            onRemove={onRemove} 
                            onToggle={onToggle} 
                            addDone={addDone} 
                            removeDone={removeDone} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Today;