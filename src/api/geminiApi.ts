import axios from "axios";
import { RecipePromptConditions } from "../types";

export const fetchGeminiResponse = async ({
  favoriteIngredient1,
  favoriteIngredient2,
}: RecipePromptConditions) => {
  const promptOptimized = `You are a helpful assistant that provides short, concise recipes.  Give me a recipe with ${favoriteIngredient1},  ${favoriteIngredient2}. The recipe should be very short, ideally no more than five steps.`;
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
  }
};
