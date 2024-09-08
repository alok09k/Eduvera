import React, { useRef } from 'react'
import './Video.css'
import video from '../../assets/student-video.mp4'

function Video({playState,setPlayState}) {

    const player = useRef(null);

    const closedVideo = (e) => {
        if(e.target === player.current)
        {
            setPlayState(false);
        }
    }

  return (
    <div className={`video ${playState ? '':'hide'}`} ref={player} onClick={closedVideo}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Video