import {
  InfoWrapper,
  UrUrlInput,
  SubTitleText,
  SubTitleTextWrapper,
  WarningIcon,
  WarningText,
} from "./signUp.style";
import UserInfoStore from "@src/store/user/UserInfoStore";
import { observer } from "mobx-react";
import ProfileUserInfoStore from "@src/store/user/ProfileInfoStore";

const OneLineIntroduction = function OneLineIntroduction(props: { checkValidation: boolean }): JSX.Element {
  const { checkValidation } = props;
  const { profileUserInfo, setProfileUserInfo } = ProfileUserInfoStore;
  return (
    <InfoWrapper>
      <SubTitleTextWrapper>
        <SubTitleText id={"introduction"}>한줄자기소개</SubTitleText>
        {checkValidation && profileUserInfo.introduction === "" && (
          <>
            <WarningIcon src={"./common/warningIcon.svg"} alt={"Image not found"} />
            <WarningText>어떤 사람인지 너무 궁금해요!</WarningText>
          </>
        )}
      </SubTitleTextWrapper>
      <UrUrlInput
        placeholder={"본인을 잘 표현할 수 있는 한 문장을 입력해주세요."}
        width={100}
        value={profileUserInfo.introduction}
        onChange={(event) => {
          const introduction = event.target.value;
          setProfileUserInfo({ ...profileUserInfo, introduction });
        }}
      />
    </InfoWrapper>
  );
};

export default observer(OneLineIntroduction);
