import { createSlice } from "@reduxjs/toolkit";

export const geminiAISlice = createSlice({
  name: "geminiAI",
  initialState: {
    prompt: "",
    response: "",
    isResponseAvailable: false,
  },
  reducers: {
    setGeminiResponse: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export const { setGeminiResponse } = geminiAISlice.actions;
