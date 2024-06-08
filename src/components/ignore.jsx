import React, { useRef, useEffect } from 'react';
import './ignore.css';
export default function Ignore() {
    const videoRef = useRef(null);
  
    useEffect(() => {
      const video = videoRef.current;
      video.play();
    }, []);
  
    return (
      <>
        <video className="ignore" ref={videoRef} autoPlay loop>
          <source
            src="https://d2rndhzlwwne8a.cloudfront.net/ignorance.mp4"  // Updated source
            type="video/mp4"
          />
        </video>
        <h1 className='text'>Ignorance is a bliss</h1>
      </>
    );
  }
  