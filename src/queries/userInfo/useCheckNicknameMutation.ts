import { Dispatch, SetStateAction } from "react";
import { TNickNameState } from "@src/type/login/loginType";
import { useMutation } from "@tanstack/react-query";
import { requestCheckingNickname } from "@src/app/api/common/useInfo";

const useCheckNicknameMutation = (
  setNickNameValidation: Dispatch<SetStateAction<TNickNameState>>
) => {
  return useMutation<boolean, Error, string>({
    mutationKey: ["checkNickname"],
    mutationFn: (nickname) => requestCheckingNickname(nickname),
    onSuccess: (isDuple) => {
      setNickNameValidation(isDuple ? "duple" : "check");
    },
  });
};

export default useCheckNicknameMutation;
