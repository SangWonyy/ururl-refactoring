import { makeAutoObservable, observable } from "mobx";
import { UserInfoType } from "@src/type/user/userType";
import { hashTagType } from "@src/type/tag/tagType";

class UserInfoClass {
  initValue = <UserInfoType>{
    nickName: "",
    defaultPhotoIdx: 0,
    careerLevel: null,
    introduction: "",
    articleGoal: 1,
    major: "notMajorURURL",
    hashtags: <hashTagType[]>[],
    kakaoToken: undefined,
  };

  userInfo = <UserInfoType>{
    nickName: "",
    defaultPhotoIdx: 0,
    careerLevel: null,
    introduction: "",
    articleGoal: 1,
    major: "notMajorURURL",
    hashtags: <hashTagType[]>[],
    kakaoToken: undefined,
  };

  upcommingModalState = false;

  loggedIn = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUserInfo = (userInfo: UserInfoType) => {
    this.userInfo = userInfo;
  };

  setInitUser = () => {
    this.userInfo = { ...this.initValue };
  };

  setUpcommingModalState = (modalState: boolean) => {
    this.upcommingModalState = modalState;
  };

  setLoggedIn = (isLoggedIn: boolean) => {
    this.loggedIn = isLoggedIn;
  };
}
const UserInfoStore = new UserInfoClass();
export default UserInfoStore;
