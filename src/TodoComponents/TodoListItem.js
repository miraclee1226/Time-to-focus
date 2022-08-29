import {useState, useEffect, useRef, Link} from 'react';
import { MdOutlineCheckBox } from "react-icons/md"
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md"
import { FaRegTrashAlt } from "react-icons/fa"
import Complete from '../pages/Complete';

function TodoListItem({textValue, id, checked, onRemove, onToggle, addDone, removeDone}) {

  // let [list, setList] = useState([])
 

  return (
    <div className='todolistitemStyle'>
      {/* <button type="checkbox"></button> */}
      <div className='checkboxAndcontent'>
          <div onClick={onToggle(id)} className='checkbox'>  
          { 
          checked ? 
          <MdOutlineCheckBox onClick={removeDone} className='checkbox'/> : 
          <MdOutlineCheckBoxOutlineBlank onClick={()=>{addDone()}} className='checkbox'/>
          
          }
          </div>
          <p className={checked ? 'line' : 'noLine'}>{textValue}</p>
          
      </div>
      <div className='removeboxDiv'>
        <FaRegTrashAlt className='removebox' onClick={onRemove(id)}/>
        {/* <button onClick={onRemove(id)}>삭제</button> */}
      </div>
    </div>
              
                // list.map((textArr, i) => {
                //     return (
                //         <div className='todoList'>
                //             <button onClick={()=> {
                //                 setDone(done+1)
                //                 let copy = [...list];
                //                 copy.splice(i, 1);
                //                 setList(copy);
                //             }}>완료</button>
                //             <p>{textArr}</p>
                //             <button onClick={()=>{
                //                 let copy = [...list];
                //                 copy.splice(i, 1);
                //                 setList(copy);
                //             }}>삭제</button>
                //         </div>
                //     )
                // })
 
    
  )
}

export default TodoListItem