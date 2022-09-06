import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import {Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Tomorrow  from './pages/Tomorrow';
import Someday from './pages/Someday'
import Rest from './pages/Rest';

// import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import thunk from 'redux-thunk';

// import counterReducer from '../features/counter/counterSlice';

// const reducers = combineReducers({
//   counter: counterReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

// const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: [thunk],
// });

// export default store;



function App() {
  let [time, setTime] = useState(new Date())

    useEffect(()=>{
    setInterval(() => {
        setTime(new Date());
    }, 1000);
    return (
        clearInterval()
        )
    }, []);

  return (
    <div className='App'>
      <div className='nav'>
        <h4>Pomodoro</h4>
      </div>

      <div className='date'>{time.toLocaleTimeString()}</div>
      <div className='allContent'>
        <div className='leftnav'>
          <div className='todoLink'>
            <Link to ="/">🌞 오늘 할 일</Link>
            <Link to="/tomorrowtodo">📆 내일 할 일</Link>
            <Link to="/someday">📅 추후</Link>
            <Link to="/rest">😎 휴식</Link>
          </div>
        </div>

        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/tomorrowtodo' element= {<Tomorrow />} />
          <Route path='/someday' element= {<Someday />} />
          <Route path='/rest' element= {<Rest />} />
        </Routes>
      </div>
    </div>
  );
}


export default React.memo(App);