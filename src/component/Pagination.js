import React from "react";
import "./Pagination.css";
import Typography from "@mui/material/Typography";
import Paginate from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import MessageGrid from "./MessageGrid";

const Pagination = (props) => {
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  // 決定一頁放幾筆留言
  const messageCount = 5;

  //取得資料長度 並整除 決定共有幾頁
  const count = Math.ceil(props.data.length / messageCount);

  return (
    <Stack spacing={2}>
      <Typography>
        <MessageGrid
          data={props.data}
          page={page}
          messageCount={messageCount}
        ></MessageGrid>
      </Typography>
      <Paginate count={count} page={page} onChange={handleChange} />
    </Stack>
  );
};

export default Pagination;
