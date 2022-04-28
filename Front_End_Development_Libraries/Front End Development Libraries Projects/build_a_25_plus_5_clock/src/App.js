import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown,faArrowUp,faPause,faPlay,faRotate } from '@fortawesome/free-solid-svg-icons'

const settings = [
  {
    "display": "Break Length",
    "id": "break"
  },
  {
    "display": "Session Length",
    "id": "session"
  }
]

function Length(props) {
    return (
      <div className='LengthSection'>
        <h4 id={props.id + "-label"}>{props.display}</h4>
        <div className="ButtonSection">
          {/* <FontAwesomeIcon id={props.id + "-decrement"} onClick={() => props.handleSettingClick(props.id,"decrement")} icon={faArrowDown} /> */}
          <button id={props.id + "-decrement"} onClick={() => props.handleSettingClick(props.id,"decrement")}  ><FontAwesomeIcon icon={faArrowDown} /></button>
          <h4 id={props.id + "-length"}>{props.length}</h4>
          {/* <FontAwesomeIcon id={props.id + "-increment"} onClick={() => props.handleSettingClick(props.id,"increment")} icon={faArrowUp}  /> */}
          <button id={props.id + "-increment"} onClick={() => props.handleSettingClick(props.id,"increment")}  ><FontAwesomeIcon icon={faArrowUp} /></button>
        </div>
      </div>
    );
  }

function App() {
  //Try coding State hook
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [totalSeconds, setTotalSeconds] = useState(1500);
  const [isCountBegin, setIsCountBegin] = useState(false);
  const [current, setCurrnet] = useState("Session");
  const timer = useRef();

  function handleSettingClick(id, action) {
    if (!isCountBegin)
    {
      if (id === "break")
      {
        setBreakLength(prev => action === "increment" ?  prev >= 60 ? prev : prev + 1 : prev === 1 ? prev : prev - 1);
      } else if (id === "session")
      {
        setSessionLength(prev => action === "increment" ? prev >= 60 ? prev : prev + 1 : prev === 1 ? prev : prev - 1);
        setTotalSeconds(prev => action === "increment" ?  prev >= 3600 ? prev : prev + 60 : prev === 60 ? prev : prev - 60);
      }
    }
  };
  function startpause() {
    setIsCountBegin(prev => !prev);
    if (!isCountBegin) {
      clearInterval(timer.current);
    }
  }
  function reset() {
    setBreakLength(5);
    setSessionLength(25);
    setTotalSeconds(1500);
    setIsCountBegin(false);
    setCurrnet("Session");
    document.getElementById('beep').pause();
    document.getElementById('beep').currentTime = 0;
  }

  function displayTimer(totalSeconds) {
    let minutes = parseInt(totalSeconds / 60, 10);
    let seconds = parseInt(totalSeconds % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    return (minutes + ":" + seconds);
  }
  useEffect(() => {
    console.log(isCountBegin);
    if (isCountBegin) {
      timer.current = setInterval(()=> {
        let newTotalSeconds = totalSeconds - 1;
        if (newTotalSeconds === 0) {
          document.getElementById('beep').play();
        }
        if (newTotalSeconds < 0) {
          if (current === "Session"){
            setCurrnet("Break");
            newTotalSeconds = breakLength * 60;
          } else {
            setCurrnet("Session");
            newTotalSeconds = sessionLength * 60;
          }
        }

        setTotalSeconds(newTotalSeconds);
      }, 1000);
      return () => {
        clearInterval(timer.current);
      }
    }
  },[totalSeconds, isCountBegin])
  return (
    <div className="App">
      <audio id='beep' src='https://soundeffect-lab.info/sound/various/mp3/cuckoo-clock2.mp3'></audio>
      <h1>25 + 5 Clock</h1>
      <div className='SettingContainer'>
        {settings.map(s => <Length length={s.id === "break" ? breakLength: sessionLength} display={s.display} id={s.id} handleSettingClick={handleSettingClick} />)}
      </div>
      <div className='TimerContainer'>
        <h4 id="timer-label">{current}</h4>
        <div id="time-left"><h2>{displayTimer(totalSeconds)}</h2></div>
        <button id="start_stop" onClick={startpause}><FontAwesomeIcon icon={isCountBegin ? faPause : faPlay} /></button>
        <button  id="reset" onClick={reset} ><FontAwesomeIcon icon={faRotate} /></button>
      </div>
    </div>
  );
}

export default App;
