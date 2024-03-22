import HeaderStore from "@src/store/main/header/HeaderStore";
import { HeaderTabType } from "@src/enum/appEnum";
import MyUrlTabContainer from "./myUrlTab/MyUrlTabContainer";
import AllUrlTabContainer from "./allUrlTab/AllUrlTabContainer";
import { observer } from "mobx-react";

const TabContainer = function TabContainer(): JSX.Element {
  const { headerTabType } = HeaderStore;

  return <>{headerTabType === HeaderTabType.MyUrl ? <MyUrlTabContainer /> : <AllUrlTabContainer />}</>;
};

export default observer(TabContainer);
