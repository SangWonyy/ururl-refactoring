import { useRouter } from "next/router";
import { StaleTimeEnum } from "@src/enum/appEnum";
import {
  getJWTToken,
  removeJWTToken,
} from "@src/store/localStorage/localStorage";
import UserInfoStore from "@src/store/user/UserInfoStore";
import { UserInfoType } from "@src/type/user/userType";
import ProfileUserInfoStore from "@src/store/user/ProfileInfoStore";
import { useQuery } from "@tanstack/react-query";
import { requestUserInfo } from "@src/app/api/common/useInfo";
import { removeTokenInHeader } from "@src/app/api";

const useGetUserInfoQuery = (isMobile: boolean) => {
  const router = useRouter();
  const { setUserInfo, userInfo } = UserInfoStore;
  const { setProfileUserInfo } = ProfileUserInfoStore;

  const { data } = useQuery<UserInfoType, Error, UserInfoType>({
    queryKey: ["userInfo"],
    queryFn: requestUserInfo,
    staleTime: StaleTimeEnum.Default,
    gcTime: StaleTimeEnum.Default,
    enabled: !!getJWTToken() && userInfo.nickName === "",
    retry: false,
    refetchOnWindowFocus: false,
  });
  if (isMobile) {
    resetInfo();
    router.push("/");
  }
  if (data) {
    setUserInfo(data);
    setProfileUserInfo(data);
  }
};

const resetInfo = () => {
  removeTokenInHeader();
  removeJWTToken();
  UserInfoStore.setInitUser();
};

const isSameDate = (date1: Date, date2: Date) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export default useGetUserInfoQuery;
