import { TokenApp } from "../../../types";
import api from "../../apiService";

export const writeToTokensApp = async ({ id, attempts }: TokenApp) => {
  const response = await api.post(
    import.meta.env.VITE_API_LAMBDA_WRITE_DYNAMODB,
    {
      tokenId: id,
      attempts,
      tableName: "TokensApp",
    },
  );
  return response.data;
};
