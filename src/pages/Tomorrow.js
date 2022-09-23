import {useState, useEffect} from 'react';
import { FaRegTrashAlt } from "react-icons/fa"

function Tomorrow() {

    let [text2, setText2] = useState("");
    let [list2, setList2] = useState(()=> {
      if (typeof window !== "undefined") {
        const saved =  window.localStorage.getItem("tomorrowInLocal");
        if(saved !== null) {
          return JSON.parse(saved);
        } else {
          return [];
        }
      }
    });
    
    useEffect(()=>{
      localStorage.setItem("tomorrowInLocal", JSON.stringify(list2));
    }, [list2]);

    function post2 (e) {
        const copyList2 = [...list2];
        copyList2.push(text2);
        setList2(copyList2);
        setText2('');
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
                  setText2(e.target.value);
                }}
                onKeyUp={(e)=> { 
                  if(e.key == 'Enter') {
                    if(e.target.value.length > 0) {
                        post2()
                      }
                  } 
                }}
                value={text2}
                placeholder='✔ 할 일 추가 (Press Enter)' 
                />
            </div>
          </div>

          {
          list2.map((textArr2, i) => 
              <div key={textArr2.id} className='todolistitemStyle'>
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
        }

        </div>
      </div>
    )
    }


    export default Tomorrow