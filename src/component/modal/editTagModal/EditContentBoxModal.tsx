import { Modal } from "react-responsive-modal";
import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import UrlModalHeader from "../commonTagComponent/header/UrlModalHeader";
import UrlModalBody from "../commonTagComponent/body/UrlModalBody";
import UrlModalFooter from "../commonTagComponent/footer/UrlModalFooter";
import { UrlWrapper } from "../commonTagComponent/header/urlModal.style";
import { UrlModalEnum } from "@src/enum/appEnum";

const EditContentBoxModal = (props: {
  openEditModal: boolean;
  setOpenEditModal: Dispatch<SetStateAction<boolean>>;
  urlId: number;
}): JSX.Element => {
  const { openEditModal, setOpenEditModal, urlId } = props;

  return (
    <div
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
      }}
      style={{ outline: "none" }}
    >
      <Modal
        center={true}
        open={openEditModal}
        onClose={() => {
          setOpenEditModal(false);
        }}
        closeOnOverlayClick={true}
        showCloseIcon={false}
        onOverlayClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
        }}
        styles={{
          modalContainer: { padding: 50, display: "flex", justifyContent: "center", alignItems: "center" },
          modal: { padding: 30, maxWidth: 600, borderRadius: 6 },
        }}
      >
        <UrlWrapper
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
          }}
        >
          <UrlModalHeader headerText={"이 URL의 정보를 변경해주세요!"} setIsOpen={setOpenEditModal} />
          <UrlModalBody urlModalType={UrlModalEnum.Edit} />
          <UrlModalFooter urlModalType={UrlModalEnum.Edit} setIsOpen={setOpenEditModal} urlId={urlId} />
        </UrlWrapper>
      </Modal>
    </div>
  );
};

export default EditContentBoxModal;
