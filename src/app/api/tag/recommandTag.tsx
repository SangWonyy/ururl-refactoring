import { instance } from "../index";
import { hashTagType } from "@src/type/tag/tagType";

const requestRecommandTag = async (
  keyword?: string
): Promise<hashTagType[]> => {
  try {
    const config = {
      params: {
        keyword,
      },
    };

    const { data } = await instance.get("/api/hashtags", config);
    return data.response.hashtags;
  } catch (error) {
    throw new Error(`requestRecommandTag: ${error}`);
  }
};

export { requestRecommandTag };
