import React, {useState} from 'react';


function TodoInsert({onAddTodo}) {
  let [newTodoItem, setNewTodoItem] = useState('');
  let [isValid3, setIsValid3] = useState(false);
  // let [toggle, setToggle] = useState(true);

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
        if(window.event.keyCode == 13) {
          if(e.target.value.length > 0) {
              setIsValid3(true) 
              addTodoHandler()
            }
        } else {
          setIsValid3(false)
        }
      }} onChange={todoInputHandler} value={newTodoItem} placeholder='✔ 할 일 추가 (Press Enter)' />
  </div>
  )
}

export default React.memo(TodoInsert);