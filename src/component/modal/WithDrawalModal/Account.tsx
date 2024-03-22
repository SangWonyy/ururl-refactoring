import { InfoWrapper, Label, ValueWrapper } from "./withdrawalModal.style";
import UserInfoStore from "../../../store/user/UserInfoStore";
import { observer } from "mobx-react";

const Account = function Account(): JSX.Element {
  const { userInfo } = UserInfoStore;
  return (
    <InfoWrapper>
      <Label>닉네임</Label>
      <ValueWrapper>{userInfo.nickName}</ValueWrapper>
    </InfoWrapper>
  );
};

export default observer(Account);
