import { configureStore } from "@reduxjs/toolkit";
import { recipeConditionsSlice } from "./slices/recipeConditions";
import { geminiAISlice } from "./slices/geminiAI/geminiAISlice";
import { authSlice } from "./slices/auth/authSlice";

export const store = configureStore({
  reducer: {
    recipeConditions: recipeConditionsSlice.reducer,
    geminiAI: geminiAISlice.reducer,
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
