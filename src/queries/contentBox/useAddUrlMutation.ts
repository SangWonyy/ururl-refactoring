import { Dispatch, SetStateAction } from "react";
import { useMutation } from "react-query";
import { MyContentType, SaveUrlInfoType } from "@src/type/mainBody/mainBodyType";
import { requestSaveMyUrl } from "@pages/api/myUrl/saveMyUrl";
import ModalStore from "@src/store/common/modalStore";
import urlStore from "@src/store/url/urlStore";
import ContentsStore from "@src/store/url/contentStore";
import { successToast } from "@src/util/toast";

const useAddUrlMutation = (
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
) => {
  return useMutation<MyContentType, Error, SaveUrlInfoType>(
    ["useAddUrlMutation"],
    (saveUrlInfo) => {
      return requestSaveMyUrl(saveUrlInfo);
    },
    {
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
    },
  );
};

export default useAddUrlMutation;
