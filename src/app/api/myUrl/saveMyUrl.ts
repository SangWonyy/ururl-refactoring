import { instance } from "../index";
import { MyContentType, SaveUrlInfoType } from "@src/type/mainBody/mainBodyType";

const requestSaveMyUrl = async (saveUrlInfo: SaveUrlInfoType): Promise<MyContentType> => {
  try {
    const { data } = await instance.post(`api/urlpost/url`, saveUrlInfo);
    return data.response;
  } catch (error: any) {
    throw new Error(`requestSaveMyUrl: ${error}`);
  }
};

export { requestSaveMyUrl };
