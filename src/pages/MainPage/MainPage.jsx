import React, { useEffect, useState } from "react";
import Task from "../../components/Task";
import Modal from "../../components/Modal/Modal";

export default function MainPage({
  actualTasks,
  setActualTasks,
  newTask,
  setNewTask,
  setAddedTasks,
  addedTasks,
  historyDisplayTasks,
  setHistoryDisplayTasks,
}) {
  let [showTask, setShowTask] = useState("");

  let task = "";

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(actualTasks, newTask));
    localStorage.setItem("addedTasks", JSON.stringify(addedTasks, newTask));
    localStorage.setItem("history", JSON.stringify(historyDisplayTasks, task));
  }, [actualTasks, historyDisplayTasks]);

  function getRandomTask() {
    const randomIndex = Math.floor(Math.random() * actualTasks.length);
    return actualTasks[randomIndex];
  }
  const [activeModal, setActiveModal] = useState(false);
  return (
    <div>
      {showTask && <Task>{showTask}</Task>}
      <div className="tabs">
        <button
          className="tab showTask"
          onClick={() => {
            task = getRandomTask();
            setShowTask(task);
            setHistoryDisplayTasks([...historyDisplayTasks, task]);
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
          value={newTask}
          onChange={(evt) => {
            setNewTask(evt.target.value);
          }}
        />
        <button
          className="addTaskButton"
          onClick={() => {
            if (newTask.trim().length === 0) {
              alert("Ну-ка напиши что-нибудь");
            } else {
              setActualTasks([...actualTasks, newTask]);
              setAddedTasks([...addedTasks, newTask]);
              setNewTask("");
              setActiveModal(false);
            }
          }}
        >
          Добавить задание
        </button>
      </Modal>
    </div>
  );
}
