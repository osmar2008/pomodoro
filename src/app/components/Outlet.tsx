"use client";
import React from "react";
import { useState, useEffect } from "react";

interface OutletProps {
  value: number;
}

const Outlet: React.FC<OutletProps> = ({ value }) => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState<number>(value);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    let timer: any;
    if (isActive && time > 0) {
      timer = setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
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
    setTime(25 * 60);
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
      </div>
    </>
  );
};

export default Outlet;
