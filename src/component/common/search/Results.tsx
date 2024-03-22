import ContentBox from "../contentBox/ContentBox";
import { useEffect, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ResultBoldText, ResultText, ResultWrapper, TextWrapper } from "./search.style";
import useGetSearchResultsQuery from "@src/queries/contentBox/useGetSearchResultsQuery";
import SearchStore from "@src/store/search/SearchStore";
import SkeletonLoad from "@src/component/common/loadding/SkeletonLoad";
import { observer } from "mobx-react";
import NoResults from "@src/component/common/search/NoResults";
import UrlStore from "@src/store/url/urlStore";
import { ContestWrapper } from "@src/component/main/main.style";
const Results = function Results(): JSX.Element {
  const { searchText } = SearchStore;

  const { data, fetchNextPage, isFetching, isLoading, isError, hasNextPage } =
    useGetSearchResultsQuery(searchText);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [listLength, setListLength] = useState(1);

  useEffect(() => {
    setListLength(
      data
        ? data.pages
            .map((page) => {
              return page.myUrl;
            })
            .flat().length
        : 0,
    );
  }, [data]);

  const totalNum = data ? data.pages[0].pageInfo.totalNum : 0;

  if (isError) {
    return <ContestWrapper>데이터를 가져오는데 실패하였습니다.</ContestWrapper>;
  }

  return (
    <>
      {listLength <= 0 && !isLoading && !isFetching ? (
        <NoResults searchText={searchText} />
      ) : (
        <>
          <TextWrapper>
            <ResultBoldText>&apos; {searchText} &apos;</ResultBoldText>
            <ResultText>과 관련된 총 {totalNum}개의 url을 찾았습니다.</ResultText>
          </TextWrapper>

          <InfiniteScroll
            dataLength={listLength} //This is important field to render the next data
            next={() => {
              hasNextPage && fetchNextPage();
            }}
            hasMore={hasNextPage ?? false}
            loader={!isFetching && <></>}
            // below props only if you need pull down functionality
            refreshFunction={() => {}}
            pullDownToRefresh
            pullDownToRefreshThreshold={50}
          >
            <ResultWrapper>
              {data?.pages
                .map((page) => {
                  return page.myUrl;
                })
                .flat()
                .map((url, index) => {
                  return (
                    <ContentBox
                      key={url.id}
                      contentBox={url}
                      selectedIndex={selectedIndex}
                      setSelectedIndex={setSelectedIndex}
                      boxIndex={index}
                    />
                  );
                })}
              {isLoading && isFetching && <SkeletonLoad />}
            </ResultWrapper>
          </InfiniteScroll>
        </>
      )}
    </>
  );
};

export default observer(Results);
