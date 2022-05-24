import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const allmsg = createAsyncThunk("msg/all", async (thunkAPI) => {
  try {
    const response = await fetch("http://localhost:3000/message", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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
    [allmsg.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.messageList = payload.result;
      return state;
    },
    [allmsg.pending]: (state) => {
      state.isFetching = true;
      return state;
    },
    [allmsg.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      return state;
    },
  },
});

export const { clearState, clearToken } = msgSlice.actions;

export const selectMsg = (state) => state.msg;

export default msgSlice.reducer;
