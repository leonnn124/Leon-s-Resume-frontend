import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      let data = await response.json();
      if (response.status === 200) {
        localStorage.setItem("token", data.result.token);
        return data;
      } else {
        throw data.message;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const register = createAsyncThunk(
  "user/register",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      let data = await response.json();
      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        return data;
      } else {
        throw data.message;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
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
    [login.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.token = payload.result.token;
      return state;
    },
    [login.pending]: (state) => {
      state.isFetching = true;
      return state;
    },
    [login.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      return state;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.token = payload.token;
      return state;
    },
    [register.pending]: (state) => {
      state.isFetching = true;
      return state;
    },
    [register.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      return state;
    },
  },
});

export const { clearState, clearToken } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
