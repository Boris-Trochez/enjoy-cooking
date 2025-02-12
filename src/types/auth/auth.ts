export interface Auth {
  tokenApp: string;
  username: string;
  status: AuthStatus;
  errorMessage: string | null;
  attempts: number;
}

export type AuthStatus = "not-authenticated" | "checking" | "authenticated";
