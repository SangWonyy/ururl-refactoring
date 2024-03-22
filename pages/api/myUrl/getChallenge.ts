import { instance } from "../index";
import { ChallengeResponseType } from "@src/type/mainBody/mainBodyType";

const requestChallenge = async (): Promise<ChallengeResponseType> => {
  try {
    const { data } = await instance.get(`/api/user/challenge`);
    return data.response;
  } catch (error: any) {
    throw new Error(`requestChallenge: ${error}`);
  }
};

export { requestChallenge };
