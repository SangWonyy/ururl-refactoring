import { OrderType } from "@src/enum/appEnum";
import { ResponseUrlType } from "@src/type/mainBody/mainBodyType";
import { useInfiniteQuery } from "react-query";
import { requestMyUrl } from "@pages/api/myUrl/getMyUrl";
import { getJWTToken } from "@src/store/localStorage/localStorage";
import ContentsStore from "@src/store/url/contentStore";

const useMyUrlQuery = (page: number, isScroll: boolean, orderType: OrderType, selectedIdList: number[]) => {
  const { fetchNextPage, isFetching, isLoading, isError, hasNextPage, refetch } = useInfiniteQuery<
    ResponseUrlType,
    Error | void,
    ResponseUrlType
  >(
    ["useMyUrlQuery", orderType, ...selectedIdList],
    ({ pageParam }) => requestMyUrl({ orderType, selectedTags: selectedIdList }, pageParam),
    {
      enabled: !!getJWTToken(),
      getNextPageParam: (lastPage) => {
        const { pageInfo } = lastPage;
        const { hasNext, currentPage } = pageInfo;
        return hasNext ? currentPage + 1 : undefined;
      },
      refetchOnWindowFocus: false,
      onSuccess: (myContens) => {
        const { pages } = myContens;
        const { setContentBoxList, setPageInfo } = ContentsStore;
        setPageInfo(pages[0].pageInfo);
        setContentBoxList(
          pages
            .map((page) => {
              return page.myUrl;
            })
            .flat(),
        );
      },
    },
  );

  return {
    fetchNextPage,
    isFetching,
    isLoading,
    isError,
    hasNextPage,
    refetch,
  };
};
export default useMyUrlQuery;
