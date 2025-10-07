import React, { useEffect, useState } from "react";
import Task from "../../components/Task";
import Modal from "../../components/Modal/Modal";

import { Checkbox } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

export default function MainPage({
  actualTasks,
  setActualTasks,
  textTask,
  setTextTask,
  setAddedTasks,
  addedTasks,
  historyDisplayTasks,
  setHistoryDisplayTasks,
}) {
  let [showTask, setShowTask] = useState("");
  const [currentTask, setCurrentTask] = useState("");
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(actualTasks));
  }, [actualTasks]);
  useEffect(() => {
    localStorage.setItem("addedTasks", JSON.stringify(addedTasks));
  }, [addedTasks]);
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(historyDisplayTasks));
  }, [historyDisplayTasks]);

  function getRandomTask() {
    const randomIndex = Math.floor(Math.random() * actualTasks.length);
    return actualTasks[randomIndex];
  }
  const [activeModal, setActiveModal] = useState(false);
  return (
    <div>
      {showTask && (
        <Task>
          {showTask}
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            checked={currentTask.select}
            onChange={() => {
              const updatedTasks = actualTasks.map((task) =>
                task.text === currentTask.text
                  ? { ...task, select: !task.select }
                  : task
              );
              setActualTasks(updatedTasks);
              const updatedCurrent = updatedTasks.find(
                (task) => task.text === currentTask.text
              );
              setCurrentTask(updatedCurrent);
            }}
          />
        </Task>
      )}
      <div className="tabs">
        <button
          className="tab showTask"
          onClick={() => {
            const task = getRandomTask();
            setCurrentTask(task);
            setShowTask(task.text);

            setHistoryDisplayTasks([
              ...historyDisplayTasks,
              {
                id: historyDisplayTasks.length + 1,
                text: task.text,
                select: task.select,
              },
            ]);
          }}
        >
          Сгенерировать случайное задание
        </button>
        <button
          className="tab addTask"
          onClick={() => {
            setActiveModal(true);
          }}
        >
          Добавить задание
        </button>
      </div>
      <Modal
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        title={"Добавление задания"}
      >
        <input
          style={{
            width: "100%",
            marginTop: "20px",
          }}
          type="text"
          placeholder="Введите задание"
          value={textTask}
          onChange={(evt) => {
            setTextTask(evt.target.value);
          }}
        />
        <button
          className="addTaskButton"
          onClick={() => {
            if (textTask.trim().length === 0) {
              alert("Ну-ка напиши что-нибудь");
            } else {
              setActualTasks([
                ...actualTasks,
                { id: actualTasks.length + 1, text: textTask, select: false },
              ]);
              setAddedTasks([
                ...addedTasks,
                { id: actualTasks.length + 1, text: textTask, select: false },
              ]);
              setTextTask("");
              setActiveModal(false);
              console.log(actualTasks);
            }
          }}
        >
          Добавить задание
        </button>
      </Modal>
    </div>
  );
}
