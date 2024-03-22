import { makeAutoObservable } from "mobx";
import { MyContentType, PageInfoType } from "@src/type/mainBody/mainBodyType";

class ContentClass {
  contentBoxList = <MyContentType[]>[];
  pageInfo = <PageInfoType>{ hasNext: false, hasPrev: false, currentPage: 0, totalPages: 0, totalNum: 0 };

  constructor() {
    makeAutoObservable(this);
  }

  setContentBoxList = (contentBox: MyContentType[]) => {
    this.contentBoxList = contentBox;
  };

  setPageInfo = (pageInfo: PageInfoType) => {
    this.pageInfo = pageInfo;
  };

  addContentBox = (contentBox: MyContentType) => {
    const findBoxIndex = this.contentBoxList.findIndex((box) => +box.id === +contentBox.id);
    if (findBoxIndex >= 0) {
      const copy = [...this.contentBoxList];
      copy[findBoxIndex] = contentBox;
      this.contentBoxList = [...copy];
      return;
    }

    this.contentBoxList = [contentBox, ...this.contentBoxList];
  };

  updateContentBoxList = (contentBox: MyContentType) => {
    const { id } = contentBox;
    const findIndex = this.findContentIndex(id);
    if (findIndex < 0) {
      alert("새로고침해주세요!");
      return;
    }

    const copyList = [...this.contentBoxList];
    copyList[findIndex] = contentBox;
    this.contentBoxList = [...copyList];
  };

  deleteContentBoxList = (deletedUrlId: number) => {
    const findIndex = this.findContentIndex(deletedUrlId);
    if (findIndex < 0) {
      alert("다시한번 시도해주세요.");
      return;
    }

    const copyList = [...this.contentBoxList];
    copyList.splice(findIndex, 1);
    this.contentBoxList = [...copyList];
  };

  findContentIndex = (contentId: number) => {
    console.log("contentId", contentId);
    return this.contentBoxList.findIndex((content) => +content.id === +contentId);
  };
}
const ContentsStore = new ContentClass();
export default ContentsStore;
