import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allMsg,
  delMsg,
  renewMsg,
  addMsg,
  selectMsg,
  clearState,
} from "../redux/msgSlice";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
const AddMessage = () => {
  const dispatch = useDispatch();
  //   const handleaddMsg = () => {
  // dispatch(addMsg());
  // console.log("ok");
  //   };
  //   const handledelMsg = () => {
  //     dispatch(delMsg());
  //     console.log("ok");
  //   };
  //   const handlerenewMsg = () => {
  //     dispatch(renewMsg());
  //     console.log("ok");
  //   };
  const handleClick = () => {
    dispatch(addMsg());
    dispatch(clearState());
    dispatch(allMsg());
  };
  return (
    <div>
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        onClick={() => handleClick()}
      >
        Send
      </Button>
    </div>
  );
};

export default AddMessage;
