import { getJWTToken } from "@src/store/localStorage/localStorage";
import { useInfiniteQuery } from "@tanstack/react-query";
import { requestSearch } from "@src/app/api/search/searchContents";

const useGetSearchResultsQuery = (search: string) => {
  return useInfiniteQuery({
    queryKey: ["useGetSearchResultsQuery", search],
    queryFn: ({ pageParam }) => requestSearch(search, pageParam),
    initialPageParam: 0,
    enabled: !!getJWTToken(),
    getNextPageParam: (lastPage) => {
      const { pageInfo } = lastPage;
      const { hasNext, currentPage } = pageInfo;
      return hasNext ? currentPage + 1 : undefined;
    },
    refetchOnWindowFocus: false,
  });
};

export default useGetSearchResultsQuery;
