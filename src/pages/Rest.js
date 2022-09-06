import React from 'react';
import ReactPlayer from 'react-player';

function Rest() {
  return (
    <div className='player-wrapper'>
    <ReactPlayer 
        className="react-player"
        url={"https://www.youtube.com/watch?v=9LQsLPsKRq8"} 
        width="1100px"
        height="570px"
        playing={true}
        muted={true}
        controls={true} />
    </div>
  )
}
export default Rest