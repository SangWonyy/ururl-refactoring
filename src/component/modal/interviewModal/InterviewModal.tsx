import React from "react";
import { Modal } from "react-responsive-modal";
import { observer } from "mobx-react";
import ModalStore from "@src/store/common/modalStore";
import InterviewBanner from "@src/component/modal/interviewModal/InterviewBanner";
import InputInterviewInfo from "@src/component/modal/interviewModal/InputInterviewInfo";
import { setInterViewTime } from "@src/store/localStorage/localStorage";

const InterviewModal = (): JSX.Element => {
  const { openInterviewModal, setOpenInterviewModal } = ModalStore;
  const closeHandler = () => {
    const now = new Date();
    setInterViewTime(now.toISOString());
    setOpenInterviewModal(false, "");
  };
  return (
    <Modal
      center={true}
      open={openInterviewModal.isOpen}
      onClose={closeHandler}
      closeOnOverlayClick={true}
      onOverlayClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
      }}
      showCloseIcon={false}
      styles={{
        modalContainer: { display: "flex", justifyContent: "center", alignItems: "center" },
        modal: { width: 494, height: 655, borderRadius: 13, outline: "none", padding: 0 },
      }}
    >
      <InterviewBanner />
      <InputInterviewInfo />
    </Modal>
  );
};

export default observer(InterviewModal);
