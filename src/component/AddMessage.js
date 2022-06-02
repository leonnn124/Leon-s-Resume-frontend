import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allMsg, addMsg, clearState } from "../redux/msgSlice";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import getTime from "../services/date";

const AddMessage = (props) => {
  const dispatch = useDispatch();
  const [message, setMessage] = React.useState("");
  const [time, setTime] = React.useState("");
  const name = localStorage.getItem("member");

  useEffect(() => {
    dispatch(allMsg());
  }, []);

  useEffect(() => {
    var timeString = getTime();

    setTime(timeString);
  }, [message]);

  const handleClick = () => {
    if (message !== "") {
      dispatch(addMsg({ name: name, message: message, time: time }));
      dispatch(clearState());
      setMessage("");
      dispatch(allMsg());
    }
  };

  return (
    <div>
      <Box
        sx={{
          margin: "0 20px",
          width: 450,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          id="fullWidth"
          size="small"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </Box>
      <Button
        sx={{ margin: "0 0 0 40px" }}
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
