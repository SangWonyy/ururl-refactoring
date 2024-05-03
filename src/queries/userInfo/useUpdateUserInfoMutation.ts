import { NextRouter } from "next/router";
import userInfoStore from "@src/store/user/UserInfoStore";
import { UserInfoType } from "@src/type/user/userType";
import ModalStore from "@src/store/common/modalStore";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { requestUpdateUserInfo } from "@src/app/api/common/useInfo";

const useUpdateUserInfoMutation = (
  queryClient: QueryClient,
  router: NextRouter
) => {
  let newUserInfo = {};
  const { userInfo } = userInfoStore;

  return useMutation<any, Error, UserInfoType>({
    mutationKey: ["updateUserInfo"],
    mutationFn: (userInfo) => {
      newUserInfo = userInfo;
      return requestUpdateUserInfo(userInfo);
    },
    onSuccess: () => {
      userInfoStore.setUserInfo({ ...userInfo, ...newUserInfo });

      ModalStore.setOpenModal({
        isOpen: true,
        text: "회원정보 수정이 완료되었습니다.",
        completeBtnText: "확인",
        closeIcon: false,
        onSuccess: () => {
          router.push("/");
        },
      });
    },
  });
};

export default useUpdateUserInfoMutation;
