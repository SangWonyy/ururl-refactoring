import { instance } from "../index";
import {
  MyContentType,
  SubscriptionUrl,
} from "@src/type/mainBody/mainBodyType";

const requestSubscription = async (props: {
  urlId: number;
  subscriptionInfo: SubscriptionUrl;
}) => {
  const { urlId, subscriptionInfo } = props;
  const { data } = await instance.post(
    `api/urlpost/subscription/${urlId}`,
    subscriptionInfo
  );
  return data;
};

const requestCancelSubscription = async (urlId: number): Promise<number> => {
  await instance.delete(`api/urlpost/subscription/${urlId}`);
  return urlId;
};

const requestModifySubscription = async (props: {
  urlId: number;
  subscriptionInfo: SubscriptionUrl;
}): Promise<MyContentType> => {
  const { urlId, subscriptionInfo } = props;
  const { data } = await instance.put(
    `api/urlpost/subscription/${urlId}`,
    subscriptionInfo
  );
  return data.response;
};

export {
  requestSubscription,
  requestCancelSubscription,
  requestModifySubscription,
};
