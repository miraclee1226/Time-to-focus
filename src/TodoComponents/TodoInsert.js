import {useState, useEffect, useRef, Link} from 'react';


function TodoInsert({onAddTodo}) {
  let [newTodoItem, setNewTodoItem] = useState('');

  function todoInputHandler(e) {
    setNewTodoItem(e.target.value);
  };

  function addTodoHandler() {
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  }
  // let [text, setText] = useState("")
  // let [list, setList] = useState([])
  // let [isValid, setIsValid] = useState(false)

  // function post (e) {
  //   const copyList = [...list];
  //   copyList.push(text);
  //   setList(copyList);
  //   // {id: Math.random().toString()}
  //   setText('');
  // }
  
  return(
  <div className='inputButton'>
    <input onChange={todoInputHandler} value={newTodoItem} placeholder='✔ 할 일 추가' />
    <button onClick={addTodoHandler}>버튼</button>
      {/* <input 
          type="text" 
          onChange={(e)=>{
          setText(e.target.value);
          }} 
          onKeyUp={(e)=> {
          e.target.value.length > 0
          ? setIsValid(true) 
          : setIsValid(false);

          //Press Enter
          if(window.event.keyCode == 13){
              post()
          }
          }}
          value={text}
          placeholder='✔ 할 일 추가' />
          <button 
          type='button'
          onClick={post}
          disabled={isValid ? false : true}
          >버튼</button> */}
  </div>
  )
}

export default TodoInsert;