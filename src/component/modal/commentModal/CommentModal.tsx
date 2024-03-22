import { Modal } from "react-responsive-modal";
import {
  BtnWrapper,
  CloseIcon,
  CloseWrapper,
  CompleteBtn,
  Comment,
  SubComment,
  SubCommentWrapper,
  InfoIcon,
  CancelBtn,
} from "./commentModal.style";
import ModalStore from "@src/store/common/modalStore";
import { observer } from "mobx-react";

const CommentModal = function CommentModal(): JSX.Element {
  const {
    isOpen,
    text,
    closeIcon,
    completeBtnText,
    onSuccess,
    onCancel,
    subtext,
    needInfoIcon,
    cancelBtnText,
    isTwoBtn,
  } = ModalStore.openModal;

  return (
    <Modal
      center
      open={isOpen}
      onClose={() => {
        ModalStore.closeModal();
      }}
      closeOnOverlayClick={true}
      showCloseIcon={false}
      styles={{
        modal: {
          paddingTop: 20,
          paddingBottom: 25,
          paddingRight: 20,
          paddingLeft: 20,
          borderRadius: 6,
          border: "none",
          minWidth: 330,
        },
        modalContainer: { display: "flex", justifyContent: "center", alignItems: "center" },
      }}
    >
      {closeIcon && (
        <CloseWrapper onClick={() => ModalStore.closeModal()}>
          <CloseIcon src={"./common/closeIcon.svg"} alt={"Image not found"} />
        </CloseWrapper>
      )}

      <Comment>{text}</Comment>
      {subtext && (
        <SubCommentWrapper>
          {needInfoIcon && <InfoIcon src={"./common/infoIcon.svg"} alt="no info icon" />}
          <SubComment bold={!needInfoIcon}>{subtext}</SubComment>
        </SubCommentWrapper>
      )}
      <BtnWrapper>
        {isTwoBtn && (
          <CancelBtn
            width="45%"
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              ModalStore.closeModal();

              onCancel && onCancel();
            }}
          >
            {cancelBtnText}
          </CancelBtn>
        )}
        <CompleteBtn
          width={isTwoBtn ? "45%" : "80%"}
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            onSuccess && onSuccess();
            ModalStore.closeModal();
          }}
        >
          {completeBtnText}
        </CompleteBtn>
      </BtnWrapper>
    </Modal>
  );
};

export default observer(CommentModal);
