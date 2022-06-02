import React from "react";
import { useDispatch } from "react-redux";
import { renewMsg, clearState } from "../redux/msgSlice";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import "./ModifyIcon.css";
import getTime from "../services/date";

const ModifyIcon = (props) => {
  const dispatch = useDispatch();

  const editMessage = () => {
    props.setSelectId(props.data.id);
    props.setInputMessage(props.data.message);
  };

  const renewMessage = () => {
    var timeString = getTime();
    dispatch(
      renewMsg({
        id: props.data.id,
        newMessage: props.inputMessage,
        newTime: timeString,
      })
    );
  };

  const deleteMessage = () => {};

  return (
    <div className="modifyIcon">
      {!props.focus ? (
        <EditIcon
          sx={{
            height: "15px",
            width: "15px",
            margin: "0 5px",
            cursor: "pointer",
          }}
          onClick={editMessage}
        />
      ) : (
        <CheckIcon
          sx={{
            height: "15px",
            width: "15px",
            margin: "0 5px",
            cursor: "pointer",
          }}
          onClick={renewMessage}
        />
      )}
      <DeleteIcon
        sx={{
          height: "15px",
          width: "15px",
          margin: "0 5px",
          cursor: "pointer",
        }}
        onClick={deleteMessage}
      />
    </div>
  );
};

export default ModifyIcon;
