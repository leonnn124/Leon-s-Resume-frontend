import React, { useEffect } from "react";
import "./Board.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allMsg, selectMsg } from "../redux/msgSlice";
import { selectUser, clearToken } from "../redux/userSlice";
import Button from "@mui/material/Button";
import Pagination from "../component/Pagination";
import AddMessage from "../component/AddMessage";
import Skeleton from "../component/Skeleton";
import FilterPopover from "../component/FilterPopover";

const Board = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { messageList, isFetching } = useSelector(selectMsg);

  const loginMember = localStorage.getItem("member");
  useEffect(() => {
    dispatch(allMsg());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Logout = () => {
    localStorage.clear();
    dispatch(clearToken());
    navigate("/login");
  };

  return (
    <div id="board">
      <div className="hero">
        <header>
          <nav>
            <h2 className="logo">Message Board</h2>
            <ul>
              <li className="li">
                <a className="highlight" href="#">
                  HI {loginMember} !
                </a>
              </li>
              <li className="li">
                <a href="#"></a>
              </li>
              <li className="li">
                <FilterPopover />
              </li>
              <li className="li">
                <a href="#"></a>
              </li>
              <li className="li">
                <a href="#" onClick={() => Logout()}>
                  LOGOUT
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="bg">
          <img src={require("../assets/main.jpg")} />
        </div>

        <div className="content">
          {isFetching ? <Skeleton /> : <Pagination data={messageList} />}
          <div className="addMessage">
            <AddMessage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
