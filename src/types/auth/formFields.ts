export enum AuthFormFieldsInputs {
  Username = "username",
  TokenApp = "tokenApp",
}

export interface AuthFormFields {
  username: string;
  tokenApp: string;
}

export interface AuthActionReducer {
  type: string;
  payload: string;
}
