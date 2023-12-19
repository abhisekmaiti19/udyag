import { createSlice } from "@reduxjs/toolkit";

let local = window.localStorage;

const initialState = {
  status: local.status != "undefined" ? local.status : false,
  userData: local.user != null ? local.user : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      local.setItem("user", JSON.stringify(action.payload));
      local.setItem("status", true);
      state.status = local.status;
      state.userData = JSON.parse(local.user);
    },
    logout: (state) => {
      local.setItem("user", null);
      local.setItem("status", false);
      state.status = local.status;
      state.userData = local.user;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
