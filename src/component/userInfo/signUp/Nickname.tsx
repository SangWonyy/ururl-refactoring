import {
  CheckDuplicationBtn,
  InfoWrapper,
  InputWrapper,
  ResultNicknameValidation,
  UrUrlInput,
  SubTitleText,
  SubTitleTextWrapper,
  WarningIcon,
  WarningText,
} from "./signUp.style";
import { Dispatch, SetStateAction, useCallback, useRef } from "react";
import { TNickNameState } from "@src/type/login/loginType";
import { observer } from "mobx-react";
import UserInfoStore from "@src/store/user/UserInfoStore";
import { UseMutationResult } from "react-query";
import useCheckNicknameMutation from "@src/queries/userInfo/useCheckNicknameMutation";
import ProfileUserInfoStore from "@src/store/user/ProfileInfoStore";

const checkDuplication = (
  checkMutation: UseMutationResult<boolean, Error, string, unknown>,
  nickname?: string,
) => {
  try {
    if (!nickname) return;
    checkMutation.mutate(nickname);
  } catch (e) {
    throw new Error(`CheckDuplication : ${e}`);
  }
};

const Nickname = function NicName(props: {
  checkValidation: boolean;
  setCheckValidation: Dispatch<SetStateAction<boolean>>;
  nickNameValidation: TNickNameState;
  setNickNameValidation: Dispatch<SetStateAction<TNickNameState>>;
}): JSX.Element {
  const { checkValidation, nickNameValidation, setNickNameValidation, setCheckValidation } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const { userInfo } = UserInfoStore;
  const { profileUserInfo, setProfileUserInfo } = ProfileUserInfoStore;
  const checkMutation = useCheckNicknameMutation(setNickNameValidation);

  const warnningComment = useCallback(() => {
    let warnning = { color: "#F00E0E", text: "중복 확인을 해주세요" };
    switch (nickNameValidation) {
      case "check":
        warnning = { color: "#4CC297", text: "사용할 수 있는 닉네임이에요" };
        break;
      case "duple":
        warnning = { color: "#F00E0E", text: "이미 사용 중인 닉네임이에요." };
        break;
      case "prevSame":
        warnning = { color: "#F00E0E", text: "이미 중복 확인한 닉네임이에요." };
        break;
      default:
        warnning = { color: "#F00E0E", text: "중복 확인을 해주세요" };
        break;
    }

    const { color, text } = warnning;
    return <ResultNicknameValidation fontColor={color}>{text}</ResultNicknameValidation>;
  }, [nickNameValidation]);

  return (
    <InfoWrapper>
      <SubTitleTextWrapper>
        <SubTitleText id="nickName">닉네임</SubTitleText>
        {checkValidation && (nickNameValidation === "noneCheck" || nickNameValidation === "init") && (
          <>
            <WarningIcon src={"./common/warningIcon.svg"} alt={"Image not found"} />
            <WarningText>중복확인해주세요</WarningText>
          </>
        )}
      </SubTitleTextWrapper>
      <InputWrapper>
        <UrUrlInput
          ref={inputRef}
          value={profileUserInfo.nickName}
          placeholder="URURL에서 사용하실 닉네임을 적어주세요"
          width={82}
          onChange={(event) => {
            const nickName = event.target.value;
            const isSamePrev = userInfo.nickName && userInfo.nickName === nickName;
            const validation = isSamePrev ? "prevSame" : "noneCheck";
            setNickNameValidation(validation);

            setProfileUserInfo({ ...profileUserInfo, nickName });
            setCheckValidation(false);
          }}
        />
        <CheckDuplicationBtn
          activeDuplBtn={nickNameValidation === "noneCheck"}
          onClick={async () => {
            const nickName = inputRef?.current?.value;
            if (nickName === "") {
              alert("내용을 입력해주세요");
              return;
            }

            const isSamePrev = userInfo.nickName && userInfo.nickName === nickName;
            if (isSamePrev) return;

            checkDuplication(checkMutation, nickName);
          }}
        >
          중복 확인
        </CheckDuplicationBtn>
      </InputWrapper>
      {nickNameValidation !== "prevSameInit" &&
        nickNameValidation !== "init" &&
        nickNameValidation !== "noneCheck" &&
        warnningComment()}
    </InfoWrapper>
  );
};

export default observer(Nickname);
