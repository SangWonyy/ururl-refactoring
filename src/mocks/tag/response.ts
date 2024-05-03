import {
  AddCustomTagType,
  TagResponseType,
} from "@src/type/mainBody/mainBodyType";
import { hashTagType } from "@src/type/tag/tagType";

const tag1: hashTagType = {
  id: 1,
  name: "tag",
  isCustom: false,
};
const tag2: hashTagType = {
  id: 2,
  name: "tag2",
  isCustom: true,
};
export const hashtagResponse: TagResponseType = {
  hashtags: [tag1, tag2],
  selected: [1],
  status: 0,
};

export const addCustomTagResponse: AddCustomTagType = {
  id: 3,
  status: 0,
  name: "added tag",
};

export const recommendTagResponse: hashTagType[] = [tag1, tag2];
