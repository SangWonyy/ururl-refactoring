import { UserInfoType } from "@src/type/user/userType";

const userInfo: UserInfoType = {
  nickName: "허흥",
  careerLevel: "JUNIOR",
  introduction: "hello",
  articleGoal: 3,
  major: "developer",
  hashtags: [
    {
      id: 1,
      name: "tag",
      isCustom: false,
    },
  ],
  defaultPhotoIdx: 1,
};

export const userInfoResponse: UserInfoType = userInfo;
