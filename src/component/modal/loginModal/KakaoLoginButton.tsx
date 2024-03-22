import { Dispatch, SetStateAction } from "react";
import { KakaoIcon, KakaoText, KakaoWrapper } from "./login.style";
import useKakaoLoginMutation from "@src/queries/userInfo/useKakaoLoginMutation";
import { GtagCategory } from "@src/enum/appEnum";
import { ClickGtagEvent } from "../../../../lib/gtag";
import ModalStore from "@src/store/common/modalStore";

export default function KakaoLoginButton(props: {
  isWelcome: boolean;
}): JSX.Element {
  const { isWelcome } = props;
  const loginMutation = useKakaoLoginMutation();
  const { setOpenLoginModal } = ModalStore;
  const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_KEY;

  return <div>{kakaoKey ? <></> : <div>kakaoKey 없음</div>}</div>;
}

const loginFail = (e: any) => {
  console.error(e);
};
