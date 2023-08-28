"use client";
import React, { useRef } from "react";
import { useState, useEffect } from "react";

interface TimeProps {
  value: number;
}

const Time: React.FC<TimeProps> = ({ value }) => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState<number>(value);
  const [buttonStop, setButtonStop] = useState<boolean>(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const alarmRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    let timer: any;
    if (isActive && time > 0) {
      timer = setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    if (time === 0) {
      alarmRef.current?.play();
      setButtonStop(true);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [time, isActive]);

  const handlePaused = () => {
    if (isActive) {
      setIsActive(false);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(value);
  };

  const handleStop = () => {
    alarmRef.current?.pause();
    setButtonStop(false);
  };

  return (
    <>
      <div className="flex pt-4">
        <h1 className="text-white text-8xl">
          {minutes.toString().padStart(2, "0")}
        </h1>
        <h1 className="text-white text-8xl">:</h1>
        <h1 className="text-white text-8xl">
          {seconds.toString().padStart(2, "0")}
        </h1>
        {buttonStop && (
          <div className="flex items-center ms-4">
            <button onClick={handleStop}>STOP</button>
          </div>
        )}
      </div>
      <div className="flex justify-center pt-4">
        <button
          className="me-4 p-1 text-white"
          onClick={() => setIsActive(true)}
        >
          Start
        </button>
        <button className="me-4 p-1 text-white" onClick={() => handlePaused()}>
          Pause
        </button>
        <button className="p-1 text-white" onClick={() => handleReset()}>
          Reset
        </button>
        <audio ref={alarmRef} src={"/top_alarm.mp3"} />
      </div>
    </>
  );
};

export default Time;
