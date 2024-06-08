import React, { useRef, useEffect } from 'react';
import './ignore.css';
export default function Ignore() {
    const videoRef = useRef(null);
    
    useEffect(() => {
      const video = videoRef.current;
      video.playbackRate = 2.5; // increased video speed
      video.play();
    }, []);
    
    return (
      <>
        <video className="ignore" ref={videoRef} autoPlay loop>
          <source
            src="https://d2rndhzlwwne8a.cloudfront.net/ignorance.mp4"
            type="video/mp4"
          />
        </video>
        <h1 className='text'>Ignorance is a bliss</h1>
      </>
    );
  }
  
