import React from "react";
import "./MessageGrid.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import _ from "lodash";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const MessageGrid = (props) => {
  const messageData = [];

  // 設定第 x 頁資料範圍
  let rangeMax = props.page * props.messageCount - 1;
  const rangeMin = (props.page - 1) * props.messageCount;

  // 若資料未滿一頁呈現內容
  if (rangeMax > props.data.length) {
    rangeMax = rangeMin;
  }

  console.log(rangeMax);

  console.log("max", rangeMax, "min", rangeMin);

  for (let i = rangeMin; i <= rangeMax; i++) {
    messageData.push(props.data[i]);
  }

  console.log(messageData);

  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
      {_.map(messageData, (item, index) => (
        <StyledPaper
          sx={{
            my: 1,
            mx: "auto",
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2} key={index}>
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
    </Box>
  );
};

export default MessageGrid;
