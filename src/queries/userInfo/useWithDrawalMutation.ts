import { useMutation } from "react-query";
import { requestWithDrawal } from "@pages/api/common/withDrawal";
import ModalStore from "@src/store/common/modalStore";

const useWithDrawalMutation = (removeUserInfoCallback: () => void) => {
  return useMutation<boolean, Error, string>(
    "withDrawal",
    (withDrawalReason) => {
      return requestWithDrawal(withDrawalReason);
    },
    {
      onSuccess: () => {
        ModalStore.setOpenModal({
          isOpen: true,
          text: "성공적으로 회원탈퇴 하였습니다.",
          completeBtnText: "확인",
          closeIcon: false,
          onSuccess: removeUserInfoCallback,
        });
      },
      onError: (error) => {
        alert(`회원탈퇴 실패 : ${error.message}`);
      },
    },
  );
};

export default useWithDrawalMutation;
