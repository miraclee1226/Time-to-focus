import { useEffect, useState, useRef } from 'react';
import { MdOutlineCheckBox } from "react-icons/md"
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md"
import { FaRegTrashAlt } from "react-icons/fa"
import React from "react";

function TodoListItem({todos, setTodos, textValue, id, checked, onRemove, onToggle, addDone, removeDone}) {

  let [edited, setedited] = useState(false);
  const editInputRef = useRef();
  let [newText, setnewText] = useState(todos.textValue);

  useEffect(()=> {
    //edit 모드일 때 포커싱 한다
    if(edited) {
      editInputRef.current.focus();
    }
  }, [edited]);
  
  function onClickEditBtn() {
    setedited(true);
  }
  
  function onChangeEditInput(e) {
    setnewText(e.target.value);
  }

  function handleInputBlur() {
    <p onDoubleClick={onClickEditBtn} className={checked ? 'line' : 'noLine'}>{textValue}</p>
  }

  function onDoubleClick() {
    const nextTodoList = todos.map(todo => ({ 
        ...todo,
        textValue: todo.id === id ? newText : todo.textValue
    }));
    setTodos(nextTodoList);
    setedited(false);
  }

  function onKeyUp (e) {
    e.preventDefault();
    if(e.key === 'Enter' && e.target.value.length > 0) {
        onDoubleClick()
    } 
  }

  return (
    <div className='todolistitemStyle'>
      <div className='checkboxAndcontent'>
          <div onClick={onToggle(id)} className='checkbox'>  
          { 
          checked ? // checked: true;
          <MdOutlineCheckBox onClick={removeDone} className='checkbox'/> : 
          <MdOutlineCheckBoxOutlineBlank onClick={addDone} className='checkbox'/> 
          }
          </div>
          {
            !checked ? ( // 체크 안 된 상태
              edited ? (  // 수정 모드
                <input 
                type="text" 
                value={newText || ''}
                className='editedInput'
                ref={editInputRef} 
                onChange={onChangeEditInput}
                onKeyUp={onKeyUp}
                onBlur={handleInputBlur}
                /> 
                ) : ( // 수정 모드 X
                  <p 
                    onDoubleClick={onClickEditBtn} 
                    className={checked ? 'line' : 'noLine'}
                  >
                      {textValue}
                  </p>
              )
              ) : <p // 체크 된 상태
                    className={checked ? 'line' : 'noLine'}
                  >
                    {textValue}
                  </p>  
          }
      </div>
      <div className='removeboxDiv'>
        <FaRegTrashAlt className='removebox' onClick={onRemove(id)}/>
      </div>
    </div>
  )
}

export default React.memo(TodoListItem);