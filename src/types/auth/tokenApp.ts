export interface TokenApp {
  id: string;
  isTokenValid: boolean;
  attempts: number;
  message?: string;
}
