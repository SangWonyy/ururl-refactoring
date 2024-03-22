import { SignUp, SignUpButtonWrapper, Withdrawal } from "./signUp.style";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { GtagCategory, InfoType } from "@src/enum/appEnum";
import { UserInfoType } from "@src/type/user/userType";
import { isEqual } from "lodash";
import { TNickNameState } from "@src/type/login/loginType";
import { observer } from "mobx-react";
import WithDrawalModal from "@src/component/modal/WithDrawalModal/WithDrawalModal";
import UserInfoStore from "@src/store/user/UserInfoStore";
import { toJS } from "mobx";
import { UseMutationResult, useQueryClient } from "react-query";
import { NextRouter, useRouter } from "next/router";
import ModalStore from "@src/store/common/modalStore";
import useUpdateUserInfoMutation from "@src/queries/userInfo/useUpdateUserInfoMutation";
import useSaveUserInfoMutation from "@src/queries/userInfo/useSaveUserInfoMutation";
import { ClickGtagEvent } from "../../../../lib/gtag";
import ProfileUserInfoStore from "@src/store/user/ProfileInfoStore";

const CompleteButton = function SignUpButton(props: {
  type: InfoType;
  setCheckValidation: Dispatch<SetStateAction<boolean>>;
  nickNameValidation: TNickNameState;
}): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { type, setCheckValidation, nickNameValidation } = props;
  const { profileUserInfo } = ProfileUserInfoStore;
  const isSignUp = type === InfoType.SignUp;
  const queryClient = useQueryClient();
  const router = useRouter();

  const updateUserInfoMutation = useUpdateUserInfoMutation(queryClient, router);
  const signUpUserMutation = useSaveUserInfoMutation(router);

  const signupCallback = useCallback(() => {
    signUp(profileUserInfo, setCheckValidation, nickNameValidation, signUpUserMutation);
  }, [profileUserInfo, nickNameValidation]);

  const editSaveCallback = useCallback(() => {
    editSave(profileUserInfo, setCheckValidation, nickNameValidation, updateUserInfoMutation, router);
  }, [nickNameValidation, profileUserInfo]);

  return (
    <>
      <SignUpButtonWrapper>
        <SignUp
          onClick={() => {
            isSignUp
              ? ClickGtagEvent({
                  category: GtagCategory.Signup,
                  label: "회원가입완료 버튼",
                })
              : ClickGtagEvent({
                  category: GtagCategory.Setting,
                  label: "회원정보 수정 버튼",
                });
            isSignUp ? signupCallback() : editSaveCallback();
          }}
        >
          {isSignUp ? "회원가입 완료" : "저장"}
        </SignUp>
        {!isSignUp && (
          <Withdrawal
            onClick={() => {
              ClickGtagEvent({
                category: GtagCategory.Setting,
                label: "회원탈퇴 버튼",
              });
              setIsOpen(true);
            }}
          >
            회원 탈퇴하기
          </Withdrawal>
        )}
      </SignUpButtonWrapper>
      {isOpen && <WithDrawalModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

const signUp = async (
  userInfo: UserInfoType,
  setCheckValidation: Dispatch<SetStateAction<boolean>>,
  nickNameValidation: TNickNameState,
  signUpUserMutation: UseMutationResult<{ token: string | null }, Error, UserInfoType, unknown>,
) => {
  try {
    const validation = checkValidation(userInfo, setCheckValidation, nickNameValidation);

    validation.validation ? goSignup(userInfo, signUpUserMutation) : failInputInfo(validation.infoKey);
  } catch (e) {
    throw new Error(`signUp : ${e}`);
  }
};

const failInputInfo = (failReason: string) => {
  try {
    if (failReason === "kakaoToken") {
      alert("카카오 토큰 없음");
      return;
    }
    goUnsatisfiedPosition(failReason);
  } catch (e) {
    throw new Error(`failSignup : ${e}`);
  }
};

const goSignup = (
  userInfo: UserInfoType,
  signUpUserMutation: UseMutationResult<{ token: string | null }, Error, UserInfoType, unknown>,
) => {
  try {
    signUpUserMutation.mutate(userInfo);
  } catch (e) {
    throw new Error(`goSignup : ${e}`);
  }
};

const editSave = async (
  newUserInfo: UserInfoType,
  setCheckValidation: Dispatch<SetStateAction<boolean>>,
  nickNameValidation: TNickNameState,
  updateUserInfoMutation: UseMutationResult<any, Error, UserInfoType, unknown>,
  router: NextRouter,
) => {
  try {
    const { userInfo } = UserInfoStore;
    const newUser = toJS(newUserInfo);
    const prevUser = toJS(userInfo);

    const differentValue = diffValue(newUser, prevUser);
    if (isNotChangeData(differentValue, router)) return;

    const validation = checkValidation(differentValue, setCheckValidation, nickNameValidation);
    validation.validation
      ? goEditMyInfo(updateUserInfoMutation, differentValue)
      : failInputInfo(validation.infoKey);
  } catch (e) {
    throw new Error(`EditSave : ${e}`);
  }
};

const goEditMyInfo = (
  updateUserInfoMutation: UseMutationResult<any, Error, UserInfoType, unknown>,
  differentValue: any,
) => {
  try {
    updateUserInfoMutation.mutate(differentValue);
  } catch (e) {
    throw new Error(`goEditMyInfo : ${e}`);
  }
};

const isNotChangeData = (differentValue: any, router: NextRouter) => {
  try {
    const notChangeData = isEqual(differentValue, {});
    if (notChangeData) {
      ModalStore.setOpenModal({
        isOpen: true,
        text: "회원정보 수정이 완료되었습니다.",
        completeBtnText: "확인",
        closeIcon: false,
        onSuccess: () => {
          router.push("/");
        },
      });
    }
    return notChangeData;
  } catch (e) {
    throw new Error(`notChangeData : ${e}`);
  }
};

const diffValue = (newUserInfo: any, prevUserInfo: any) => {
  try {
    const diff: any = {};
    Object.keys(prevUserInfo).forEach((key) => {
      if (!isEqual(newUserInfo[key], prevUserInfo[key])) {
        diff[key] = newUserInfo[key];
      }
    });

    return diff;
  } catch (e) {
    throw new Error(`diffValue: ${e}`);
  }
};

const checkValidation = (
  userInfo: any,
  setCheckValidation: Dispatch<SetStateAction<boolean>>,
  nickNameValidation: TNickNameState,
): { validation: boolean; infoKey: string } => {
  try {
    let validation = {
      validation: true,
      infoKey: "",
    };
    Object.keys(userInfo).forEach((key) => {
      if (userInfo[key] === "" || userInfo[key] === undefined) {
        validation = {
          validation: false,
          infoKey: key,
        };

        return false;
      }

      if (key === "major" && userInfo[key] === "notMajorURURL") {
        validation = {
          validation: false,
          infoKey: key,
        };
        return false;
      }

      const enableNickname = nickNameValidation === "check" || nickNameValidation === "prevSame";
      if (key === "nickName" && !enableNickname) {
        validation = {
          validation: false,
          infoKey: key,
        };
        return false;
      }

      if (key === "hashtags") {
        const { hashtags } = userInfo;
        const isUnselectedMetaTag = hashtags?.length;
        if (isUnselectedMetaTag === 0) {
          validation = {
            validation: false,
            infoKey: key,
          };
        }
        return false;
      }

      if (key === "careerLevel" || key === "articleGoal") {
        if (userInfo[key] === 0 || userInfo[key] === -1) {
          validation = {
            validation: false,
            infoKey: key,
          };

          return false;
        }
      }
    });

    setCheckValidation(true);
    return validation;
  } catch (e) {
    throw new Error(`checkValidation : ${e}`);
  }
};

const goUnsatisfiedPosition = (infoKey: string) => {
  try {
    if (typeof window !== "undefined") {
      const ElementTop = window.document?.getElementById(infoKey)?.offsetTop;
      ElementTop && window.scrollTo(0, ElementTop - 400);
    }
  } catch (e) {
    throw new Error(`goUnsatisfiedPosition : ${e}`);
  }
};

export default observer(CompleteButton);
