import { Button, ModalFooterWrapper, WithDrawalBtn } from "../../userInfo/signUp/signUp.style";
import { NextRouter, useRouter } from "next/router";
import { Dispatch, SetStateAction, useCallback } from "react";
import { removeJWTToken } from "@src/store/localStorage/localStorage";
import UserInfoStore from "@src/store/user/UserInfoStore";
import { removeTokenInHeader } from "@pages/api";
import { QueryClient, useQueryClient } from "react-query";
import useWithDrawalMutation from "@src/queries/userInfo/useWithDrawalMutation";
import { ClickGtagEvent } from "../../../../lib/gtag";
import { GtagCategory, HeaderTabType } from "@src/enum/appEnum";
import HeaderStore from "@src/store/main/header/HeaderStore";
import ProfileUserInfoStore from "@src/store/user/ProfileInfoStore";

const WithDrawalModalFooter = function ModalFooter(props: {
  isChecked: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  withDrawalReason: string;
}): JSX.Element {
  const { isChecked, setIsOpen, withDrawalReason } = props;
  const router = useRouter();
  const queryClient = useQueryClient();

  const removeUserInfoCallback = () => {
    UserInfoStore.setLoggedIn(false);
    HeaderStore.setHeaderTabType(HeaderTabType.AllUrl);
    removeUserInfo(setIsOpen, router, queryClient);
  };
  const withDrawalMutation = useWithDrawalMutation(removeUserInfoCallback);

  return (
    <ModalFooterWrapper>
      <WithDrawalBtn
        onClick={async () => {
          if (!isChecked) return;

          ClickGtagEvent({
            category: GtagCategory.WithDrawal,
            label: "회원탈퇴 팝업 탈퇴 버튼",
          });
          withDrawalMutation.mutate(withDrawalReason);
        }}
        isDisable={!isChecked}
      >
        탈퇴
      </WithDrawalBtn>
      <Button
        onClick={() => {
          ClickGtagEvent({
            category: GtagCategory.WithDrawal,
            label: "회원탈퇴 취소",
          });
          setIsOpen(false);
        }}
      >
        취소
      </Button>
    </ModalFooterWrapper>
  );
};

const removeUserInfo = (
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  router: NextRouter,
  queryClient: QueryClient,
) => {
  UserInfoStore.setInitUser();
  ProfileUserInfoStore.resetProfile();
  queryClient.removeQueries();
  removeTokenInHeader();
  removeJWTToken();
  setIsOpen(false);
  router.push("/");
};

export default WithDrawalModalFooter;
