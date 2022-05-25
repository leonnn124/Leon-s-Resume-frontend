import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import Board from "./page/Board";
import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/userSlice";

const App = () => {
  const { token } = useSelector(selectUser);
  const tokenCheck = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        {token !== "" && tokenCheck !== null ? (
          <Route path="*" element={<Navigate to="/login" replace />} />
        ) : (
          <Route path="/board" element={<Board />} />
        )}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
