export interface Auth {
  tokenApp: string;
  username: string;
  status: AuthStatus;
  errorMessage: string | null;
  attempts: number;
  maxAttempts: number;
}

export type AuthStatus = "not-authenticated" | "checking" | "authenticated";
