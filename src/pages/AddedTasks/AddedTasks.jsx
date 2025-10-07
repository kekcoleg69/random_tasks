import React, { useEffect } from "react";
import "./AddedTasks.css";
export default function AddedTasks({ addedTasks, setAddedTasks }) {
  useEffect(() => {
    localStorage.setItem("addedTasks", JSON.stringify(addedTasks));
  }, [addedTasks]);
  return (
    <ol>
      {addedTasks.map((story) => (
        <li key={story.id}>
          <span>{story.text}</span>
          <button
            onClick={(evt) => {
              setAddedTasks(
                [...addedTasks].filter((task) => task.id !== story.id)
              );
            }}
          >
            Удалить
          </button>
        </li>
      ))}
    </ol>
  );
}
