import { DimWrapper, LoginBtn, LoginGuideText } from "@src/component/main/main.style";
import { useRouter } from "next/router";

const DimForLogin = (): JSX.Element => {
  const { push } = useRouter();
  return (
    <DimWrapper>
      <LoginGuideText>로그인하시면 저장해놓고 안 읽는 URL들을 알려드릴게요!</LoginGuideText>
      <LoginBtn onClick={() => push("login")}>로그인 할래요</LoginBtn>
    </DimWrapper>
  );
};

export default DimForLogin;
