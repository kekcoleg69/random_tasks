import React from "react";
import { Link } from "react-router";
import "./Header.css";
export default function Header() {
  return (
    <header>
      <Link className="link" to="/">
        Главная
      </Link>
      <Link className="link" to="/history">
        История заданий
      </Link>
      <Link className="link" to="/added_tasks">
        Добавленные задания
      </Link>
    </header>
  );
}
