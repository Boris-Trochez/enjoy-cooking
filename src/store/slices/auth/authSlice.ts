import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "../../../types";

const initialState: Auth = {
  username: "",
  status: "not-authenticated",
  tokenApp: "",
  errorMessage: null,
  attempts: 0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.username = payload.username;
      state.tokenApp = payload.tokenApp;
      state.errorMessage = null;
      state.attempts = payload.attempts;
    },
    logout: (
      state,
      { payload }: { payload: { errorMessage: string | null } },
    ) => {
      state.username = "";
      state.status = "not-authenticated";
      state.tokenApp = "";
      state.errorMessage = payload.errorMessage;
      state.attempts = 0;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
