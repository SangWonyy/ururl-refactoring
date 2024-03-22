import { ErrorType } from "../../../src/type/error/errorType";
import { LoginState } from "../../../src/enum/appEnum";

const ClientError = (errorMessage: any): ErrorType => {
  try {
    let error: ErrorType = {
      success: false,
      error: {
        status: LoginState.Unknown,
        message: `처리하지 않은 에러에요 : ${errorMessage}`,
      },
      response: null,
      ururlError: true,
    };

    if (+errorMessage === +LoginState.NofoundJWT) {
      error = {
        success: false,
        error: {
          status: LoginState.NofoundJWT,
          message: "토큰이 없어요. 로그인을 다시 해주세요",
        },
        response: null,
        ururlError: true,
      };
    }

    return error;
  } catch (e) {
    throw new Error(`UrUrlError 처리 : ${e}`);
  }
};

export default ClientError;
