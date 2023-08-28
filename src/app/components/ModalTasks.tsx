import {
  addTask,
  deleteTask,
  selectTaskById,
  selectTasks,
  updateTask,
} from "@/redux/features/TasksSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskType from "../types/TaskType";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { CSSTransition } from "react-transition-group";

interface ModalTasksProps {
  onClose: () => void;
}

const ModalTasks: React.FC<ModalTasksProps> = ({ onClose }) => {
  const [name, setName] = useState<string>("");
  const [taskIsEditing, setTaskIsEditing] = useState<number>(0);
  const [newName, setNewName] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const nodeRef = useRef(null);
  const dispatch = useDispatch<AppDispatch>();
  const tasksRedux = useAppSelector(selectTasks);
  const taskId = useAppSelector((state) =>
    selectTaskById(state, taskIsEditing)
  );

  useEffect(() => {
    if (taskIsEditing !== 0) {
      setNewName(taskId?.name as string);
    }
  }, [taskId, taskIsEditing]);

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

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (task: TaskType) => {
    dispatch(
      updateTask({
        id: task.uid,
        changes: { name: task.name },
      })
    );
    setTaskIsEditing(0);
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
              {task.uid === taskIsEditing ? (
                <>
                  <input
                    className="w-full break-words overflow-hidden me-4"
                    type="text"
                    value={newName}
                    onChange={(ev) => setNewName(ev.target.value)}
                  />
                  <button
                    className="mx-3"
                    onClick={() => handleEdit({ uid: task.uid, name: newName })}
                  >
                    <SaveAltIcon />
                  </button>
                </>
              ) : (
                <>
                  {isChecked && (
                    <input
                      type="checkbox"
                      onChange={() => setShowInput(true)}
                      className="me-4 w-6"
                    />
                  )}
                  <CSSTransition
                    in={isChecked}
                    nodeRef={nodeRef}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
                    onEnter={() => setShowInput(false)}
                    onExited={() => setShowInput(true)}
                  >
                    <label
                      ref={nodeRef}
                      className="w-full break-words overflow-hidden me-4"
                    >
                      {task.name}
                    </label>
                  </CSSTransition>
                </>
              )}
              <div className="flex">
                <button onClick={() => setTaskIsEditing(task.uid)}>
                  <EditIcon />
                </button>
                <button onClick={() => handleDelete(task.uid)} className="mx-3">
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
