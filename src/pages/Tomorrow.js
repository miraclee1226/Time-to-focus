import {useState, useEffect} from 'react';

function Tomorrow() {
    let [time, setTime] = useState(new Date())
    let [text2, setText2] = useState("")

    let [list2, setList2] = useState([])

    let [isValid2, setIsValid2] = useState(false)


    useEffect(()=>{
    setInterval(() => {
        setTime(new Date());
    }, 1000);
    return (
        clearInterval()
        )
    }, []);


    function post2 (e) {
        const copyList2 = [...list2];
        copyList2.push(text2);
        setList2(copyList2);
        setText2('');
    }
        

    return (
        <div className='todoContent'>
      
      <div className='todayContent'>
        <h1>내일</h1>

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
              }}
              value={text2}
              placeholder='✔ 할 일 추가' />
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
            <div className='todoList'>
              <p>{textArr2}</p>
              <button onClick={()=>{
                let copy2 = [...list2];
                copy2.splice(i, 1);
                setList2(copy2);
              }}>삭제</button>
            </div>
          )
        })
      }

      </div>
    </div>
    )
    }


    export default Tomorrow