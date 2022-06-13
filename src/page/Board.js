import React, { useEffect } from "react";
import "./Board.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allMsg, selectMsg } from "../redux/msgSlice";
import { clearToken } from "../redux/userSlice";
import Pagination from "../component/Pagination";
import AddMessage from "../component/AddMessage";
import Skeleton from "../component/Skeleton";
import FilterPopover from "../component/FilterPopover";

const Board = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [change, setChange] = React.useState(false);

  const { messageList, resultMessage, isFetching } = useSelector(selectMsg);

  const loginMember = localStorage.getItem("member");
  useEffect(() => {
    dispatch(allMsg());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [change, resultMessage]);

  const Logout = () => {
    localStorage.clear();
    dispatch(clearToken());
    navigate("/login");
  };

  return (
    <div id="board">
      <div className="hero">
        <header>
          <nav className="navHome">
            <h2 className="logo">Message Board</h2>
            <ul>
              <li className="li">
                <a className="highlight" href="/ ">
                  HI {loginMember} !
                </a>
              </li>
              <li className="li">
                <a href="# ">{null}</a>
              </li>
              <li className="li">
                <FilterPopover />
              </li>
              <li className="li">
                <a href="# ">{null}</a>
              </li>
              <li className="li">
                <a href="# " onClick={() => Logout()}>
                  LOGOUT
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="bg">
          <img src={require("../assets/main.jpg")} alt="" />
        </div>

        <div className="content">
          {isFetching ? (
            <Skeleton />
          ) : (
            <Pagination
              change={change}
              setChange={setChange}
              data={messageList}
            />
          )}
          <div className="addMessage">
            <AddMessage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
