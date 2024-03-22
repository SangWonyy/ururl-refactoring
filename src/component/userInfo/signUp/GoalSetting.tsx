import {
  InfoWrapper,
  SubTitleText,
  GoalTextWrapper,
  GoalText,
  GoalInput,
  SubTitleTextWrapper,
  WarningIcon,
  WarningText,
  GoalInputWrapper,
} from "./signUp.style";
import { useCallback } from "react";
import { Popup } from "semantic-ui-react";
import { observer } from "mobx-react";
import { UserInfoType } from "@src/type/user/userType";
import ProfileUserInfoStore from "@src/store/user/ProfileInfoStore";

const GoalSetting = function GoalSetting(props: { checkValidation: boolean }): JSX.Element {
  const { checkValidation } = props;
  const { profileUserInfo } = ProfileUserInfoStore;
  const checkValidationCallback = useCallback(
    (inputValue: string) => {
      return checkInputValue(inputValue, profileUserInfo);
    },
    [profileUserInfo],
  );

  return (
    <InfoWrapper>
      <SubTitleTextWrapper>
        <SubTitleText id={"articleGoal"}>목표설정</SubTitleText>
        {checkValidation && profileUserInfo.articleGoal === "" && (
          <>
            <WarningIcon src={"./common/warningIcon.svg"} alt={"Image not found"} />
            <WarningText>일주일간 볼 URL 개수를 설정해보세요</WarningText>
          </>
        )}
      </SubTitleTextWrapper>
      <GoalTextWrapper>
        <GoalText>일주일동안 최소</GoalText>
        <Popup
          trigger={
            <GoalInputWrapper>
              <GoalInput
                type="number"
                maxLength={99}
                minLength={1}
                min={1}
                max={99}
                step={1}
                value={profileUserInfo.articleGoal}
                onChange={(event) => {
                  const inputValue = event.target.value;
                  if (!checkValidationCallback(inputValue)) return;

                  ProfileUserInfoStore.setProfileUserInfo({ ...profileUserInfo, articleGoal: +inputValue });
                }}
              />
            </GoalInputWrapper>
          }
          position={"bottom center"}
          style={{ borderRadius: 12, color: "white" }}
          inverted
          wide={true}
        >
          <Popup.Content>
            <div>1부터 99까지 소수점 없이 입력해 주세요:)</div>
          </Popup.Content>
        </Popup>

        <GoalText>개의 URL을 볼 거에요 🔥</GoalText>
      </GoalTextWrapper>
    </InfoWrapper>
  );
};

const checkInputValue = (inputValue: string, userInfo: UserInfoType): boolean => {
  let isValidation = true;

  if (inputValue.includes(".") || +inputValue > 99 || +inputValue === 0 || inputValue === "") {
    isValidation = false;
  }

  if (inputValue === "") {
    ProfileUserInfoStore.setProfileUserInfo({ ...userInfo, articleGoal: "" });
  }

  return isValidation;
};

export default observer(GoalSetting);
