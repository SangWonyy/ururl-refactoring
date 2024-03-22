import { useMutation } from "react-query";
import { TInterviewResponse } from "@src/type/user/userType";
import interview from "@pages/api/common/interview";
import ModalStore from "@src/store/common/modalStore";
import toast from "react-hot-toast";

const useInterviewMutation = () => {
  const notify = () =>
    toast.success("인터뷰에 응해주셔서 감사합니다! 일주일 이내로 인터뷰에 관련 된 내용을 전달드릴게요:)", {
      duration: 1500,
      style: {
        maxWidth: "750px",
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });

  const { setOpenInterviewModal } = ModalStore;
  return useMutation<TInterviewResponse, Error, string>(
    ["useInterviewMutation"],
    (email) => interview(email),
    {
      onSuccess: () => {
        setOpenInterviewModal(false, "");
        notify();
      },
    },
  );
};

export default useInterviewMutation;
