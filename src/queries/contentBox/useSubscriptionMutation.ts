import {
  MyContentType,
  SubscriptionUrl,
} from "@src/type/mainBody/mainBodyType";
import ModalStore from "@src/store/common/modalStore";
import { Dispatch, SetStateAction } from "react";
import ContentsStore from "@src/store/url/contentStore";
import { successToast } from "@src/util/toast";
import { useMutation } from "@tanstack/react-query";
import {
  requestCancelSubscription,
  requestModifySubscription,
  requestSubscription,
} from "@src/app/api/common/editUrlInfo";

export const useCancelSubscriptionMutate = (
  bookmarkHandler?: () => void,
  setChallengeStore?: () => void,
  deleteBox = false
) => {
  return useMutation<number, Error, number>({
    mutationKey: ["useCancelSubscriptionMutate"],
    mutationFn: (urlId) => requestCancelSubscription(urlId),
    onSuccess: (deletedUrlId) => {
      const { deleteContentBoxList } = ContentsStore;
      setChallengeStore && setChallengeStore();
      bookmarkHandler && bookmarkHandler();
      deleteBox && deleteContentBoxList(deletedUrlId);
    },
    onError: (error) => {},
  });
};

export const useSubscriptionMutate = (bookmarkHandler: () => void) => {
  return useMutation<
    boolean,
    Error,
    { urlId: number; subscriptionInfo: SubscriptionUrl }
  >({
    mutationKey: ["useSubscriptionMutate"],
    mutationFn: (subscriptionParam) => requestSubscription(subscriptionParam),
    onSuccess: () => {
      bookmarkHandler();
      successToast("MY URL에 저장되었어요!");
    },
    onError: (error) => {},
  });
};

export const useModifySubscriptionMutate = (
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsOpen: Dispatch<SetStateAction<boolean>>
) => {
  return useMutation<
    MyContentType,
    Error,
    { urlId: number; subscriptionInfo: SubscriptionUrl }
  >({
    mutationKey: ["useModifySubscriptionMutate"],
    mutationFn: (subscriptionParam) =>
      requestModifySubscription(subscriptionParam),
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
  });
};
