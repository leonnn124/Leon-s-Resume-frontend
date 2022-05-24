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
        localStorage.setItem("token", response.headers.get("token"));
        return data;
      } else {
        throw data.message;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const logout = createAsyncThunk("user/logout", async (thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      "https://5089-211-72-239-241.ngrok.io/api/logout",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token,
        },
      }
    );
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

export const userSlice = createSlice({
  name: "user",
  initialState: {
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
  },
});

export const { clearState, clearToken } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
