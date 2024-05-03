import { NextRouter, useRouter } from "next/router";
import { HeaderTabType, ServerStatus } from "@src/enum/appEnum";
import { setJWTToken } from "@src/store/localStorage/localStorage";
import HeaderStore from "@src/store/main/header/HeaderStore";
import UserInfoStore from "@src/store/user/UserInfoStore";
import TagListStore from "@src/store/common/TagListStore";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { kakaoLogin, KakaoResType } from "@src/app/api/common/login";

const useKakaoLoginMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  let kakaoToken = "";

  return useMutation<KakaoResType, Error, string>({
    mutationKey: ["kakaoLogin"],
    mutationFn: (token) => {
      kakaoToken = token;
      return kakaoLogin(token);
    },
    onSuccess: (data) => {
      const status = data.status;
      const jwtToken = data.token;

      ServerStatus.NeedSignUp === status
        ? goSignUp(router, kakaoToken)
        : goLogin(router, jwtToken, queryClient);
    },
  });
};

const goSignUp = (router: NextRouter, accessToken: any) => {
  router.push({
    pathname: "signUp",
    query: { accessToken },
  });
};

const goLogin = async (
  router: NextRouter,
  jwtToken: string | null,
  queryClient: QueryClient
) => {
  jwtToken && setJWTToken(jwtToken);
  const { setHeaderTabType } = HeaderStore;
  setHeaderTabType(HeaderTabType.AllUrl);
  UserInfoStore.setLoggedIn(true);
  await router.push("/");
};
export default useKakaoLoginMutation;
