import { RecommendUrlWrapper } from "@src/component/main/main.style";
import SiderTitle from "@src/component/main/allUrlTab/common/SiderTitle";
import { SliderWrapper } from "@src/container/mainBody/mainBody.style";
import UserInfoStore from "@src/store/user/UserInfoStore";
import { observer } from "mobx-react";
import SkeletonLoad from "@src/component/common/loadding/SkeletonLoad";
import RecommendContentBox from "@src/component/main/allUrlTab/common/RecommendContentBox";
import RecommendUrlContentsStore from "@src/store/url/recommendUrlContentsStore";
import AllUrlContentsStore from "@src/store/url/allUrlContentsStore";

const RecommendUrls = (props: { type: "new" | "love"; handleOnItemClick: (e: any) => void }): JSX.Element => {
  const { type, handleOnItemClick } = props;
  const { userInfo } = UserInfoStore;
  const { lovedUrl, newRecommendUrl } = RecommendUrlContentsStore;
  const { firstLoading } = AllUrlContentsStore;
  const { nickName } = userInfo;
  const title = type === "new" ? "🍞 따끈따끈한 URL" : "❤️ 사랑받는 URL";
  const subTitle = type === "new" ? "어제 저장되었던 URL들도 보고 가세요!" : "최근 인기가 많았던 URL이에요.";
  const recommendUrl = type === "new" ? newRecommendUrl : lovedUrl;

  return (
    <SliderWrapper>
      <SiderTitle title={title} nickname={nickName} subtitle={subTitle} />
      <RecommendUrlWrapper>
        {firstLoading ? (
          <SkeletonLoad cnt={3} />
        ) : (
          <RecommendContentBox recommendUrl={recommendUrl} type={type} />
        )}
      </RecommendUrlWrapper>
    </SliderWrapper>
  );
};

export default observer(RecommendUrls);
