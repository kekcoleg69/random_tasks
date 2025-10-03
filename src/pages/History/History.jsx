import React, { useState } from "react";

export default function History({
  historyDisplayTasks,
  setHistoryDisplayTasks,
}) {
  return (
    <ol>
      {historyDisplayTasks.map((history) => (
        <li>{history}</li>
      ))}
    </ol>
  );
}
