import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TNickNameState } from "@src/type/login/loginType";
import Title from "@src/component/userInfo/common/Title";
import Profile from "@src/component/userInfo/signUp/Profile";
import Nickname from "@src/component/userInfo/signUp/Nickname";
import { InfoType } from "@src/enum/appEnum";
import Specialty from "@src/component/userInfo/signUp/Specialty";
import Interests from "@src/component/userInfo/signUp/Interests";
import Career from "@src/component/userInfo/signUp/Career";
import OneLineIntroduction from "@src/component/userInfo/signUp/OneLineIntroduction";
import GoalSetting from "@src/component/userInfo/signUp/GoalSetting";
import CompleteButton from "@src/component/userInfo/signUp/CompleteButton";
import { UserInfoInner, UserInfoWrapper } from "@src/component/userInfo/userInfo.style";
import useGetTagListQuery from "@src/queries/tag/useGetTagListQuery";
import ProfileUserInfoStore from "@src/store/user/ProfileInfoStore";

export async function getStaticProps() {
  return { props: {} };
}

const SignUp: NextPage = (props: {}) => {
  useGetTagListQuery();
  const router = useRouter();
  const kakaoToken = router.query.accessToken;
  const { profileUserInfo, setProfileUserInfo } = ProfileUserInfoStore;
  const [checkValidation, setCheckValidation] = useState<boolean>(false);
  const [nickNameValidation, setNickNameValidation] = useState<TNickNameState>("init");

  useEffect(() => {
    if (!kakaoToken) return;

    setProfileUserInfo({ ...profileUserInfo, kakaoToken: kakaoToken as string });
  }, [kakaoToken, profileUserInfo, setProfileUserInfo]);

  return (
    <div style={{ overflow: "hidden" }}>
      <UserInfoWrapper>
        <UserInfoInner>
          <Title title={"회원가입"} />
          <Profile />
          <Nickname
            checkValidation={checkValidation}
            setCheckValidation={setCheckValidation}
            nickNameValidation={nickNameValidation}
            setNickNameValidation={setNickNameValidation}
          />
          <Specialty checkValidation={checkValidation} />
          <Interests checkValidation={checkValidation} />
          <Career checkValidation={checkValidation} />
          <OneLineIntroduction checkValidation={checkValidation} />
          <GoalSetting checkValidation={checkValidation} />
          <CompleteButton
            type={InfoType.SignUp}
            setCheckValidation={setCheckValidation}
            nickNameValidation={nickNameValidation}
          />
        </UserInfoInner>
      </UserInfoWrapper>
    </div>
  );
};

export default SignUp;
