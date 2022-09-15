import React from 'react';
import ReactPlayer from 'react-player';

function Rest() {
  return (
    <div className='todoContent'>
      <div className='todayContent'>
        <h1 className='restTitle'>휴식</h1>
      </div>
    <div className='player-wrapper'>
    <ReactPlayer 
        className="react-player"
        url={"https://www.youtube.com/watch?v=jANE8lpoj2c"} 
        width="1100px"
        height="500px"
        playing={true}
        muted={true}
        controls={true} />
    </div>
    </div>
  )
}
export default Rest