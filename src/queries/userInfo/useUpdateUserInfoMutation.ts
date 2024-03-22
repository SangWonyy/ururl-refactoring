import { QueryClient, useMutation } from "react-query";
import { NextRouter } from "next/router";
import userInfoStore from "@src/store/user/UserInfoStore";
import { UserInfoType } from "@src/type/user/userType";
import { requestUpdateUserInfo } from "@pages/api/common/useInfo";
import ModalStore from "@src/store/common/modalStore";

const useUpdateUserInfoMutation = (queryClient: QueryClient, router: NextRouter) => {
  let newUserInfo = {};
  const { userInfo } = userInfoStore;

  return useMutation<any, Error, UserInfoType>(
    "updateUserInfo",
    (userInfo) => {
      newUserInfo = userInfo;
      return requestUpdateUserInfo(userInfo);
    },
    {
      onSuccess: () => {
        queryClient.removeQueries("userInfo");
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
    },
  );
};

export default useUpdateUserInfoMutation;
