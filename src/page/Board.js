import React, { useEffect } from "react";
import "./Board.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allMsg, selectMsg, clearState } from "../redux/msgSlice";
import Pagination from "../component/Pagination";
import { LegendToggleSharp } from "@mui/icons-material";
const Board = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { messageList, isSuccess, isFetching } = useSelector(selectMsg);
  const [newList, setNewList] = React.useState([]);

  useEffect(() => {
    dispatch(allMsg());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isSuccess) {
    setNewList(messageList);
    dispatch(clearState());
  }

  console.log(newList);

  const addMessage = () => {
    let copy = [...newList];
    copy = [
      {
        id: newList.length + 1,
        message: "egaggege",
        time: "2022-05-29 15:33:11",
      },
      ...copy,
    ];
    setNewList(copy);
  };
  return (
    <div id="board">
      <div className="board block">
        <div className="">Message Board</div>
        <div className="comment">
          {isFetching ? (
            <img src="../assets/whEat.png" />
          ) : (
            <Pagination data={newList} />
          )}
          <button onClick={addMessage}>123123</button>
        </div>
      </div>
    </div>
  );
};

export default Board;
