import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload; // This is now a synchronous operation
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
