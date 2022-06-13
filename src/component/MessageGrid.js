import React, { useEffect } from "react";
import "./MessageGrid.css";
import { useDispatch, useSelector } from "react-redux";
import { selectMsg, clearState } from "../redux/msgSlice";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import _ from "lodash";
import Skeleton from "./Skeleton";
import ModifyIcon from "./ModifyIcon";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const MessageGrid = (props) => {
  const dispatch = useDispatch();
  const [messageData, setMessageData] = React.useState({});
  const [selectId, setSelectId] = React.useState();
  const [inputMessage, setInputMessage] = React.useState("");
  // 設定第 x 頁資料範圍

  const rangeMin = (props.page - 1) * props.messageCount;
  let rangeMax = props.page * props.messageCount - 1;

  // 若資料未滿一頁呈現內容
  if (rangeMax >= props.data.length) {
    rangeMax = props.data.length - 1;
  }

  const { isFetching } = useSelector(selectMsg);

  const loginMember = localStorage.getItem("member");

  useEffect(() => {
    dispatch(clearState());
    let copy = [];
    for (let i = rangeMin; i <= rangeMax; i++) {
      copy.push(props.data[i]);
    }
    setMessageData(copy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.page, props.data]);

  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden", pl: 2, width: 1 }}>
      {isFetching ? (
        <Skeleton />
      ) : (
        <div>
          {_.map(messageData, (item, index) => (
            <StyledPaper
              key={index}
              sx={{
                my: 2,
                mx: "auto",
                p: 2,
                maxWidth: 600,
                height: 80,
              }}
            >
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar sx={{ fontSize: "12px" }}>
                    {item.name.substring(0, 5)}
                  </Avatar>
                </Grid>
                <Grid item xs>
                  {item.id !== selectId ? (
                    <Typography display="inline">{item.message}</Typography>
                  ) : (
                    <TextField
                      sx={{ width: "100%" }}
                      size="small"
                      multiline
                      maxRows={2}
                      value={inputMessage}
                      onChange={(e) => {
                        setInputMessage(e.target.value);
                      }}
                    />
                  )}
                </Grid>
                <Grid item s>
                  <Typography display="inline">{item.time}</Typography>
                  {loginMember === item.name && loginMember !== "GUEST" ? (
                    <>
                      {item.id !== selectId ? (
                        <ModifyIcon
                          data={item}
                          setSelectId={setSelectId}
                          inputMessage={inputMessage}
                          setInputMessage={setInputMessage}
                        />
                      ) : (
                        <ModifyIcon
                          focus={true}
                          data={item}
                          setSelectId={setSelectId}
                          inputMessage={inputMessage}
                          setInputMessage={setInputMessage}
                        />
                      )}
                    </>
                  ) : (
                    <></>
                  )}
                </Grid>
              </Grid>
            </StyledPaper>
          ))}
        </div>
      )}
    </Box>
  );
};

export default MessageGrid;
