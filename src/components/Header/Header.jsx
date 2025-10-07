import React from "react";
import { Link } from "react-router";
import "./Header.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddTaskIcon from "@mui/icons-material/AddTask";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import HomeIcon from "@mui/icons-material/Home";
export default function Header() {
  return (
    <header style={{ display: "flex", alignItems: "center" }}>
      <Link className="link" to="/">
        <p>
          Главная <HomeIcon />
        </p>
      </Link>

      <Link className="link" to="/history">
        <p>
          История заданий <HistoryEduIcon />
        </p>
      </Link>
      <Link className="link" to="/added_tasks">
        <p>
          Добавленные задания <AddTaskIcon />
        </p>
      </Link>
      <Link className="link" to="/favorite_tasks">
        <p>
          Избранное <FavoriteIcon />
        </p>
      </Link>
    </header>
  );
}
