import { Modal } from "react-responsive-modal";
import React from "react";
import ReportReason from "@src/component/modal/reportModal/ReportReason";
import ModalStore from "@src/store/common/modalStore";
import { observer } from "mobx-react";
import { CloseIcon } from "@src/component/userInfo/signUp/signUp.style";

const ReportModal: React.FC = () => {
  const { openReportModal, setOpenReportModal } = ModalStore;
  const { isOpen } = openReportModal;
  return (
    <Modal
      center={true}
      open={isOpen}
      onClose={() => {
        setOpenReportModal({ isOpen: false, urlId: -1 });
      }}
      closeOnOverlayClick={true}
      onOverlayClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
      }}
      showCloseIcon={false}
      styles={{
        modalContainer: { display: "flex", justifyContent: "center", alignItems: "center" },
        modal: { padding: 20, width: 520, height: 366, borderRadius: 13, outline: "none" },
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
        <CloseIcon
          style={{ width: 25, height: 25 }}
          src={"./common/closeIcon.svg"}
          onClick={() => setOpenReportModal({ isOpen: false, urlId: -1 })}
          alt={"Image not found"}
        />
      </div>

      <ReportReason />
    </Modal>
  );
};

export default observer(ReportModal);
