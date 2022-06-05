import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const allMsg = createAsyncThunk("msg/all", async (thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3000/message", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token,
      },
    });
    let data = await response.json();
    if (response.status === 200) {
      return data;
    } else {
      throw data.message;
    }
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const addMsg = createAsyncThunk(
  "msg/add",
  async ({ name, message, time }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/message/add", {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token,
        },
        body: JSON.stringify({
          name,
          message,
          time,
        }),
      });
      let data = await response.json();
      if (response.status === 200) {
        return data;
      } else {
        throw data.message;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const delMsg = createAsyncThunk("msg/del", async ({ id }, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3000/message/delete", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token,
        id,
      },
    });
    let data = await response.json();
    if (response.status === 200) {
      return data;
    } else {
      throw data.message;
    }
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const renewMsg = createAsyncThunk(
  "msg/renew",
  async ({ id, newMessage, newTime }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/message/update", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token,
          id,
        },
        body: JSON.stringify({
          newMessage,
          newTime,
        }),
      });
      let data = await response.json();
      if (response.status === 200) {
        return data;
      } else {
        throw data.message;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const sortMsg = createAsyncThunk(
  "msg/sort",
  async ({ name, message, time }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/message/filter", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token,
        },
        body: JSON.stringify({
          name,
          message,
          time,
        }),
      });
      let data = await response.json();
      if (response.status === 200) {
        return data;
      } else {
        throw data.message;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const msgSlice = createSlice({
  name: "msg",
  initialState: {
    token: "",
    messageList: [],
    isFetching: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
    clearToken: (state) => {
      state.token = "";

      return state;
    },
  },
  extraReducers: {
    [allMsg.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.messageList = payload.result;
      return state;
    },
    [allMsg.pending]: (state) => {
      state.isFetching = true;
      return state;
    },
    [allMsg.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      return state;
    },
    [addMsg.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [addMsg.pending]: (state) => {
      state.isFetching = true;
      return state;
    },
    [addMsg.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      return state;
    },
    [delMsg.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [delMsg.pending]: (state) => {
      state.isFetching = true;
      return state;
    },
    [delMsg.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      return state;
    },
    [renewMsg.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [renewMsg.pending]: (state) => {
      state.isFetching = true;
      return state;
    },
    [renewMsg.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      return state;
    },
    [sortMsg.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.messageList = payload.result;
      return state;
    },
    [sortMsg.pending]: (state) => {
      state.isFetching = true;
      return state;
    },
    [sortMsg.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      console.log(payload);
      return state;
    },
  },
});

export const { clearState, clearToken } = msgSlice.actions;

export const selectMsg = (state) => state.msg;

export default msgSlice.reducer;
