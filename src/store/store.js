import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import loaderReducer from "../features/loaderSlice";
const store = configureStore({
  reducer: {
    user: userReducer, // Add the userReducer under the "user" key
    loader: loaderReducer, // Add the loaderReducer under the "loader" key
  },
});

export default store;
