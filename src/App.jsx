import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import { Route, Routes } from "react-router";
import History from "./pages/History/History";
import AddedTasks from "./pages/AddedTasks/AddedTasks";

const defaultTasks = [
  "Сделай 10 отжиманий",
  "Прочитай 5 страниц книги",
  "Позвони другу",
  "Выпей стакан воды",
  "Сделай 20 приседаний",
  "Выйди на улицу и прогуляйся 10 минут",
  "Напиши список дел на завтра",
  "Сделай зарядку для глаз",
  "Прибери на рабочем столе",
  "Послушай любимую песню",
];

function App() {
  const [actualTasks, setActualTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [...defaultTasks]
  );
  const [addedTasks, setAddedTasks] = useState(
    JSON.parse(localStorage.getItem("addedTasks")) || []
  );
  const [historyDisplayTasks, setHistoryDisplayTasks] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );
  const [newTask, setNewTask] = useState("");

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              actualTasks={actualTasks}
              setActualTasks={setActualTasks}
              newTask={newTask}
              setNewTask={setNewTask}
              addedTasks={addedTasks}
              setAddedTasks={setAddedTasks}
              setHistoryDisplayTasks={setHistoryDisplayTasks}
              historyDisplayTasks={historyDisplayTasks}
            />
          }
        ></Route>
        <Route
          path="/History"
          element={
            <History
              historyDisplayTasks={historyDisplayTasks}
              setHistoryDisplayTasks={setHistoryDisplayTasks}
            />
          }
        ></Route>
        <Route
          path="/added_tasks"
          element={
            <AddedTasks addedTasks={addedTasks} setAddedTasks={setAddedTasks} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
