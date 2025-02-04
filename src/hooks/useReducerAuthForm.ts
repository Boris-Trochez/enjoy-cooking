import { useReducer } from "react";
import { AuthFormFields } from "../types";
import {
  AuthActionReducer,
  AuthFormFieldsInputs,
} from "../types/auth/formFields";

const reducer = (
  state: AuthFormFields,
  action: AuthActionReducer,
): AuthFormFields => {
  switch (action.type) {
    case AuthFormFieldsInputs.Username:
      return { ...state, username: action.payload };
    case AuthFormFieldsInputs.TokenApp:
      return { ...state, tokenApp: action.payload };
    default:
      return state;
  }
};

const initialState: AuthFormFields = {
  username: "",
  tokenApp: "",
};
export const useReducerAuthForm = () => {
  const [formState, dispatchReducer] = useReducer(reducer, initialState);
  return {
    formState,
    dispatchReducer,
  };
};
