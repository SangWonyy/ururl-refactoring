import { Dispatch, SetStateAction } from "react";
import { KakaoIcon, KakaologinButton, KakaoText, KakaoWrapper } from "./login.style";
import useKakaoLoginMutation from "@src/queries/userInfo/useKakaoLoginMutation";
import { GtagCategory } from "@src/enum/appEnum";
import { ClickGtagEvent } from "../../../../lib/gtag";
import ModalStore from "@src/store/common/modalStore";

export default function KakaoLoginButton(props: { isWelcome: boolean }): JSX.Element {
  const { isWelcome } = props;
  const loginMutation = useKakaoLoginMutation();
  const { setOpenLoginModal } = ModalStore;
  const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_KEY;

  return (
    <div>
      {kakaoKey ? (
        <KakaologinButton
          token={kakaoKey}
          onSuccess={(result) => {
            try {
              ClickGtagEvent({
                category: isWelcome ? GtagCategory.Service1 : GtagCategory.Service6,
                label: "카카오톡으로 로그인",
              });

              const kakaoToken = result.response.access_token;
              loginMutation.mutate(kakaoToken);
              setOpenLoginModal(false);
            } catch (e) {
              alert(`login fail : ${e}`);
            }
          }}
          onFail={loginFail}
          onLogout={console.info}
        >
          <KakaoWrapper id="kakao">
            <KakaoIcon src={"./common/kakaoIcon.svg"} />
            <KakaoText>카카오톡으로 로그인</KakaoText>
          </KakaoWrapper>
        </KakaologinButton>
      ) : (
        <div>kakaoKey 없음</div>
      )}
    </div>
  );
}

const loginFail = (e: any) => {
  console.error(e);
};
