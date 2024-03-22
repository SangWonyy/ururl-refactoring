import { makeAutoObservable, observable } from "mobx";
import { hashTagType, TAllUrlTag } from "@src/type/tag/tagType";

class TagListClass {
  tagList = <hashTagType[]>[];
  allUrlTagList = <TAllUrlTag[]>[];
  selectedTagIdList = <number[]>[];
  sortTagList = <number[]>[];
  allUrlSelectedTagId = <number>-1;

  constructor() {
    makeAutoObservable(this);
  }

  setTagList = (hashTag: hashTagType[]) => {
    this.tagList = hashTag;
  };

  setSelectedTagIdList = (tagList: number[]) => {
    this.selectedTagIdList = tagList;
  };

  setSortTagList = (tagList: number[]) => {
    this.sortTagList = tagList;
  };

  setAllUrlSelectedTagId = (tagId: number) => {
    this.allUrlSelectedTagId = tagId;
  };

  setAllUrlTagList = (tag: TAllUrlTag[]) => {
    this.allUrlTagList = tag;
  };
}

const TagListStore = new TagListClass();
export default TagListStore;
