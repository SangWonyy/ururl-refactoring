import { NextRouter } from "next/router";
import { UserInfoType } from "@src/type/user/userType";
import { useMutation } from "react-query";
import { requestSignUp } from "@pages/api/common/singUp";
import { setJWTToken } from "@src/store/localStorage/localStorage";
import { applyTokenInHeader } from "@pages/api";
import UserInfoStore from "@src/store/user/UserInfoStore";
import ModalStore from "@src/store/common/modalStore";
import { ClickGtagEvent } from "../../../lib/gtag";
import { GtagCategory } from "@src/enum/appEnum";

const useSaveUserInfoMutation = (router: NextRouter) => {
  let newUserInfo: UserInfoType = {
    attributes: { isVisibleInterviewPopup: false },
    articleGoal: 0,
    careerLevel: null,
    defaultPhotoIdx: 0,
    hashtags: [],
    introduction: "",
    major: "",
    nickName: "",
  };
  return useMutation<{ token: string | null }, Error, UserInfoType>(
    "saveUserInfo",
    (userInfo) => {
      newUserInfo = userInfo;
      return requestSignUp(userInfo);
    },
    {
      onSuccess: (data) => {
        if (!data || !data.token) return;
        ClickGtagEvent({
          category: GtagCategory.CompleteSignup,
          label: "회원가입 성공 버튼",
        });
        setJWTToken(data.token);
        applyTokenInHeader(data.token);
        UserInfoStore.setUserInfo(newUserInfo);

        ModalStore.setOpenModal({
          isOpen: true,
          text: "회원가입이 완료되었습니다! 🎉",
          completeBtnText: "완료",
          closeIcon: false,
          onSuccess: () => {
            router.push("/");
          },
        });
      },
    },
  );
};

export default useSaveUserInfoMutation;
