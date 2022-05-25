import React, { useEffect } from "react";
import "./Board.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allmsg, selectMsg } from "../redux/msgSlice";
import { Table } from "antd";
import { Avatar, Button, Comment, Form, Input, List } from "antd";
import moment from "moment";
import { useState } from "react";

const Board = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { messageList } = useSelector(selectMsg);

  useEffect(() => {
    dispatch(allmsg());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(messageList);
  // antd area %%%%%%%%%%%%%%%%%%%
  const { TextArea } = Input;
  const [comments, setComments] = React.useState([]);
  const [submitting, setSubmitting] = React.useState(false);
  const [value, setValue] = React.useState("");
  const columns = [
    {
      title: "Name",
      dataIndex: "author",
    },
    {
      title: "Message",
      dataIndex: "content",
    },
    {
      title: "Date",
      dataIndex: "datetime",
    },
  ];
  const data = [];

  for (let i = 0; i < messageList.length; i++) {
    data.push({
      key: i,
      name: messageList[i].name,
      message: messageList[i].message,
      time: messageList[i].time,
    });
  }
  const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
      itemLayout="horizontal"
      renderItem={(props) => <Comment {...props} />}
    />
  );

  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item>
        <TextArea
          className="h-28 w-full bg-gray-100 text-black"
          rows={4}
          onChange={onChange}
          value={value}
        />
      </Form.Item>
      <Form.Item>
        <Button
          className="add float-right mt-2 text-golden border-b-2 border-golden "
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </>
  );

  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);

  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      setComments([
        ...comments,
        {
          author: "Han Solo",
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
        },
      ]);
    }, 1000);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }

            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }

            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  // antd area %%%%%%%%%%%%%%%%%%%
  return (
    <div id="board">
      <div className="board block">
        <div className="flex h-24 items-center justify-center text-3xl text-golden">
          Message Board
        </div>
        <div className="message-area h-96 bg-neutral-700 bg-opacity-75 my-10 mx-48 border-golden border-4 rounded-md p-10 text-gray-300">
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={comments}
          />

          {comments.length > 0 && <CommentList comments={comments} />}
        </div>
        <div className="comment-area h-[120px] w-96 bg-neutral-700 bg-opacity-75 my-10 mx-auto border-golden border-4 rounded-md  text-gray-300">
          <Comment
            content={
              <Editor
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitting={submitting}
                value={value}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
