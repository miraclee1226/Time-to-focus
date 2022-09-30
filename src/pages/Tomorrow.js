import {useState, useEffect} from 'react';
import { FaRegTrashAlt } from "react-icons/fa"

function Tomorrow() {
    let [text, setText] = useState("");
    let [list, setList] = useState(()=> {
        const saved =  window.localStorage.getItem("tomorrowInLocal");
        if(saved !== null) {
          return JSON.parse(saved);
        } else {
          return [];
        }
    });
    
    useEffect(()=>{
      localStorage.setItem("tomorrowInLocal", JSON.stringify(list));
    }, [list]);

    function post (e) {
        const copyList = [...list];
        copyList.push(text);
        setList(copyList);
        setText('');
    };

    return (
      <div className='todoContent'>
        <div className='todayContent'>
          <h1>내일</h1>

          <div className='textList'>
            <p>할 일</p>
            <div className='inputButton'>
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
                placeholder='✔ 할 일 추가 (Press Enter)' 
                />
            </div>
          </div>

          {
            list.map((textArr, i) => 
                <div key={textArr} className='todolistitemStyle'>
                  <div className='checkboxAndcontent'>
                    <p>{textArr}</p>
                  </div>
                  <div className='removeboxDiv'>
                    <FaRegTrashAlt className='removebox' onClick={()=>{
                      let copy = [...list];
                      copy.splice(i, 1);
                      setList(copy);
                    }}/>
                  </div>
                </div>
              )
          }

        </div>
      </div>
    )
    }


    export default Tomorrow