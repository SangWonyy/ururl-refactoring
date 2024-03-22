import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { axoisInterceptor } from "@pages/api";
import * as gtag from "../../../../lib/gtag";
import Head from "next/head";
import Header from "@src/component/common/header/Header";
import CommentModal from "@src/component/modal/commentModal/CommentModal";
import FooterContainer from "@src/container/footer/FooterContainer";
import useDefaultSet from "@src/hooks/useDefaultSet";
import { observer } from "mobx-react";
import LoginModal from "@src/component/modal/loginModal/LoginModal";
import ModalStore from "@src/store/common/modalStore";
import InterviewModal from "@src/component/modal/interviewModal/InterviewModal";

type Props = {
  children: ReactNode;
};

const PageFrame = ({ children }: Props): JSX.Element => {
  const [title, setTitle] = useState<string>("URURL");
  const { isOpenLoginModal, setOpenLoginModal } = ModalStore;
  const router = useRouter();
  const path = router.pathname;
  const isKakaoChannel = path.includes("kakaoChannelLogin");

  useDefaultSet(isKakaoChannel);

  useEffect(() => {
    axoisInterceptor(router, setOpenLoginModal);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setTitle(getTitle(url));
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const getTitle = useCallback((url: string) => {
    let title = "URURL - URL을 가장 쉽게 관리하는 방법";
    switch (url) {
      case "/editMyInfo":
        title = "프로필 수정";
        break;
      case "/signUp":
        title = "회원가입";
        break;
      case "/search":
        title = "검색";
        break;
      case "/kakaoChannelLogin":
        title = "카카오채널 로그인";
        break;
      default:
        break;
    }

    return title;
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {!isKakaoChannel && <Header />}
      {children}

      <CommentModal />
      <InterviewModal />
      {!isKakaoChannel && <FooterContainer />}
      {isOpenLoginModal && <LoginModal />}
    </>
  );
};

export default observer(PageFrame);
