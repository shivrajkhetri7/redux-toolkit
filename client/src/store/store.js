import { configureStore } from "@reduxjs/toolkit";
import userDetails from "./slices/UserDetails";

const store = configureStore({
  reducer: {
    users: userDetails,
  },
});

export default store;
