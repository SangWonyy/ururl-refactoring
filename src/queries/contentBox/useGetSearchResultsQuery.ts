import { useInfiniteQuery } from "react-query";
import { requestSearch } from "@pages/api/search/searchContents";
import { getJWTToken } from "@src/store/localStorage/localStorage";

const useGetSearchResultsQuery = (search: string) => {
  return useInfiniteQuery(
    ["useGetSearchResultsQuery", search],
    ({ pageParam }) => requestSearch(search, pageParam),
    {
      enabled: !!getJWTToken(),
      getNextPageParam: (lastPage) => {
        const { pageInfo } = lastPage;
        const { hasNext, currentPage } = pageInfo;
        return hasNext ? currentPage + 1 : undefined;
      },
      refetchOnWindowFocus: false,
    },
  );
};

export default useGetSearchResultsQuery;
