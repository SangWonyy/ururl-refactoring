import { observable } from "mobx";
import { UrUrlBothMargins } from "@styles/urUrlStyle";
import { BothMarginsType } from "@src/type/mainBody/mainBodyType";
import { BothMarginsEum } from "@src/enum/appEnum";

const BothMargins = observable({
  bothMargins: <BothMarginsType>{
    type: BothMarginsEum.none,
    value: UrUrlBothMargins.none,
  },

  setBothMargins(margin: BothMarginsType) {
    this.bothMargins = margin;
  },
});

export default BothMargins;
