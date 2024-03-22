export type ErrorType = {
  success: boolean;
  response: null;
  error: {
    status: number;
    message: string;
  };
  ururlError: boolean;
};
