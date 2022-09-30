import React, {useState} from 'react';


function TodoInsert({onAddTodo}) {
  let [newTodoItem, setNewTodoItem] = useState('');

  function todoInputHandler(e) {
    setNewTodoItem(e.target.value);
  };

  function addTodoHandler(e) {
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  };
  
  return(
  <div className='inputButton'>
    <input 
      className='insertBox'
      onKeyUp={(e)=> { 
        e.preventDefault();
        if(e.key === 'Enter' && e.target.value.length > 0) {
          addTodoHandler()
        } 
      }} 
      onChange={todoInputHandler} 
      value={newTodoItem} 
      placeholder='✔ 할 일 추가 (Press Enter)' />
  </div>
  )
}

export default React.memo(TodoInsert);