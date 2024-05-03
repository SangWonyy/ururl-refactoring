import { TAllUrlInfo } from "@src/type/mainBody/mainBodyType";
import AllUrlContentsStore from "@src/store/url/allUrlContentsStore";
import TagListStore from "@src/store/common/TagListStore";
import RecommendUrlContentsStore from "@src/store/url/recommendUrlContentsStore";
import { useInfiniteQuery } from "@tanstack/react-query";
import getAllUrl from "@src/app/api/allUrl/getAllUrl";

const useGetAllUrlQuery = (allUrlSelectedTagId: number) => {
  const { setContentBoxList, setFirstLoading } = AllUrlContentsStore;
  const { setAllUrlTagList } = TagListStore;
  const { setLovedUrl, setNewRecommendUrl, setUnreadSubscriptions } =
    RecommendUrlContentsStore;

  const {
    fetchNextPage,
    isFetching,
    isLoading,
    isError,
    hasNextPage,
    refetch,
    data,
  } = useInfiniteQuery({
    queryKey: ["useGetAllUrlQuery", allUrlSelectedTagId],
    queryFn: ({ pageParam }) => getAllUrl(pageParam, allUrlSelectedTagId),
    getNextPageParam: (lastPage) => {
      const { allUrls } = lastPage;
      const { hasNext, page } = allUrls;
      return hasNext ? page + 1 : undefined;
    },
    initialPageParam: 0,
    refetchOnWindowFocus: false,
  });
  if (data) {
    const { pages } = data;
    const { recentUrls, unreadSubscriptions, lovedUrls, hashtags } = pages[0];
    const setedSubUnreadSubscription = (
      unreadSubscriptions as TAllUrlInfo[]
    ).map((sub) => {
      sub.subscribed = true;
      return sub;
    });

    setUnreadSubscriptions(setedSubUnreadSubscription);
    setNewRecommendUrl(recentUrls);
    setLovedUrl(lovedUrls);
    setAllUrlTagList(hashtags);

    setContentBoxList(
      pages
        .map((page) => {
          return page.allUrls.urls;
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
export default useGetAllUrlQuery;
