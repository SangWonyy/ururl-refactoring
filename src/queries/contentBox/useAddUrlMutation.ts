import { Dispatch, SetStateAction } from "react";
import {
  MyContentType,
  SaveUrlInfoType,
} from "@src/type/mainBody/mainBodyType";
import urlStore from "@src/store/url/urlStore";
import ContentsStore from "@src/store/url/contentStore";
import { successToast } from "@src/util/toast";
import { useMutation } from "@tanstack/react-query";
import { requestSaveMyUrl } from "@src/app/api/myUrl/saveMyUrl";

const useAddUrlMutation = (
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsOpen: Dispatch<SetStateAction<boolean>>
) => {
  return useMutation<MyContentType, Error, SaveUrlInfoType>({
    mutationKey: ["useAddUrlMutation"],
    mutationFn: (saveUrlInfo) => requestSaveMyUrl(saveUrlInfo),
    onSuccess: (myContent) => {
      const { setTitle } = urlStore;
      const { addContentBox } = ContentsStore;
      successToast("MY URL 탭에 저장했어요!");
      setTitle(undefined);
      addContentBox(myContent);
    },
    onSettled: () => {
      setIsOpen(false);
      setIsLoading(false);
    },
  });
};

export default useAddUrlMutation;
