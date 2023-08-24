"use client";
import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalTasks from "../components/ModalTasks";
import Tabs from "../components/Tabs";
import { useAppSelector } from "@/redux/store";
import { selectTaskById } from "@/redux/features/TasksSlice";

interface PomodoroProps {
  uid: number;
}

const Pomodoro: React.FC<PomodoroProps> = ({ uid }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <main className="bg-blue-400 flex justify-center items-center min-h-screen flex-col">
      <div className="bg-blue-300 py-6 w-1/3 h-1/3 flex justify-center items-center flex-col rounded-lg">
        <Tabs />
      </div>
      <button
        className="m-6 bg-blue-500 px-3 py-2 rounded-lg text-white"
        onClick={() => setShowModal(true)}
      >
        Tarefas
      </button>
      <audio src="/top_alarm.mp3" className="h-1/2 w-10">
        Tocar
      </audio>

      {showModal &&
        createPortal(
          <ModalTasks onClose={() => setShowModal(false)} />,
          document.body
        )}
    </main>
  );
};

export default Pomodoro;
