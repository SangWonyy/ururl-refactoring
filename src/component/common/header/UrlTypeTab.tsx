import { LeftItem, LeftItems } from "@src/component/common/header/header.style";
import { GtagCategory, HeaderTabType } from "@src/enum/appEnum";
import HeaderStore from "@src/store/main/header/HeaderStore";
import { observer } from "mobx-react";
import { useRouter } from "next/router";
import { ClickGtagEvent } from "../../../../lib/gtag";
import { useCallback } from "react";
import { getJWTToken } from "@src/store/localStorage/localStorage";
import { useQueryClient } from "react-query";
import { needLoginPopup } from "@src/util/openPopup";

const UrlTypeTab = (): JSX.Element => {
  const { headerTabType, setHeaderTabType } = HeaderStore;
  const router = useRouter();
  const query = useQueryClient();
  const tabClickHandler = useCallback((isAllUrlTab: boolean) => {
    const loggingIn = getJWTToken();

    if (!isAllUrlTab) {
      query.resetQueries();
    }
    if (!isAllUrlTab && !loggingIn) {
      needLoginPopup();
      return;
    }

    const label = isAllUrlTab ? "All URL 버튼" : "MyURL탭 버튼";
    const tabType = getTabType(isAllUrlTab, loggingIn);
    let routerPath = getRoutPath(tabType);

    ClickGtagEvent({
      category: GtagCategory.MyUrlTab,
      label,
    });

    setHeaderTabType(tabType);
    router.push(routerPath, undefined, { shallow: true });
  }, []);

  const getRoutPath = useCallback((tabType: HeaderTabType) => {
    if (tabType === HeaderTabType.None) return "login";
    return tabType === HeaderTabType.MyUrl ? "myUrl" : "/";
  }, []);

  const getTabType = useCallback((isAll: boolean, loggingIn: string | null | undefined) => {
    if (isAll) return HeaderTabType.AllUrl;
    return loggingIn ? HeaderTabType.MyUrl : HeaderTabType.None;
  }, []);

  return (
    <LeftItems>
      <LeftItem isSelected={headerTabType === HeaderTabType.MyUrl} onClick={() => tabClickHandler(false)}>
        My URL
      </LeftItem>
      <LeftItem isSelected={headerTabType === HeaderTabType.AllUrl} onClick={() => tabClickHandler(true)}>
        All URL
      </LeftItem>
    </LeftItems>
  );
};

export default observer(UrlTypeTab);
