import { useMutation } from "react-query";

import { MyContentType, SubscriptionUrl } from "@src/type/mainBody/mainBodyType";
import {
  requestCancelSubscription,
  requestModifySubscription,
  requestSubscription,
} from "@pages/api/common/editUrlInfo";
import ModalStore from "@src/store/common/modalStore";
import { Dispatch, SetStateAction } from "react";
import ContentsStore from "@src/store/url/contentStore";
import { successToast } from "@src/util/toast";

export const useCancelSubscriptionMutate = (
  bookmarkHandler?: () => void,
  setChallengeStore?: () => void,
  deleteBox = false,
) => {
  return useMutation<number, Error, number>(
    ["useCancelSubscriptionMutate"],
    (urlId) => requestCancelSubscription(urlId),
    {
      onSuccess: (deletedUrlId) => {
        const { deleteContentBoxList } = ContentsStore;
        setChallengeStore && setChallengeStore();
        bookmarkHandler && bookmarkHandler();
        deleteBox && deleteContentBoxList(deletedUrlId);
      },
      onError: (error) => {},
    },
  );
};

export const useSubscriptionMutate = (bookmarkHandler: () => void) => {
  return useMutation<boolean, Error, { urlId: number; subscriptionInfo: SubscriptionUrl }>(
    ["useSubscriptionMutate"],
    (subscriptionParam) => requestSubscription(subscriptionParam),
    {
      onSuccess: () => {
        bookmarkHandler();
        successToast("MY URL에 저장되었어요!");
      },
      onError: (error) => {},
    },
  );
};

export const useModifySubscriptionMutate = (
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
) => {
  return useMutation<MyContentType, Error, { urlId: number; subscriptionInfo: SubscriptionUrl }>(
    ["useModifySubscriptionMutate"],
    (subscriptionParam) => requestModifySubscription(subscriptionParam),
    {
      onSuccess: (myContent) => {
        console.log("myContent", myContent);
        ModalStore.setOpenModal({
          isOpen: true,
          text: "입력하신 정보로 변경되었습니다.",
          completeBtnText: "확인",
          closeIcon: false,
          onSuccess: () => {
            const { updateContentBoxList } = ContentsStore;
            setIsOpen(false);
            updateContentBoxList(myContent);
          },
        });
      },
      onError: (error) => {},
    },
  );
};
