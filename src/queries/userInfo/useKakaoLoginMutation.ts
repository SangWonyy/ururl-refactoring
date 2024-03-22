import { NextRouter, useRouter } from "next/router";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import { kakaoLogin, KakaoResType } from "@pages/api/common/login";
import { HeaderTabType, ServerStatus } from "@src/enum/appEnum";
import { setJWTToken } from "@src/store/localStorage/localStorage";
import HeaderStore from "@src/store/main/header/HeaderStore";
import UserInfoStore from "@src/store/user/UserInfoStore";
import TagListStore from "@src/store/common/TagListStore";

const useKakaoLoginMutation = () => {
  const router = useRouter();
  const { allUrlSelectedTagId } = TagListStore;
  const queryClient = useQueryClient();
  let kakaoToken = "";

  return useMutation<KakaoResType, Error, string>(
    "kakaoLogin",
    (token) => {
      kakaoToken = token;
      return kakaoLogin(token);
    },
    {
      onSuccess: (data) => {
        const status = data.status;
        const jwtToken = data.token;

        ServerStatus.NeedSignUp === status
          ? goSignUp(router, kakaoToken)
          : goLogin(router, jwtToken, queryClient);
      },
    },
  );
};

const goSignUp = (router: NextRouter, accessToken: any) => {
  router.push({
    pathname: "signUp",
    query: { accessToken },
  });
};

const goLogin = async (router: NextRouter, jwtToken: string | null, queryClient: QueryClient) => {
  jwtToken && setJWTToken(jwtToken);
  const { setHeaderTabType } = HeaderStore;
  setHeaderTabType(HeaderTabType.AllUrl);
  UserInfoStore.setLoggedIn(true);
  await router.push("/");
  queryClient.invalidateQueries(["useGetAllUrlQuery"]);
};
export default useKakaoLoginMutation;
