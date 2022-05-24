import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../redux/userSlice";
// import luckReducer from "../redux/luckSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    // Luck: luckReducer,
  },
});

export default store;
