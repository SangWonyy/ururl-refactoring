import { ErrorType } from "../../../src/type/error/errorType";

const ServerError = (response: any): ErrorType => {
  try {
    if (response.success === undefined) {
      const status = response.response.data.error.status;
      const serverError: ErrorType = {
        success: false,
        error: {
          status,
          message: response.response.data.error.message,
        },
        response: null,
        ururlError: true,
      };

      return serverError;
    }

    if (!response.success && response.error.status === 401) {
      const error: ErrorType = {
        success: response.success,
        error: {
          status: response.error.status,
          message: response.error.message,
        },
        response: null,
        ururlError: true,
      };

      alert(response.error.message);
      return error;
    } else {
      response.ururlError = false;
      return response;
    }
  } catch (e) {
    throw new Error(`ServerError 처리 : ${e}`);
  }
};

export default ServerError;
