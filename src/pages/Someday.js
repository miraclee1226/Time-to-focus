
import {useState, useEffect} from 'react';
import { FaRegTrashAlt } from "react-icons/fa"

function Someday() {

    let [text, setText] = useState("")
    let [list, setList] = useState(()=> {

        const saved = window.localStorage.getItem("somedayInLocal");
        if(saved !== null) {
          return JSON.parse(saved);
        } else {
          return [];
        }
      
    });
    
    useEffect(()=>{
      window.localStorage.setItem("somedayInLocal", JSON.stringify(list));
    }, [list]);

    function post (e) {
        const copyList = [...list];
        copyList.push(text);
        setList(copyList);
        setText('');
    }

    return (
      <div className='todoContent'>
        <div className='todayContent'>
          <h1>추후</h1>

          <div className='inputAndTodoist'>
            <p>할 일</p>
            <div className='insertboxAndtodolist'>
              <input 
                type="text" 
                className='insertBox' 
                onChange={(e)=>{
                  setText(e.target.value);
                }} 
                onKeyUp={(e)=> { 
                  if(e.key === 'Enter') {
                    if(e.target.value.length > 0) {
                        post()
                      }
                  }
                }}
                value={text}
                placeholder='✔ 할 일 추가 (Press Enter)' />
            </div>
          </div>

          {
            list.map((textArr, i) => 
                <div key={i} className='todolistitemStyle'>
                  <div className='checkboxAndcontent'>
                    <p>{textArr}</p>
                    </div>
                    <div>
                      <FaRegTrashAlt className='removebox' onClick={()=>{
                        let copy2 = [...list];
                        copy2.splice(i, 1);
                        setList(copy2);
                      }}/>
                    </div>
                </div>
              )
          }

        </div>
      </div>
    )
    }

export default Someday
