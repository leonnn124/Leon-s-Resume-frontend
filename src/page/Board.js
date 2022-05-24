import React, { useEffect } from "react";
import "./Board.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allmsg, selectMsg } from "../redux/msgSlice";
import { Button, Table } from 'antd';

const Board = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { messageList } = useSelector(selectMsg);

  useEffect(() => {
    dispatch(allmsg());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(messageList);
  return (
    <div>
      <h1>789board</h1>
      <button>123123</button>
    </div>
  );
};

export default Board;
