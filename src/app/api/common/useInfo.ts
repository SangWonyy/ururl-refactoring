import { instance } from "../index";
import { UserInfoType } from "@src/type/user/userType";

const requestUserInfo = async (): Promise<UserInfoType> => {
  try {
    const { data } = await instance.get("/api/user/profile");
    return data.response;
  } catch (error: any) {
    console.log(error);

    throw new Error(`requestUserInfo: ${error}`);
  }
};

const requestUpdateUserInfo = async (updateData: any): Promise<UserInfoType> => {
  try {
    const userInfo = updateData.hashtags
      ? { ...updateData, hashtags: updateData.hashtags.map((tag: { id: number }) => +tag.id) }
      : updateData;
    const { data } = await instance.patch("/api/user/profile", userInfo);
    return data.response;
  } catch (error: any) {
    throw new Error(`requestUpdateUserInfo: ${error}`);
  }
};

const requestCheckingNickname = async (nickname: string): Promise<boolean> => {
  try {
    const { data } = await instance.get(`/api/user/duplication?nickName=${nickname}`);
    return data.response;
  } catch (error: any) {
    throw new Error(`requestCheckingNickname: ${error}`);
  }
};

export { requestUserInfo, requestUpdateUserInfo, requestCheckingNickname };
