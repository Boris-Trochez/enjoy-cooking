import { createSlice } from "@reduxjs/toolkit";

export const recipeConditionsSlice = createSlice({
  name: "recipeConditions",
  initialState: {
    age: "",
    weight: "",
    height: "",
    favoriteIngredient1: "",
    favoriteIngredient2: "",
    foodTime: "",
  },
  reducers: {
    addRecipeConditions: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export const { addRecipeConditions } = recipeConditionsSlice.actions;
