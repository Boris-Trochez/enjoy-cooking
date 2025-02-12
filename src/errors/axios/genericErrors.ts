export interface GenericAxiosError {
  response: AxiosResponseError;
}

export interface AxiosResponseError {
  status: number;
  data: {
    message?: string;
  };
}
