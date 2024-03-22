import { makeAutoObservable } from "mobx";
import { UserInfoType } from "@src/type/user/userType";
import { hashTagType } from "@src/type/tag/tagType";

class ProfileUserInfoClass {
  profileUserInfo = <UserInfoType>{
    nickName: "",
    defaultPhotoIdx: 0,
    careerLevel: null,
    introduction: "",
    articleGoal: 1,
    major: "notMajorURURL",
    hashtags: <hashTagType[]>[],
    kakaoToken: undefined,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setProfileUserInfo = (userInfo: UserInfoType) => {
    this.profileUserInfo = userInfo;
  };

  resetProfile = () => {
    this.profileUserInfo = <UserInfoType>{
      nickName: "",
      defaultPhotoIdx: 0,
      careerLevel: null,
      introduction: "",
      articleGoal: 1,
      major: "notMajorURURL",
      hashtags: <hashTagType[]>[],
      kakaoToken: undefined,
    };
  };
}
const ProfileUserInfoStore = new ProfileUserInfoClass();
export default ProfileUserInfoStore;
