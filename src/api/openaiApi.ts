import axios from "axios";

export const fetchRecipeFromOpenAI = async (): Promise<string> => {
  const prompt = `Create a delicious a really short recipe using these ingredients: rice and carrot. Provide detailed steps. no much text please`;
  try {
    console.log("Sending prompt");
    const response = await axios.post(
      import.meta.env.OPENAI_UR,
      {
        prompt,
        max_tokens: 30,
        model: "gpt-3.5-turbo",
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.OPENAI_API_KEY}`,
        },
      },
    );

    return response.data.choices[0]?.text ?? "No recipe found.";
  } catch (error) {
    console.error("Error fetching ChatGPT response:", error);
    throw error;
  }
};
