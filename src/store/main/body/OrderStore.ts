import { observable } from "mobx";
import { OrderType } from "@src/enum/appEnum";

const OrderStore = observable({
  orderType: OrderType.LatestSave,

  setOrderType(orderType: OrderType) {
    this.orderType = orderType;
  },
});

export default OrderStore;
