import React from 'react';

function Rest() {
  return (
    <div className='todoContent'>
      <div className='todayContent'>
        <h1 className='restTitle'>휴식</h1>
      </div>
      <div className='player-wrapper'>
        <iframe className='iframe'
          width="1100" 
          height="500" 
          src="https://www.youtube.com/embed/jANE8lpoj2c?autoplay=1&mute=1" 
          title="YouTube video player" 
          // frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      </div>
    </div>
  )
}
export default Rest