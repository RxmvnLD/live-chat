import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    logged: false,
    user: {},
  },
  reducers: {
    //Actions
    login: (state, action) => {
      state.logged = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.logged = false;
      state.user = {};
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
