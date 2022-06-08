import React, { useEffect } from "react";
import "./Pagination.css";
import { styled } from "@mui/material/styles";
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

  // 取得資料長度 並整除 決定共有幾頁
  const count = Math.ceil(props.data.length / messageCount);

  const CssPaginate = styled(Paginate)({
    "& .css-wjh20t-MuiPagination-ul": {
      margin: "-25px auto 0 auto",
    },
  });
  return (
    <Stack spacing={2}>
      <Typography component={"span"} sx={{ height: "100%" }}>
        <MessageGrid
          data={props.data}
          page={page}
          messageCount={messageCount}
        ></MessageGrid>
      </Typography>
      <div className="paginate">
        <CssPaginate count={count} page={page} onChange={handleChange} />
      </div>
    </Stack>
  );
};

export default Pagination;
