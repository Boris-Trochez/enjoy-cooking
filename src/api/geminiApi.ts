import axios from "axios";
import { RecipePromptConditions } from "../types";

export const fetchGeminiResponse = async ({
  age,
  weight,
  height,
  foodTime,
  favoriteIngredient1,
  favoriteIngredient2,
}: RecipePromptConditions) => {
  const prompt = `Create a healthy, delicious recipe for Boris (age: ${age}, weight: ${weight}kg, height: ${height}cms) for ${foodTime}. Include 2 favorite ingredients: ${favoriteIngredient1} and ${favoriteIngredient2}. Provide concise instructions in 5 steps or fewer`;
  const promptOptimized = `short recipe, ingredients: ${favoriteIngredient1}, ${favoriteIngredient2}`;
  try {
    const response = await axios.post(
      import.meta.env.VITE_API_LAMBDA_URL,
      { prompt: promptOptimized },
      {
        headers: { "Content-Type": "application/json" },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching content ", error);
    console.log(prompt);
  }
};
