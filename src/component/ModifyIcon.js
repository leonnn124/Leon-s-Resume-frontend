import React from "react";
import { useDispatch } from "react-redux";
import { renewMsg, delMsg } from "../redux/msgSlice";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
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

  const deleteMessage = () => {
    dispatch(
      delMsg({
        id: props.data.id,
      })
    );
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        onClick={handleOpen}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"確定刪除訊息?　　　　　"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            刪除後無法復原
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteMessage}>刪除</Button>
          <Button onClick={handleClose}>取消</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModifyIcon;
