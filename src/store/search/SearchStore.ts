import { observable } from "mobx";
import { MyContentType } from "@src/type/mainBody/mainBodyType";

const SearchStore = observable({
  searchResultPageInfo: {},

  searchResultUrlInfo: <MyContentType[]>[],

  searchText: "",

  setSearchResultPageInfo(hasNext: boolean, hasPrev: boolean, totalNum: number, totalPages: number) {
    this.searchResultPageInfo = {
      hasNext,
      hasPrev,
      totalNum,
      totalPages,
    };
  },

  setSearchResultUrlInfo(urls: MyContentType[]) {
    this.searchResultUrlInfo = urls;
  },

  setSearchText(searchText: string) {
    this.searchText = searchText;
  },
});

export default SearchStore;
