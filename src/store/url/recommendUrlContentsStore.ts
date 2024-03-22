import { makeAutoObservable } from "mobx";
import { TAllUrlInfo } from "@src/type/mainBody/mainBodyType";

class RecommendUrlContentClass {
  unreadSubscriptions = <TAllUrlInfo[]>[];
  newRecommendUrl = <TAllUrlInfo[]>[];
  lovedUrl = <TAllUrlInfo[]>[];

  constructor() {
    makeAutoObservable(this);
  }

  setUnreadSubscriptions = (contentBox: TAllUrlInfo[]) => {
    this.unreadSubscriptions = contentBox;
  };

  setNewRecommendUrl = (contentBox: TAllUrlInfo[]) => {
    this.newRecommendUrl = contentBox;
  };
  setLovedUrl = (contentBox: TAllUrlInfo[]) => {
    this.lovedUrl = contentBox;
  };

  updateUnreadBookmark = (pageId: number, prevSub: boolean, type: "unread" | "new" | "love") => {
    const copyList =
      type === "unread"
        ? [...this.unreadSubscriptions]
        : type === "new"
        ? [...this.newRecommendUrl]
        : [...this.lovedUrl];
    const findIndexPage = copyList.findIndex((page) => +page.id === pageId);
    if (findIndexPage < 0) {
      console.log("not found page");
      return;
    }

    copyList[findIndexPage].subscribed = !prevSub;
    if (type === "unread") {
      this.unreadSubscriptions = [...copyList];
      return;
    }
    if (type === "new") {
      this.newRecommendUrl = [...copyList];
      return;
    }
    if (type === "love") {
      this.lovedUrl = [...copyList];
    }
  };
}
const RecommendUrlContentsStore = new RecommendUrlContentClass();
export default RecommendUrlContentsStore;
