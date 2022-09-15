import { useEffect, useState, useRef } from 'react';
import { MdOutlineCheckBox } from "react-icons/md"
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md"
import { FaRegTrashAlt } from "react-icons/fa"
import React from "react";

function TodoListItem({todos, setTodos, textValue, id, checked, onRemove, onToggle, addDone, removeDone}) {

  let [edited, setedited] = useState(false);
  const editInputRef = useRef(null);
  let [newText, setnewText] = useState(todos.textValue);
  let [isValid3, setIsValid3] = useState(false);

  useEffect(()=> {
    //edit 모드일 때 포커싱 한다
    if(edited) {
      editInputRef.current.focus();
    }
  }, [edited]);

  function handleInputBlur() {
    <p onDoubleClick={onClickEditBtn} className={checked ? 'line' : 'noLine'}>{textValue}</p>
  }

  function onClickEditBtn() {
    setedited(true);
  }

  function onChangeEditInput(e) {
    setnewText(e.target.value);
  }

  function onDoubleClick() {
    const nextTodoList = todos.map(todo => ({ 
        ...todo,
        textValue: todo.id === id ? newText : todo.textValue,
    }));
    setTodos(nextTodoList);

    setedited(false);
  }

  function onKeyUp (e) {
    e.preventDefault();
    let blankPattern = /^\s+|\s+$/g;
    if(window.event.keyCode == 13) {
      if(e.target.value.length > 0) {
        setIsValid3(true) 
        onDoubleClick()
      } else if(e.target.value.replace(blankPattern,'') == ""){
        return false;
      }
    } else {
      setIsValid3(false)
    }
  }

  return (
    <div className='todolistitemStyle'>
      <div className='checkboxAndcontent'>
          <div onClick={onToggle(id)} className='checkbox'>  
          { 
          checked ? // checked: false;
          <MdOutlineCheckBox onClick={removeDone} className='checkbox'/> : 
          <MdOutlineCheckBoxOutlineBlank onClick={addDone} className='checkbox'/> 
          }
          </div>
          {
            !checked ? ( // 체크  안 된 상태일 때
              edited ? (  // 편집 안 된 상태일 때
                <input 
                type="text" 
                value={newText || '' || undefined}
                className='editedInput'
                ref={editInputRef}
                onChange={onChangeEditInput}
                onKeyUp={onKeyUp}
                onBlur={handleInputBlur}
                /> 
                ) : ( // 수정 된 상태일 때
                  <p onDoubleClick={onClickEditBtn} className={checked ? 'line' : 'noLine'}>{textValue}</p>
              )
              ) : <p className={checked ? 'line' : 'noLine'}>{textValue}</p>  
          }
      </div>
      <div className='removeboxDiv'>
        <FaRegTrashAlt className='removebox' onClick={onRemove(id)}/>
      </div>
    </div>
  )
}

export default React.memo(TodoListItem);