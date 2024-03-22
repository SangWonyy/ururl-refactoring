import { makeAutoObservable, observable } from "mobx";
import { HeaderTabType } from "@src/enum/appEnum";

class HeaderCleass {
  headerTabType = HeaderTabType.AllUrl;

  constructor() {
    makeAutoObservable(this);
  }

  setHeaderTabType = (headerTabType: HeaderTabType) => {
    this.headerTabType = headerTabType;
  };
}

const HeaderStore = new HeaderCleass();
export default HeaderStore;
