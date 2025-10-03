import React from "react";
import "./AddedTasks.css";
export default function AddedTasks({ addedTasks }) {
  return (
    <ol>
      {addedTasks.map((story) => (
        <li>{story}</li>
      ))}
    </ol>
  );
}
