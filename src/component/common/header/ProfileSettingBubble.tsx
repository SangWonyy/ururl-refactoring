import {
  BubbleContent,
  Logout,
  LogoutIcon,
  Setting,
  SpeeechBubbleDraw,
} from "@src/component/common/header/header.style";
import { NextRouter, useRouter } from "next/router";
import { removeJWTToken } from "@src/store/localStorage/localStorage";
import { useCallback, useState } from "react";
import { removeTokenInHeader } from "@pages/api";
import { QueryClient, useQueryClient } from "react-query";
import { ClickGtagEvent } from "../../../../lib/gtag";
import { GtagCategory, HeaderTabType } from "@src/enum/appEnum";
import UserInfoStore from "@src/store/user/UserInfoStore";
import Link from "next/link";
import HeaderStore from "@src/store/main/header/HeaderStore";

const ProfileSettingBubble = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const router = useRouter();
  const queryClient = useQueryClient();

  const logoutCallback = useCallback(() => logOut(router, queryClient), [router, queryClient]);
  return (
    <>
      <SpeeechBubbleDraw>
        <BubbleContent>
          <Link href="editMyInfo?tabType=edit">
            <Setting
              onClick={() => {
                ClickGtagEvent({
                  category: GtagCategory.MyUrlTab,
                  label: "프로필 설정 버튼",
                });
              }}
            >
              설정
            </Setting>
          </Link>

          <Logout
            id="logout"
            onMouseOver={() => {
              setIsHover(!isHover);
            }}
            onMouseOut={() => {
              setIsHover(!isHover);
            }}
            onClick={() => {
              ClickGtagEvent({
                category: GtagCategory.MyUrlTab,
                label: "로그아웃 버튼",
              });
              logoutCallback();
            }}
          >
            로그아웃
            <LogoutIcon src={isHover ? "./header/logout.svg" : "./header/notSelectedLogout.svg"} />
          </Logout>
        </BubbleContent>
      </SpeeechBubbleDraw>
    </>
  );
};

const logOut = (router: NextRouter, queryClient: QueryClient) => {
  try {
    const { setHeaderTabType } = HeaderStore;
    queryClient.removeQueries();
    removeJWTToken();
    removeTokenInHeader();
    UserInfoStore.setLoggedIn(false);
    setHeaderTabType(HeaderTabType.AllUrl);

    const currentPath = router.pathname;
    currentPath !== "/" ? router.push("/") : router.reload();
  } catch (e) {
    throw new Error(`logOut: ${e}`);
  }
};

export default ProfileSettingBubble;
