import { instance } from "../index";

const requestWithDrawal = async (withDrawalReason: string): Promise<boolean> => {
  try {
    const config = {
      params: {
        reason: withDrawalReason,
      },
    };

    const { data } = await instance.delete("/api/user/withdraw", config);
    return data.success;
  } catch (error: any) {
    throw new Error(`requestUpdateUserInfo: ${error}`);
  }
};

export { requestWithDrawal };
