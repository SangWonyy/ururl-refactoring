import { instance } from "../index";
import { AddCustomTagType } from "@src/type/mainBody/mainBodyType";

export type tagParam = {
  name: string;
};

const addCustomTag = async (tag: tagParam): Promise<AddCustomTagType> => {
  const { data } = await instance.post("/api/user/hashtag", tag);
  return data.response;
};

export { addCustomTag };
