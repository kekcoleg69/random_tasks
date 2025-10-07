import React, { useEffect, useState } from "react";

export default function History({
  historyDisplayTasks,
  setHistoryDisplayTasks,
}) {
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(historyDisplayTasks));
  }, [historyDisplayTasks]);
  return (
    <>
      <button
        style={{
          height: 50,
          width: 300,
          margin: "0 auto",
          marginTop: 50,
        }}
        onClick={() => {
          setHistoryDisplayTasks([]);
        }}
      >
        Очистить историю
      </button>
      <ol>
        {historyDisplayTasks.map((history) => (
          <li>{history.text}</li>
        ))}
      </ol>
    </>
  );
}
