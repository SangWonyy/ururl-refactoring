import { NextRouter } from "next/router";
import { LoginState, ServerStatus } from "../../../src/enum/appEnum";
import { removeJWTToken } from "../../../src/store/localStorage/localStorage";
import UserInfoStore from "../../../src/store/user/UserInfoStore";

export const errorAlert = (result: any, router: NextRouter) => {
  try {
    if (!result.success) {
      console.error(result.error?.message);
      // alert(result.error?.message);
      const status = result.error?.status;
      if (status === +LoginState.NofoundJWT) {
        const currentPath = router.pathname;
        if (currentPath !== "/") {
          router.push("/");
        }
      } else if (status === ServerStatus.ReLogin || status === ServerStatus.Refresh) {
        removeJWTToken();
        UserInfoStore.setInitUser();
        router.push("/");
      } else {
        return;
      }
    }
  } catch (error) {
    throw new Error(`checkNotFoundToken : ${error}`);
  }
};
