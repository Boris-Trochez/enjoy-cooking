import { readFromTokensApp, writeToTokensApp } from "../../../api";
import { LogoutMessages } from "../../../errors";
import { Auth, TokenApp } from "../../../types";

import { AppDispatch } from "../../store";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (authState: Auth) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(checkingCredentials());

      const response = await readFromTokensApp(authState.tokenApp);

      if (!response.isTokenValid) {
        return dispatch(
          logout({
            errorMessage: response.message || LogoutMessages.InvalidTokenApp,
          }),
        );
      } else {
        dispatch(
          login({
            ...authState,
            attempts: response.attempts,
            maxAttempts: response.maxAttempts,
          }),
        );
      }
    } catch (error: unknown) {
      dispatch(
        logout({
          errorMessage: LogoutMessages.ErrorFetchingTokenApp,
        }),
      );

      console.error("Error fetching tokenApp:", error);
    }
  };
};

export const updateTokenAppState = async (token: TokenApp) => {
  try {
    const response = await writeToTokensApp(token);
    return response;
  } catch (error) {
    console.log("[TokenApp] ", error);
  }
};
