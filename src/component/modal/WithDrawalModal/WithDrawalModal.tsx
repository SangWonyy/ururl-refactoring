import { Modal } from "react-responsive-modal";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CloseIcon, IconWrapper, OverlayInner } from "../../userInfo/signUp/signUp.style";
import ModalHeader from "../modalCommon/ModalHeader";
import AgreeComments from "./AgreeComments";
import Account from "./Account";
import ReasonForWithdrawal from "./ReasonForWithdrawal";
import styled from "styled-components";
import WithDrawalModalFooter from "./WithDrawalModalFooter";

const closeModal = (setIsOpen: Dispatch<SetStateAction<boolean>>) => {
  try {
    setIsOpen(false);
  } catch (e) {
    throw new Error(`closeModal : ${e}`);
  }
};

const WithDrawalModal = function WithDrawalModal(props: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const { isOpen, setIsOpen } = props;
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [withDrawalReason, setWithDrawalReason] = useState<string>("");

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
        modalContainer: { padding: 50 },
        modal: { padding: 30, maxWidth: 550, maxHeight: 600, borderRadius: 6 },
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
        <ModalHeader title={"회원 탈퇴"} />
        <AgreeComments isChecked={isChecked} setIsChecked={setIsChecked} />
        <Account />
        <ReasonForWithdrawal setWithDrawalReason={setWithDrawalReason} />
        <RealWithdrawal>정말 탈퇴하시겠어요? 😢</RealWithdrawal>
        <WithDrawalModalFooter
          isChecked={isChecked}
          setIsOpen={setIsOpen}
          withDrawalReason={withDrawalReason}
        />
      </OverlayInner>
    </Modal>
  );
};

const RealWithdrawal = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
`;

export default WithDrawalModal;
