import React, { useEffect, useState } from "react";
import Profile from "@src/component/userInfo/signUp/Profile";
import Nickname from "@src/component/userInfo/signUp/Nickname";
import { InfoType } from "@src/enum/appEnum";
import Specialty from "@src/component/userInfo/signUp/Specialty";
import Interests from "@src/component/userInfo/signUp/Interests";
import {
  InfoWrapper,
  SubTitleText,
  TagWrapper,
  WarningIcon,
  WarningText,
} from "@src/component/userInfo/signUp/signUp.style";
import CustomHashTag from "@src/component/common/customTag/CustomHashTag";
import CustomTagList from "@src/component/common/customTag/CustomTagList";
import Career from "@src/component/userInfo/signUp/Career";
import OneLineIntroduction from "@src/component/userInfo/signUp/OneLineIntroduction";
import GoalSetting from "@src/component/userInfo/signUp/GoalSetting";
import CompleteButton from "@src/component/userInfo/signUp/CompleteButton";
import { TNickNameState } from "@src/type/login/loginType";
import WithDrawalModal from "@src/component/modal/WithDrawalModal/WithDrawalModal";
import styled from "styled-components";
import ProfileUserInfoStore from "@src/store/user/ProfileInfoStore";
import UserInfoStore from "@src/store/user/UserInfoStore";
import { observer } from "mobx-react";

const EditProfileTab: React.FC = () => {
  const [checkValidation, setCheckValidation] = useState(false);
  const [nickNameValidation, setNickNameValidation] = useState<TNickNameState>("prevSameInit");
  const [nameMaxLength, setNameMaxLength] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { setProfileUserInfo, profileUserInfo } = ProfileUserInfoStore;
  const { userInfo } = UserInfoStore;

  useEffect(() => {
    setProfileUserInfo(userInfo);
    return () => setProfileUserInfo(userInfo);
  }, [EditProfileTab, userInfo]);

  return (
    <>
      <Profile />
      <Nickname
        checkValidation={checkValidation}
        setCheckValidation={setCheckValidation}
        nickNameValidation={nickNameValidation}
        setNickNameValidation={setNickNameValidation}
      />
      <Specialty checkValidation={checkValidation} />
      <Interests checkValidation={checkValidation} />
      <InfoWrapper>
        <LabelWrapper>
          <SubTitleText>내가 만드는 해시태그</SubTitleText>
          {nameMaxLength && (
            <>
              <WarningIcon src={"./common/warningIcon.svg"} alt={"Image not found"} />
              <WarningText>최대 16글자까지 가능해요</WarningText>
            </>
          )}
        </LabelWrapper>

        <TagWrapper>
          <CustomHashTag setNameMaxLength={setNameMaxLength} nameMaxLength={nameMaxLength} />
          <CustomTagList />
        </TagWrapper>
      </InfoWrapper>
      <Career checkValidation={checkValidation} />
      <OneLineIntroduction checkValidation={checkValidation} />
      <GoalSetting checkValidation={checkValidation} />
      <CompleteButton
        type={InfoType.Edit}
        setCheckValidation={setCheckValidation}
        nickNameValidation={nickNameValidation}
      />
      {isOpen && <WithDrawalModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

const LabelWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default observer(EditProfileTab);
