import React from "react";

export default function Favorite({ actualTasks, setActualTasks }) {
  const favoriteTasks = actualTasks.filter((task) => task.select);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h3>Избранные задачи ❤️</h3>

      {favoriteTasks.length === 0 ? (
        <p>Пока нет избранных заданий</p>
      ) : (
        <ol>
          {favoriteTasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ol>
      )}
    </div>
  );
}
