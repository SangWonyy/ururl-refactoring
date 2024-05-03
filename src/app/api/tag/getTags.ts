import { instance } from "../index";
import { TagResponseType } from "@src/type/mainBody/mainBodyType";

const getTags = async (): Promise<TagResponseType> => {
  const { data } = await instance.get("/api/hashtags");
  return data.response;
};

export { getTags };
