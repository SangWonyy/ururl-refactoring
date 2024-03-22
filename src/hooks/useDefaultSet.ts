import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { TagResponseType } from "@src/type/mainBody/mainBodyType";
import TagListStore from "@src/store/common/TagListStore";
import useGetTagListQuery from "@src/queries/tag/useGetTagListQuery";
import useGetUserInfoQuery from "@src/queries/userInfo/useGetUserInfoQuery";
import { applyTokenInHeader } from "@pages/api";
import { getJWTToken } from "@src/store/localStorage/localStorage";
import UserInfoStore from "@src/store/user/UserInfoStore";
import HeaderStore from "@src/store/main/header/HeaderStore";
import { HeaderTabType } from "@src/enum/appEnum";

const useDefaultSet = (isKakaoChannel: boolean) => {
  const token = getJWTToken();
  const { setLoggedIn } = UserInfoStore;
  const { setHeaderTabType } = HeaderStore;
  setLoggedIn(!!token);
  applyTokenInHeader(token);

  let isMobile = false;
  const router = useRouter();
  const path = router.pathname;

  if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
    isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
  }
  useGetUserInfoQuery(isMobile);

  const setUrlTab = useCallback(() => {
    if (path === "/myUrl") {
      setHeaderTabType(HeaderTabType.MyUrl);
      return;
    }
    if (path === "/") {
      const loggingIn = getJWTToken();
      loggingIn && setHeaderTabType(HeaderTabType.AllUrl);
      return;
    }

    setHeaderTabType(HeaderTabType.None);
  }, [path]);

  useEffect(() => {
    setUrlTab();
  }, [path]);

  useEffect(() => {
    if (isMobile && !isKakaoChannel) {
      router.push("kakaoChannelLogin?rootMobile");
    }
  }, []);
};

export default useDefaultSet;
