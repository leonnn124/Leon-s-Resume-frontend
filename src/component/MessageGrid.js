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
import _ from "lodash";
import Skeleton from "./Skeleton";

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
  // 設定第 x 頁資料範圍

  const rangeMin = (props.page - 1) * props.messageCount;
  let rangeMax = props.page * props.messageCount - 1;

  // 若資料未滿一頁呈現內容
  if (rangeMax >= props.data.length) {
    rangeMax = props.data.length - 1;
  }

  const { isFetching } = useSelector(selectMsg);

  useEffect(() => {
    dispatch(clearState());
    let copy = [];
    for (let i = rangeMin; i <= rangeMax; i++) {
      copy.push(props.data[i]);
    }
    setMessageData(copy);
  }, [props.page]);

  const CssBox = styled(Box)({
    "& .css-14fr3xw-MuiPaper-root": {
      width: "500px",
    },
  });

  return (
    <CssBox sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
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
              }}
            >
              <Grid container wrap="nowrap" spacing={3}>
                <Grid item>
                  <Avatar>{item.name}</Avatar>
                </Grid>
                <Grid item xs>
                  <Typography display="inline">
                    {item.message}
                    {item.time}
                  </Typography>
                </Grid>
              </Grid>
            </StyledPaper>
          ))}
        </div>
      )}
    </CssBox>
  );
};

export default MessageGrid;
