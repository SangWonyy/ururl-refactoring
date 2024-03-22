import { makeAutoObservable } from "mobx";
import { MyContentType, PageInfoType, TAllUrlInfo } from "@src/type/mainBody/mainBodyType";

class AllUrlContentClass {
  allUrlContentBoxList = <TAllUrlInfo[]>[];

  firstLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  setContentBoxList = (contentBox: TAllUrlInfo[]) => {
    this.allUrlContentBoxList = contentBox;
  };

  addContentBox = (contentBox: TAllUrlInfo) => {
    this.allUrlContentBoxList = [contentBox, ...this.allUrlContentBoxList];
  };

  updateBookmark = (pageId: number, prevSub: boolean) => {
    const findIndexPage = this.allUrlContentBoxList.findIndex((page) => +page.id === pageId);
    if (findIndexPage < 0) {
      console.log("not found page");
      return;
    }
    const copy = [...this.allUrlContentBoxList];
    copy[findIndexPage].subscribed = !prevSub;
    this.allUrlContentBoxList = [...copy];
  };

  setFirstLoading = (loading: boolean) => {
    this.firstLoading = loading;
  };
}
const AllUrlContentsStore = new AllUrlContentClass();
export default AllUrlContentsStore;
