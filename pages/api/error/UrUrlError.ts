import { ErrorType } from "@src/type/error/errorType";
import ClientError from "./clientError";
import ServerError from "./ServerError";
import { removeTokenInHeader } from "@pages/api";
import { removeJWTToken } from "@src/store/localStorage/localStorage";
import UserInfoStore from "@src/store/user/UserInfoStore";

const UrUrlError = (error: any): ErrorType => {
  try {
    return error.response ? ServerError(error) : ClientError(error.message);
  } catch (e) {
    throw new Error(`UrUrlError 처리 : ${e}`);
  }
};

export const ThrowUrUrlError = (error: any) => {
  if (error.response.data.error.status === 401 && error.response.data.error.message.includes("JWT")) {
    removeTokenInHeader();
    removeJWTToken();
    UserInfoStore.setInitUser();
  }
};

export default UrUrlError;
