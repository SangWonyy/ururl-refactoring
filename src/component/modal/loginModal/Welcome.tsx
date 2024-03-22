import { Dispatch, SetStateAction } from "react";
import { ClickGtagEvent } from "../../../../lib/gtag";
import { GtagCategory } from "@src/enum/appEnum";
import {
  Button,
  ButtonWrapper,
  InnerModal,
  StartBtnWrapper,
  StartIcon,
  Title,
  WelcomeImg,
} from "./login.style";
import KakaoLoginButton from "@src/component/modal/loginModal/KakaoLoginButton";

const Welcome = function (props: { setOpenGuideBox: Dispatch<SetStateAction<boolean>> }): JSX.Element {
  const { setOpenGuideBox } = props;
  return (
    <InnerModal>
      <Title>URURL에 오신 걸 환영합니다!</Title>
      <WelcomeImg src={"./common/introService/squirrel.svg"} />
      <ButtonWrapper>
        <KakaoLoginButton isWelcome />
        <StartBtnWrapper>
          <Button
            onClick={() => {
              ClickGtagEvent({ category: GtagCategory.Service1, label: "처음이신가요? 버튼" });
              setOpenGuideBox(true);
            }}
          >
            <StartIcon src={"./common/startEmogeIcon.svg"} />
            처음이신가요?
          </Button>
        </StartBtnWrapper>
      </ButtonWrapper>
    </InnerModal>
  );
};

export default Welcome;
