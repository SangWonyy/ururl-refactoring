import { OrderType } from "@src/enum/appEnum";
import { getJWTToken } from "@src/store/localStorage/localStorage";
import ContentsStore from "@src/store/url/contentStore";
import { useInfiniteQuery } from "@tanstack/react-query";
import { requestMyUrl } from "@src/app/api/myUrl/getMyUrl";

const useMyUrlQuery = (
  page: number,
  isScroll: boolean,
  orderType: OrderType,
  selectedIdList: number[]
) => {
  const {
    fetchNextPage,
    isFetching,
    isLoading,
    isError,
    hasNextPage,
    refetch,
    data,
  } = useInfiniteQuery({
    queryKey: ["useMyUrlQuery", orderType, ...selectedIdList],
    queryFn: ({ pageParam }) =>
      requestMyUrl({ orderType, selectedTags: selectedIdList }, pageParam),
    enabled: !!getJWTToken(),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { pageInfo } = lastPage;
      const { hasNext, currentPage } = pageInfo;
      return hasNext ? currentPage + 1 : undefined;
    },
    refetchOnWindowFocus: false,
  });
  const { setContentBoxList, setPageInfo } = ContentsStore;
  if (data) {
    setPageInfo(data.pages[0].pageInfo);
    setContentBoxList(
      data.pages
        .map((page) => {
          return page.myUrl;
        })
        .flat()
    );
  }

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
