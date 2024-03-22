import { Dispatch, SetStateAction } from "react";
import { TNickNameState } from "@src/type/login/loginType";
import { useMutation } from "react-query";
import { requestCheckingNickname } from "@pages/api/common/useInfo";

const useCheckNicknameMutation = (setNickNameValidation: Dispatch<SetStateAction<TNickNameState>>) => {
  return useMutation<boolean, Error, string>(
    "checkNickname",
    (nickname) => {
      return requestCheckingNickname(nickname);
    },
    {
      onSuccess: (isDuple) => {
        setNickNameValidation(isDuple ? "duple" : "check");
      },
    },
  );
};

export default useCheckNicknameMutation;
