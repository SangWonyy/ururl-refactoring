import { instance } from "../index";
import { UserInfoType } from "@src/type/user/userType";

const requestSignUp = async (signUpInfo: UserInfoType): Promise<{ token: string | null }> => {
  try {
    const userInfo = signUpInfo.hashtags
      ? { ...signUpInfo, hashtags: signUpInfo.hashtags.map((tag) => +tag.id) }
      : signUpInfo;
    const { data } = await instance.post("/api/user/signup", userInfo);
    return data.response;
  } catch (error: any) {
    throw new Error(`requestSignUp: ${error}`);
  }
};

export { requestSignUp };
