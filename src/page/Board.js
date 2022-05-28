import React, { useEffect } from "react";
import "./Board.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allMsg, selectMsg } from "../redux/msgSlice";
import Pagination from "../component/Pagination";

const Board = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { messageList } = useSelector(selectMsg);

  console.log(messageList);
  useEffect(() => {
    dispatch(allMsg());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="board">
      <div className="board block">
        <div className="">Message Board</div>
        <div className="comment">
          <Pagination data={messageList} />
        </div>
      </div>
    </div>
  );
};

export default Board;
