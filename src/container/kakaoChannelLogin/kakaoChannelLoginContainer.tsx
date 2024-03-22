import styled from "styled-components";
import KaKaoLogin from "react-kakao-login";
import { NextRouter, useRouter } from "next/router";
import { instance } from "@pages/api";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { successToast } from "@src/util/toast";

const SUCCESS = "success";
const NEED_SIGN_UP = "needSignUp";
const PAIR = "pair";
const ROOT_MOBILE = "rootMobile";

const loginSuccess = async (props: any, router: NextRouter): Promise<string> => {
  try {
    if (!process.env.NEXT_PUBLIC_KAKAO_KEY) throw new Error("카카오키 없습니다.");
    const currentPath = router.asPath;
    const botToken = currentPath.split("?")[1].split("=")[1];
    if (!botToken) {
      throw new Error("botToken 없음");
    }
    const kakaoToken = props.response.access_token;
    const signUpRequired = await postToken(kakaoToken, botToken);
    return signUpRequired ? NEED_SIGN_UP : SUCCESS;
  } catch (e) {
    console.error(e);
    throw new Error(`login Error : ${e}`);
  } finally {
  }
};

const postToken = async (kakaoToken: string, botToken: string): Promise<boolean> => {
  try {
    const data = {
      botToken,
      kakaoToken,
    };
    const { data: result } = await instance.post("/api/chatbot/pairing", data);
    return result.response.signUpRequired;
  } catch (e) {
    throw new Error(`postToken : ${e}`);
  }
};
const KakaoChannelLoginContainer = function TabContainer(): JSX.Element {
  const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_KEY;
  const router = useRouter();
  const [loginStatus, setLoginStatus] = useState<string>(PAIR);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
      setIsMobile(/iPhone|iPod|Android/i.test(navigator.userAgent));
    }
    if (router.asPath.includes("rootMobile")) {
      setLoginStatus(ROOT_MOBILE);
    }
  }, []);

  return (
    <LoginWrapper>
      <InnerWrapper isMobile={isMobile}>
        <LogoWrapper>
          <Logo src={"./common/mainLogo.svg"} alt={"Image not found"} />
        </LogoWrapper>
        {loginStatus === SUCCESS ? (
          <FairResultWrapper>
            <FairTitle>연동완료</FairTitle>
            <FairComment>
              모바일에서도 만날 수 있도록
              <br />
              열심히 달리는 중이에요!
              <br />
              <br /> PC에서 만나요 :)
            </FairComment>
          </FairResultWrapper>
        ) : loginStatus === NEED_SIGN_UP ? (
          <>
            <FairComment>
              앗, 아직 URURL 회원이 아니시군요.
              <br />
              연동을 원하신다면 PC에서 회원가입을 진행해주세요.
              <br />
              ururl.me 에서 기다릴게요!
            </FairComment>
          </>
        ) : (
          loginStatus === ROOT_MOBILE && (
            <>
              <FairComment>
                모바일에서도 만날 수 있도록
                <br />
                열심히 달리는 중이에요!
                <br />
                <br /> PC에서 만나요 :)
              </FairComment>
            </>
          )
        )}
        {(loginStatus === NEED_SIGN_UP || loginStatus || ROOT_MOBILE) && (
          <>
            <UrlCopyButton
              onClick={() => {
                navigator.clipboard.writeText("https://www.ururl.me/");
                successToast("url 주소 복사 완료");
              }}
            >
              링크 복사하기
            </UrlCopyButton>
          </>
        )}

        {loginStatus === PAIR &&
          (kakaoKey ? (
            <KakaologinButton
              token={kakaoKey}
              onSuccess={async (result) => {
                try {
                  const signUpRequired = await loginSuccess(result, router);
                  setLoginStatus(signUpRequired);
                } catch (e) {
                  alert(`login fail : ${e}`);
                }
              }}
              onFail={(error) => {
                console.error(error);
              }}
              onLogout={console.info}
            >
              <KakaoInner>
                <KakaoLogo src={"./common/kakaoLogo.svg"} alt={"Image not found"} />
                카카오 로그인
              </KakaoInner>
            </KakaologinButton>
          ) : (
            <div>카카오 키가 없어요</div>
          ))}
      </InnerWrapper>
    </LoginWrapper>
  );
};

const KakaologinButton = styled(KaKaoLogin)`
  background-color: #ffe812 !important;
  border-radius: 10px !important;
  cursor: pointer;
  width: 90% !important;
  min-width: 100px !important;
  height: 61px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px !important;
`;

const UrlCopyButton = styled.div`
  background-color: #979797;
  border-radius: 10px !important;
  cursor: pointer;
  width: 90% !important;
  min-width: 100px !important;
  height: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 19px;
`;

const LogoWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KakaoInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
`;

const Logo = styled.img`
  width: 100%;
`;

const KakaoLogo = styled.img`
  width: 35px;
  height: 35px;
  margin-bottom: 5px;
  margin-right: 10px;
`;

const InnerWrapper = styled.div<{ isMobile: boolean }>`
  height: 75%;
  width: ${(props) => (props.isMobile ? "90%" : "30%")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const LoginWrapper = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const FairResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const FairTitle = styled.div`
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 19px;
`;

const FairComment = styled.div`
  font-size: 15px;
  color: black;
  display: flex;
  justify-content: center;
  text-align: center;
`;
export default KakaoChannelLoginContainer;
