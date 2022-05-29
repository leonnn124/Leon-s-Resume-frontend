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
  },
});

export const { clearState, clearToken } = msgSlice.actions;

export const selectMsg = (state) => state.msg;

export default msgSlice.reducer;
