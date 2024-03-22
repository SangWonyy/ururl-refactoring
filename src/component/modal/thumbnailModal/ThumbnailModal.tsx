import { Modal } from "react-responsive-modal";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CloseIcon, IconWrapper, OverlayInner } from "../../userInfo/signUp/signUp.style";
import ModalHeader from "../modalCommon/ModalHeader";
import ThumbnailModalBody from "./ThumbnailModalBody";
import ThumbnailModalFooter from "./ThumbnailModalFooter";
import UserInfoStore from "@src/store/user/UserInfoStore";

const ThumbnailModal = function ThumbnailModal(props: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const { userInfo } = UserInfoStore;
  const { isOpen, setIsOpen } = props;
  const [selectedIndex, setSelectedIndex] = useState<number>(userInfo.defaultPhotoIdx);

  return (
    <Modal
      center={true}
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      closeOnOverlayClick={true}
      onOverlayClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
      }}
      showCloseIcon={false}
      styles={{
        modalContainer: { padding: 50, display: "flex", justifyContent: "center", alignItems: "center" },
        modal: { padding: 30, maxWidth: 500, borderRadius: 6 },
      }}
    >
      <IconWrapper>
        <CloseIcon
          src={"./common/closeIcon.svg"}
          onClick={() => {
            closeModal(setIsOpen);
          }}
          alt={"Image not found"}
        />
      </IconWrapper>
      <OverlayInner>
        <ModalHeader title={"프로필 사진을 선택해주세요"} />
        <ThumbnailModalBody selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <ThumbnailModalFooter userInfo={userInfo} selectedIndex={selectedIndex} setIsOpen={setIsOpen} />
      </OverlayInner>
    </Modal>
  );
};

const closeModal = (setIsOpen: Dispatch<SetStateAction<boolean>>) => {
  try {
    setIsOpen(false);
  } catch (e) {
    throw new Error(`closeModal : ${e}`);
  }
};

export default ThumbnailModal;
