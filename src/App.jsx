import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import { Route, Routes } from "react-router";
import History from "./pages/History/History";
import AddedTasks from "./pages/AddedTasks/AddedTasks";
import Favorite from "./pages/Favorite/Favorite";

const defaultTasks = [
  {
    id: 1,
    text: "Сделай 10 отжиманий",
    select: false,
  },
  {
    id: 2,
    text: "Прочитай 5 страниц книги",
    select: true,
  },
  {
    id: 3,
    text: "Позвони другу",
    select: false,
  },
  {
    id: 4,
    text: "Выпей стакан воды",
    select: false,
  },
  {
    id: 5,
    text: "Сделай 20 приседаний",
    select: false,
  },
  {
    id: 6,
    text: "Выйди на улицу и прогуляйся 10 минут",
    select: false,
  },
  {
    id: 7,
    text: "Напиши список дел на завтра",
    select: false,
  },
  {
    id: 8,
    text: "Сделай зарядку для глаз",
    select: false,
  },
  {
    id: 9,
    text: "Прибери на рабочем столе",
    select: false,
  },
  {
    id: 10,
    text: "Послушай любимую песню",
    select: false,
  },
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
  const [textTask, setTextTask] = useState("");

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
              textTask={textTask}
              setTextTask={setTextTask}
              addedTasks={addedTasks}
              setAddedTasks={setAddedTasks}
              setHistoryDisplayTasks={setHistoryDisplayTasks}
              historyDisplayTasks={historyDisplayTasks}
            />
          }
        ></Route>
        <Route
          path="/history"
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
        <Route
          path="/favorite_tasks"
          element={
            <Favorite
              actualTasks={actualTasks}
              setActualTasks={setActualTasks}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
