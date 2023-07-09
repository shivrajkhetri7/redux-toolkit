import { createSlice } from "@reduxjs/toolkit";

const userDetails = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      state.splice(action.payload, 1);
    },

    clearUser(state, action) {
      return [];
    },
  },
});

export default userDetails.reducer;
export const { addUser, deleteUser, clearUser } = userDetails.actions;
