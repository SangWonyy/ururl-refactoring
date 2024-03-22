import AllUrlContentsContainer from "@src/container/mainBody/allUrlTab/AllUrlContentsContainer";
import RecommendSliderContainer from "@src/container/mainBody/allUrlTab/RecommendSliderContainer";
import {
  MainBodyInner,
  MainBodyWrapper,
  MainRecommendInner,
  MainRecommendWrapper,
} from "@src/container/mainBody/mainBody.style";
import useGetAllUrlQuery from "@src/queries/allUrl/useGetAllUrlQuery";
import ReportModal from "@src/component/modal/reportModal/ReportModal";
import TagListStore from "@src/store/common/TagListStore";
import { observer } from "mobx-react";

const AllUrlTabContainer = (): JSX.Element => {
  const { allUrlSelectedTagId } = TagListStore;

  const { fetchNextPage, isLoading, isError, hasNextPage } = useGetAllUrlQuery(allUrlSelectedTagId);

  return (
    <>
      <MainRecommendWrapper>
        <MainRecommendInner>
          <RecommendSliderContainer />
        </MainRecommendInner>
      </MainRecommendWrapper>
      <MainBodyWrapper>
        <MainBodyInner>
          <AllUrlContentsContainer
            isLoading={isLoading}
            fetchNextPage={fetchNextPage}
            isError={isError}
            hasNextPage={hasNextPage}
          />
        </MainBodyInner>
        <ReportModal />
      </MainBodyWrapper>
    </>
  );
};

export default observer(AllUrlTabContainer);
