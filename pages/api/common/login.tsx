import { instance } from "../index";

export type KakaoResType = {
  status: number;
  token: string | null;
  message: string;
};

const kakaoLogin = async (token: string): Promise<KakaoResType> => {
  try {
    const { data } = await instance.post("/api/user/login", {
      kakao_token: token,
    });
    return data.response;
  } catch (e) {
    throw new Error(`kakaoLogin : ${e}`);
  }
};

export { kakaoLogin };
