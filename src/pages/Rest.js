import React from 'react';
import ReactPlayer from 'react-player';

function Rest() {
  return (
    <div>
    <ReactPlayer 
        className="videoPlayer"
        url={"https://www.youtube.com/watch?v=9LQsLPsKRq8"} 
        width="1100px"
        height="500px"
        playing={true}
        muted={true}
        controls={true} />
    </div>
  )
}
export default Rest