import { RecommendUrlWrapper } from "@src/component/main/main.style";
import SiderTitle from "@src/component/main/allUrlTab/common/SiderTitle";
import { SliderWrapper } from "@src/container/mainBody/mainBody.style";
import { getJWTToken } from "@src/store/localStorage/localStorage";
import UserInfoStore from "@src/store/user/UserInfoStore";
import { observer } from "mobx-react";
import RecommendContentBox from "@src/component/main/allUrlTab/common/RecommendContentBox";
import SkeletonLoad from "@src/component/common/loadding/SkeletonLoad";
import RecommendUrlContentsStore from "@src/store/url/recommendUrlContentsStore";
import AllUrlContentsStore from "@src/store/url/allUrlContentsStore";
import InitContentBox from "@src/component/main/allUrlTab/common/InitContentBox";

const RemindUrls = (props: { handleOnItemClick: (e: any) => void }): JSX.Element => {
  const { handleOnItemClick } = props;
  const isLoggedIn = getJWTToken();
  const { userInfo } = UserInfoStore;
  const { unreadSubscriptions } = RecommendUrlContentsStore;
  const { firstLoading } = AllUrlContentsStore;
  const { nickName } = userInfo;
  const title = isLoggedIn ? `😪 ${nickName}님을 기다리는 URL` : "😪 유알엘님을 기다리는 URL";
  const subTitle = isLoggedIn ? "저장된 URL들이 울고 있어요" : "유알엘님, 저장된 URL들이 울고 있어요";

  return (
    <SliderWrapper>
      <SiderTitle title={title} subtitle={subTitle} nickname={nickName} />
      <RecommendUrlWrapper>
        {getJWTToken() ? (
          <RecommendContentBox recommendUrl={unreadSubscriptions} type="unread" />
        ) : (
          <InitContentBox />
        )}
      </RecommendUrlWrapper>
    </SliderWrapper>
  );
};

export default observer(RemindUrls);
