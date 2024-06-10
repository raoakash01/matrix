import React, { useRef, useState } from "react";
import bg1 from "../assets/bg1.mp3";
import "./begining.css";
import { Link } from "react-router-dom";
import MatrixEffect from "./matrixrain";

export default function Begining() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // Track audio state

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch((error) => console.error('Error playing audio:', error));
      }
      setIsPlaying((prevState) => !prevState);
    }
  };

  return (
    <div className="b1">
      <div className="back">
      <MatrixEffect className="matrixeffect"  />
      </div>
      
      <div className="firstline">
      <button className="sound" onClick={toggleAudio}>{isPlaying ? 'Sound Off' : 'Sound On'}</button>
        <div className="uppertext">
            <h1 className="head">There is no going back once you choose</h1>
        </div>
        
        <div className="redblue"><h3 className="redText">Red : to enter the real world</h3>
        <h3 className="blueText">Blue : ignore the real world</h3></div>
        </div>
        
      <audio ref={audioRef} muted={!isPlaying} loop>
        <source src={bg1} type="audio/mp3" />
      </audio>
      
      
      
      <div className="morpheus">
      <Link to='/home' className="red"></Link>
      <Link to='/ignore' className="blue"></Link> 
      </div>     
      
     
      
      <h1 className="choose">Choose the pill</h1>
    </div>
      
  );
}
