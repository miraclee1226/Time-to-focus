import { MdOutlineCheckBox } from "react-icons/md"
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md"
import { FaRegTrashAlt } from "react-icons/fa"
import React from "react";

function TodoListItem({textValue, id, checked, onRemove, onToggle, addDone, removeDone}) {

  return (
    <div className='todolistitemStyle'>
      <div className='checkboxAndcontent'>
          <div onClick={onToggle(id)} className='checkbox'>  
          { 
          checked ? 
          <MdOutlineCheckBox onClick={removeDone} className='checkbox'/> : 
          <MdOutlineCheckBoxOutlineBlank onClick={addDone} className='checkbox'/>
          }
          </div>
          <p className={checked ? 'line' : 'noLine'}>{textValue}</p>
      </div>
      <div className='removeboxDiv'>
        <FaRegTrashAlt className='removebox' onClick={onRemove(id)}/>
      </div>
    </div>
  )
}

export default React.memo(TodoListItem);