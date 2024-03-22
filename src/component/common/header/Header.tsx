import {
  HeaderInner,
  HeaderWrapper,
  Logo,
  LogoWrapper,
  RightIcon,
  RightItems,
  UserIcon,
  UserWrapper,
  GoNotion,
} from "./header.style";
import { GtagCategory, HeaderTabType, ThumbnailList } from "@src/enum/appEnum";
import { observer } from "mobx-react";
import Link from "next/link";
import UserInfoStore from "@src/store/user/UserInfoStore";
import ProfileSettingBubble from "@src/component/common/header/ProfileSettingBubble";
import UrlTypeTab from "@src/component/common/header/UrlTypeTab";
import { ClickGtagEvent } from "../../../../lib/gtag";
import HeaderStore from "@src/store/main/header/HeaderStore";
import { useEffect, useState } from "react";
import { getJWTToken } from "@src/store/localStorage/localStorage";
import { needLoginPopup } from "@src/util/openPopup";

const Header = function Header(): JSX.Element {
  const { userInfo, loggedIn } = UserInfoStore;
  const [iconSrc, setIconSrc] = useState<string>("./profile/noneProfile.svg");
  const [loginState, setLoginState] = useState<boolean>(false);

  const logoClickHandler = () => {
    HeaderStore.setHeaderTabType(HeaderTabType.AllUrl);
    ClickGtagEvent({
      category: GtagCategory.MyUrlTab,
      label: "URURL 로고 버튼",
    });
  };

  const infoClickHandler = () => {
    ClickGtagEvent({
      category: GtagCategory.MyUrlTab,
      label: "i 클릭",
    });
  };
  const profileIconClickHandler = () => {
    if (getJWTToken()) return;

    needLoginPopup();
  };

  useEffect(() => {
    const image = loggedIn ? ThumbnailList[userInfo.defaultPhotoIdx].img : "./profile/noneProfile.svg";
    setIconSrc(image);
  }, [loggedIn, userInfo]);

  useEffect(() => {
    setLoginState(loggedIn);
  }, [loggedIn]);

  return (
    <HeaderWrapper>
      <HeaderInner>
        <UrlTypeTab />
        <LogoWrapper onClick={logoClickHandler}>
          <Link href={"/"}>
            <Logo src="/common/headerLogo.svg" alt={"Image not found"} />
          </Link>
        </LogoWrapper>
        <RightItems>
          <GoNotion
            onClick={infoClickHandler}
            href={"https://ururl-official.notion.site/URURL-c317d8e3ef714874ae633c27d8060523"}
            target="_blank"
          >
            <RightIcon src={"./header/infoIcon.svg"} alt={"Image not found"} />
          </GoNotion>
          <UserWrapper loggingIn={loginState}>
            <UserIcon src={iconSrc} alt="Image not found" onClick={profileIconClickHandler} />
            <ProfileSettingBubble />
          </UserWrapper>
        </RightItems>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default observer(Header);
