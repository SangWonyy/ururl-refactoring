import { makeAutoObservable } from "mobx";

class UrlClass {
  url = "";
  title = <string | undefined>undefined;
  isPublic = true;

  constructor() {
    makeAutoObservable(this);
  }

  setUrl = (url: string) => {
    this.url = url;
  };

  setTitle = (title?: string) => {
    this.title = title;
  };

  setIsPublic = (isPublic: boolean) => {
    this.isPublic = isPublic;
  };
}

const UrlStore = new UrlClass();
export default UrlStore;
