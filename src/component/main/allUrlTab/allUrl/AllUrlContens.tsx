import { observer } from "mobx-react";
import { Toaster } from "react-hot-toast";
import InfiniteScroll from "react-infinite-scroll-component";
import { FetchNextPageOptions, InfiniteQueryObserverResult } from "react-query";
import { TAllUrlTabData } from "@src/type/mainBody/mainBodyType";
import AllUrlContentsStore from "@src/store/url/allUrlContentsStore";
import { ContestWrapper } from "../../main.style";
import NoSavedUrl from "@src/component/common/noSavedUrl/NoSavedUrl";
import AllUrlContentBox from "@src/component/common/contentBox/allurl/AllUrlContentBox";
import SkeletonLoad from "@src/component/common/loadding/SkeletonLoad";
import { useState } from "react";
import useUrlBookmarkControll from "@src/hooks/useUrlBookmarkControll";

const AllUrlContents = (props: {
  allUrlMeta: {
    isLoading: boolean;
    isError: boolean;
    fetchNextPage: (
      options?: FetchNextPageOptions,
    ) => Promise<InfiniteQueryObserverResult<TAllUrlTabData, Error>>;
    hasNextPage?: boolean;
  };
}): JSX.Element => {
  const { allUrlMeta } = props;
  const { isError, hasNextPage, fetchNextPage, isLoading } = allUrlMeta;
  const { allUrlContentBoxList } = AllUrlContentsStore;
  const { updateTheOtherUrlListBookmark } = useUrlBookmarkControll();

  const [selectedUrlId, setSelectedUrlId] = useState<number>(-1);

  if (isError) {
    return <ContestWrapper>데이터를 가져오는데 실패하였습니다.</ContestWrapper>;
  }

  return (
    <>
      <Toaster position="bottom-center" />
      <InfiniteScroll
        dataLength={allUrlContentBoxList.length}
        next={() => {
          hasNextPage && fetchNextPage();
        }}
        hasMore={hasNextPage ?? false}
        loader={!isLoading && <></>}
        refreshFunction={() => {}}
        pullDownToRefresh
        pullDownToRefreshThreshold={80}
      >
        <ContestWrapper>
          {!isLoading && allUrlContentBoxList.length === 0 && <NoSavedUrl />}
          {allUrlContentBoxList.map((content, index) => {
            const { id, subscribed } = content;
            const isSelected = +selectedUrlId === +id;

            return (
              <AllUrlContentBox
                key={`${id}_${index}`}
                allUrlInfo={content}
                setSelectedUrlId={setSelectedUrlId}
                isSelected={isSelected}
                subscribed={subscribed}
                bookmarkHandler={updateTheOtherUrlListBookmark}
              />
            );
          })}
          {isLoading && <SkeletonLoad />}
        </ContestWrapper>
      </InfiniteScroll>
    </>
  );
};
export default observer(AllUrlContents);
