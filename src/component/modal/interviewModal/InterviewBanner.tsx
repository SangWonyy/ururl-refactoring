import React from "react";
import {
  BannerWrapper,
  FontBase,
  Nickname,
  RowWrapper,
  TextWrapper,
  ImageWrapper,
  Daram,
} from "@src/component/modal/interviewModal/interview.style";
import { CloseIcon } from "@src/component/userInfo/signUp/signUp.style";
import ModalStore from "@src/store/common/modalStore";
import { setInterViewTime } from "@src/store/localStorage/localStorage";

const InterviewBanner = (): JSX.Element => {
  const { openInterviewModal, setOpenInterviewModal } = ModalStore;
  const { nickname } = openInterviewModal;
  const closeHandler = () => {
    const now = new Date();
    setInterViewTime(now.toISOString());
    setOpenInterviewModal(false, "");
  };

  return (
    <BannerWrapper>
      <TextWrapper>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingTop: 20,
            paddingRight: 20,
          }}
        >
          <CloseIcon
            style={{ width: 25, height: 25 }}
            src={"./common/whiteCloseIcon.svg"}
            onClick={closeHandler}
            alt={"Image not found"}
          />
        </div>
        <RowWrapper>
          <Nickname>{nickname}</Nickname>
          <FontBase>님의</FontBase>
        </RowWrapper>
        <TextWrapper>
          <FontBase>소중한 목소리가 필요해요!</FontBase>
        </TextWrapper>
      </TextWrapper>
      <ImageWrapper>
        <Daram src="./common/character/InterviewDaram.png" />
      </ImageWrapper>
    </BannerWrapper>
  );
};

export default InterviewBanner;
