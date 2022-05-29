import React, { useEffect } from "react";
import "./Board.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  allMsg,
  delMsg,
  renewMsg,
  addMsg,
  selectMsg,
  clearState,
} from "../redux/msgSlice";
import Pagination from "../component/Pagination";
import AddMessage from "../component/AddMessage";
import Skeleton from "../component/Skeleton";
import { LegendToggleSharp } from "@mui/icons-material";
const Board = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { messageList, isSuccess, isFetching } = useSelector(selectMsg);

  useEffect(() => {
    dispatch(allMsg());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(messageList);
  return (
    <div id="board">
      <div className="hero">
        <header>
          <nav>
            <h2 className="logo">Message Board</h2>
            <ul>
              <li className="li">
                <a href="#">HI Leon !</a>
              </li>
              <li className="li">
                <a href="#"></a>
              </li>
              <li className="li">
                <a href="#">Message</a>
              </li>
              <li className="li">
                <a href="#"></a>
              </li>
              <li className="li">
                <a href="#">Logout</a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="bg">
          <img src={require("../assets/main.jpg")} />
        </div>

        <div className="content">
          {isFetching ? <Skeleton /> : <Pagination data={messageList} />}
          <AddMessage />
        </div>
      </div>
    </div>
  );
};

export default Board;
