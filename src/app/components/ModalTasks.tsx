import { addTask, selectTasks } from "@/redux/features/TasksSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface ModalTasksProps {
  onClose: () => void;
}

const ModalTasks: React.FC<ModalTasksProps> = ({ onClose }) => {
  const [name, setName] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const tasksRedux = useAppSelector(selectTasks);

  const handleAddTask = (name: string) => {
    if (name === "") {
      alert("Preencha uma tarefa!");
    } else {
      dispatch(addTask({ uid: Math.floor(Date.now() / 1000), name }));
      handleClear();
    }
  };

  const handleClear = () => {
    setName("");
  };

  return (
    <div className="flex overflow-auto absolute flex-col shadow-2xl bg-white bottom-14 top-14 min-h-4/5 w-1/4 rounded-2xl">
      <div className="py-2 flex justify-center bg-blue-200">
        <button className="flex items-center ms-2me-8" onClick={onClose}>
          <CloseIcon />
        </button>
        <input
          placeholder="Digite o nome de sua tarefa"
          className="p-4 bg-blue-200 w-4/6 border-blue-100 me-4 rounded-xl"
          value={name}
          id="name"
          onChange={(ev) => setName(ev.target.value)}
        />
        <button className="me-4" onClick={() => handleAddTask(name)}>
          Salvar
        </button>
      </div>
      <div className="ms-8 overflow-auto">
        {tasksRedux.map((task) => {
          return (
            <div key={task.uid} className="my-4 flex">
              <input type="checkbox" className="me-4 w-6" />
              <label className="w-full break-words overflow-hidden me-4">
                {task.name}
              </label>
              <div className="flex">
                <button>
                  <EditIcon />
                </button>
                <button className="mx-3">
                  <DeleteIcon />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ModalTasks;
