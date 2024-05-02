import { instance } from "../index";
import { ReadUrlType } from "@src/type/mainBody/mainBodyType";

const requestReadUrl = async (readUrl: ReadUrlType): Promise<{ variance: number }> => {
  try {
    const { urlId, cancel } = readUrl;
    const body = {
      urlId,
      cancel,
    };

    const { data } = await instance.post(`/api/urlpost/read`, body);
    return data.response;
  } catch (error: any) {
    throw new Error(`requestReadUrl: ${error}`);
  }
};

export { requestReadUrl };
