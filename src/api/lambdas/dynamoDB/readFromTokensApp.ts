import { TokenApp } from "../../../types";
import { GenericAxiosError } from "../../../errors";
import api from "../../apiService";

export const readFromTokensApp = async (
  tokenApp: string,
): Promise<TokenApp> => {
  try {
    const response = await api.get(
      `${import.meta.env.VITE_API_LAMBDA_READ_DYNAMODB}?id=${tokenApp}&tn=TokensApp`,
    );

    return response.data;
  } catch (error: unknown) {
    const lambdaError = error as GenericAxiosError;

    console.error("[Dynamo DB] ", lambdaError);
    throw lambdaError;
  }
};
