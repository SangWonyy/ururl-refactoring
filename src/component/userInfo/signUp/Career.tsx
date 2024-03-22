import { InfoWrapper, SubTitleText, SubTitleTextWrapper, WarningIcon, WarningText } from "./signUp.style";
import styled from "styled-components";
import { UrUrlColor } from "@styles/urUrlStyle";
import { Dropdown } from "semantic-ui-react";
import { observer } from "mobx-react";
import ProfileUserInfoStore from "@src/store/user/ProfileInfoStore";
import { TCarreerLevel } from "@src/type/user/userType";

const careerList: Array<{ key: number; text: string; value: TCarreerLevel }> = [
  { key: 1, text: "주니어 (1-4년차)", value: "CareerLevel.JUNIOR" },
  { key: 3, text: "미들 (5-9년차)", value: "CareerLevel.INTERMEDIATE" },
  { key: 4, text: "시니어 (10-14년차) ", value: "CareerLevel.SENIOR" },
  { key: 5, text: "슈퍼시니어 (15년차 이상)", value: "CareerLevel.SUPER_SENIOR" },
];

const Career = function Career(props: { checkValidation: boolean }): JSX.Element {
  const { checkValidation } = props;
  const { profileUserInfo, setProfileUserInfo } = ProfileUserInfoStore;

  return (
    <InfoWrapper>
      <SubTitleTextWrapper>
        <SubTitleText id={"careerLevel"}>경력</SubTitleText>

        {checkValidation && profileUserInfo.careerLevel === null && (
          <>
            <WarningIcon src={"./common/warningIcon.svg"} alt={"Image not found"} />
            <WarningText>저도 샛병아리예요... 자신있게 알려주세요!</WarningText>
          </>
        )}
      </SubTitleTextWrapper>
      <CareerDropdown
        placeholder="선택해주세요"
        value={profileUserInfo.careerLevel}
        className="selection"
        options={careerList}
      >
        <CareerDropdwonMenu>
          {careerList.map((carrerInfo) => {
            const { key, value, text } = carrerInfo;
            return (
              <Dropdown.Item
                key={key}
                value={value as string}
                onClick={(event, data) => {
                  setProfileUserInfo({ ...profileUserInfo, careerLevel: value });
                }}
              >
                {text}
              </Dropdown.Item>
            );
          })}
        </CareerDropdwonMenu>
      </CareerDropdown>
    </InfoWrapper>
  );
};

const CareerDropdown = styled(Dropdown)`
  width: 100%;

  &:focus {
    border: 1px solid ${UrUrlColor.main} !important;
  }
`;

const CareerDropdwonMenu = styled(Dropdown.Menu)`
  border: 1px solid ${UrUrlColor.main} !important;
`;

export default observer(Career);
