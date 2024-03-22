import { observer } from "mobx-react";
import { Toaster } from "react-hot-toast";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import TagListStore from "@src/store/common/TagListStore";
import OrderStore from "@src/store/main/body/OrderStore";
import ContentBox from "@src/component/common/contentBox/ContentBox";
import NoSavedUrl from "@src/component/common/noSavedUrl/NoSavedUrl";
import { ContentsCnt } from "./myUrlTabBody.style";
import useMyUrlQuery from "@src/queries/contentBox/useMyUrlQuery";
import { getJWTToken } from "@src/store/localStorage/localStorage";
import SkeletonLoad from "@src/component/common/loadding/SkeletonLoad";
import AddUrlBox from "@src/component/common/contentBox/AddUrlBox";
import { ContestWrapper } from "../../main.style";
import ContentsStore from "@src/store/url/contentStore";

const Contents = (): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [mount, setMount] = useState<boolean>(false);
  const { contentBoxList, pageInfo } = ContentsStore;
  const { sortTagList } = TagListStore;
  const { orderType } = OrderStore;

  const { fetchNextPage, isFetching, isLoading, isError, hasNextPage } = useMyUrlQuery(
    1,
    false,
    orderType,
    sortTagList,
  );

  const listLength = contentBoxList.length;

  const totalNum = pageInfo.totalNum;
  const isNoResult = !isLoading && listLength === 0 && !!getJWTToken();

  useEffect(() => {
    setMount(true);
  }, []);

  if (isError) {
    return <ContestWrapper>데이터를 가져오는데 실패하였습니다.</ContestWrapper>;
  }

  return (
    <>
      <Toaster position="bottom-center" />
      <ContentsCnt>해당 해시태그에 {totalNum}개의 URL이 있습니다.</ContentsCnt>
      {mount && (
        <InfiniteScroll
          dataLength={listLength}
          next={() => {
            hasNextPage && fetchNextPage();
          }}
          hasMore={hasNextPage ?? false}
          loader={!isFetching && <></>}
          refreshFunction={() => {}}
          pullDownToRefresh
          pullDownToRefreshThreshold={80}
        >
          <ContestWrapper>
            <AddUrlBox />
            {isNoResult && <NoSavedUrl />}
            {contentBoxList.map((content, index) => {
              return (
                <ContentBox
                  key={index}
                  contentBox={content}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                  boxIndex={index}
                />
              );
            })}
            {isLoading && isFetching && <SkeletonLoad />}
          </ContestWrapper>
        </InfiniteScroll>
      )}
    </>
  );
};

export default observer(Contents);
