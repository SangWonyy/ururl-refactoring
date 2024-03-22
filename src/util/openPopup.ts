import ModalStore from "@src/store/common/modalStore";

export const needLoginPopup = () => {
  const { setOpenLoginModal } = ModalStore;
  ModalStore.setOpenModal({
    isOpen: true,
    text: "이 기능을 사용하시려면 로그인이 필요해요!",
    isTwoBtn: true,
    completeBtnText: "로그인 할게요",
    cancelBtnText: "그냥 있을게요",
    needInfoIcon: false,
    subtext: "로그인 하시겠어요?",
    closeIcon: true,
    onSuccess: () => {
      setOpenLoginModal(true);
    },
  });
};
