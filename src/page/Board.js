import React, { useEffect } from "react";
import "./Board.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allMsg, selectMsg } from "../redux/msgSlice";
import { selectUser, clearToken } from "../redux/userSlice";
import Pagination from "../component/Pagination";
import AddMessage from "../component/AddMessage";
import Skeleton from "../component/Skeleton";
const Board = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { messageList, isSuccess, isFetching } = useSelector(selectMsg);
  const { userList } = useSelector(selectUser);

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
                <a href="#">HI {loginMember} !</a>
              </li>
              <li className="li">
                <a href="#"></a>
              </li>
              <li className="li">
                <a className="highlight" href="#">
                  Message
                </a>
              </li>
              <li className="li">
                <a href="#"></a>
              </li>
              <li className="li">
                <a href="#" onClick={() => Logout()}>
                  Logout
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
