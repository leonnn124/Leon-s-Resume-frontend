import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../redux/userSlice";
import msgReducer from "../redux/msgSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    msg: msgReducer,
  },
});

export default store;
