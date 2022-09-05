import React, {useState} from 'react';


function TodoInsert({onAddTodo}) {
  let [newTodoItem, setNewTodoItem] = useState('');

  function todoInputHandler(e) {
    setNewTodoItem(e.target.value);
  };

  function addTodoHandler() {
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  }
  
  return(
  <div className='inputButton'>
    <input onChange={todoInputHandler} value={newTodoItem} placeholder='✔ 할 일 추가' />
    <button onClick={addTodoHandler}>버튼</button>
  </div>
  )
}

export default React.memo(TodoInsert);