import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "../../../types";

const initialState: Auth = {
  username: "",
  status: "not-authenticated",
  tokenApp: "",
  errorMessage: null,
  attempts: 0,
  maxAttempts: 0,
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
      state.maxAttempts = payload.maxAttempts;
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
      state.maxAttempts = 0;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
    setMaxAttempt: (state, { payload }) => {
      state.attempts = payload.newAttempt;
    },
  },
});

export const { login, logout, checkingCredentials, setMaxAttempt } =
  authSlice.actions;
