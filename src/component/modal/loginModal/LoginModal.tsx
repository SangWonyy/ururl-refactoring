import { useState } from "react";
import { Modal } from "react-responsive-modal";
import Welcome from "@src/component/modal/loginModal/Welcome";
import Guide from "@src/component/modal/loginModal/Guide";
import ModalStore from "@src/store/common/modalStore";
const LoginModal = function LoginModal(): JSX.Element {
  const [openGuideBox, setOpenGuideBox] = useState<boolean>(false);
  const { isOpenLoginModal, setOpenLoginModal } = ModalStore;

  return (
    <Modal
      closeOnEsc={false}
      center={true}
      open={isOpenLoginModal}
      onClose={() => {
        setOpenLoginModal(false);
      }}
      closeOnOverlayClick={false}
      onOverlayClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
        setOpenLoginModal(false);
      }}
      showCloseIcon={false}
      styles={{
        modalContainer: {
          padding: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        modal: { padding: 30, width: 650, height: 561, borderRadius: 6, outline: "none" },
      }}
    >
      {openGuideBox ? <Guide /> : <Welcome setOpenGuideBox={setOpenGuideBox} />}
    </Modal>
  );
};

export default LoginModal;
