import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "../../../types";

const initialState: Auth = {
  username: "",
  isLogin: false,
  tokenApp: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, { payload }) => {
      return { ...state, ...payload };
    },
    logout: (state) => {
      return { ...state, isLogin: false, username: "", tokenApp: "" };
    },
  },
});

export const { login, logout } = authSlice.actions;
