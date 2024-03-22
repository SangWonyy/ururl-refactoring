import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { requestUserInfo } from "@pages/api/common/useInfo";
import { StaleTimeEnum } from "@src/enum/appEnum";
import { getInterViewTime, getJWTToken, removeJWTToken } from "@src/store/localStorage/localStorage";
import UserInfoStore from "@src/store/user/UserInfoStore";
import { removeTokenInHeader } from "@pages/api";
import { UserInfoType } from "@src/type/user/userType";
import ProfileUserInfoStore from "@src/store/user/ProfileInfoStore";
import ModalStore from "@src/store/common/modalStore";

const useGetUserInfoQuery = (isMobile: boolean) => {
  const router = useRouter();
  const { setUserInfo, userInfo } = UserInfoStore;
  const { setProfileUserInfo } = ProfileUserInfoStore;
  const { setOpenInterviewModal } = ModalStore;

  return useQuery<UserInfoType, Error, UserInfoType>("userInfo", requestUserInfo, {
    staleTime: StaleTimeEnum.Default,
    cacheTime: StaleTimeEnum.Default,
    enabled: !!getJWTToken() && userInfo.nickName === "",
    retry: false,
    refetchOnWindowFocus: false,
    onSuccess: async (data) => {
      if (isMobile) {
        resetInfo();
        router.push("/");
      }

      const { attributes, nickName } = data;
      const { isVisibleInterviewPopup } = attributes;
      const interviewTimeString = getInterViewTime();
      if (interviewTimeString) {
        const interviewTime = new Date(interviewTimeString);
        const now = new Date();
        const isSame = isSameDate(interviewTime, now);
        if (isSame) return;
      }
      isVisibleInterviewPopup && setOpenInterviewModal(true, nickName);

      setUserInfo(data);
      setProfileUserInfo(data);
    },
  });
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
