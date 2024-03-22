import AllUrlContentsStore from "@src/store/url/allUrlContentsStore";
import RecommendUrlContentsStore from "@src/store/url/recommendUrlContentsStore";
import { useCallback } from "react";

const useUrlBookmarkControll = () => {
  const { updateBookmark } = AllUrlContentsStore;
  const { updateUnreadBookmark } = RecommendUrlContentsStore;
  const updateTheOtherUrlListBookmark = useCallback((urlId: number, prevSub: boolean) => {
    updateBookmark(urlId, prevSub);
    updateUnreadBookmark(urlId, prevSub, "unread");
    updateUnreadBookmark(urlId, prevSub, "new");
    updateUnreadBookmark(urlId, prevSub, "love");
  }, []);

  return {
    updateTheOtherUrlListBookmark,
  };
};

export default useUrlBookmarkControll;
