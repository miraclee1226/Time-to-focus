
import {useState, useEffect} from 'react';
import { FaRegTrashAlt } from "react-icons/fa"


function Someday() {

    let [text2, setText2] = useState("")
    let [list2, setList2] = useState([])
    let [isValid2, setIsValid2] = useState(false)





    function post2 (e) {
        const copyList2 = [...list2];
        copyList2.push(text2);
        setList2(copyList2);
        setText2('');
    }

        

    return (
      <div className='todoContent'>
        <div className='todayContent'>
          <h1>추후</h1>

          <div className='textList'>
            <p>할 일</p>
            <div className='inputButton'>
              <input 
                type="text" 
                onChange={(e)=>{
                  setText2(e.target.value);
                }} 
                onKeyUp={(e)=> {
                  e.target.value.length > 0
                  ? setIsValid2(true) 
                  : setIsValid2(false);
                  if(window.event.keyCode == 13){
                    post2()
                }
                }}
                value={text2}
                placeholder='✔ 할 일 추가 (Press Enter)' />
                <button 
                type='button'
                onClick={post2}
                disabled={isValid2 ? false : true}
                >버튼</button>
            </div>
          </div>

          {
          list2.map((textArr2, i) => {
            return (
              <div className='todolistitemStyle'>
                <div className='checkboxAndcontent'>
                  <p>{textArr2}</p>
                  </div>
                  <div className='removeboxDiv'>
                    <FaRegTrashAlt className='removebox' onClick={()=>{
                      let copy2 = [...list2];
                      copy2.splice(i, 1);
                      setList2(copy2);
                    }}/>
                  </div>
              </div>
            )
          })
        }

        </div>
      </div>
    )
    }

export default Someday
