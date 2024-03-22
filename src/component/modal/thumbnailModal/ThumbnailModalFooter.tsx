import styled from "styled-components";
import { UrUrlColor } from "@styles/urUrlStyle";
import { Dispatch, SetStateAction } from "react";
import { UserInfoType } from "@src/type/user/userType";
import UserInfoStore from "@src/store/user/UserInfoStore";
import ProfileUserInfoStore from "@src/store/user/ProfileInfoStore";

const ThumbnailModalFooter = function ModalFooter(props: {
  userInfo: UserInfoType;
  selectedIndex: number;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const { userInfo, selectedIndex, setIsOpen } = props;
  return (
    <ModalFooterWrapper>
      <Button
        onClick={() => {
          ProfileUserInfoStore.setProfileUserInfo({ ...userInfo, defaultPhotoIdx: selectedIndex });
          setIsOpen(false);
        }}
      >
        저장하기
      </Button>
    </ModalFooterWrapper>
  );
};

const ModalFooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const Button = styled.div`
  cursor: pointer;
  width: 80%;
  height: 40px;
  background-color: ${UrUrlColor.main};
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ThumbnailModalFooter;
