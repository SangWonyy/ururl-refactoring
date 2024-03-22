import { TAllUrlInfo } from "@src/type/mainBody/mainBodyType";
import AllUrlContentBox from "@src/component/common/contentBox/allurl/AllUrlContentBox";
import { useCallback, useState } from "react";
import RecommendUrlContentsStore from "@src/store/url/recommendUrlContentsStore";
import useUrlBookmarkControll from "@src/hooks/useUrlBookmarkControll";

const RecommendContentBox = (props: {
  type: "new" | "love" | "unread";
  recommendUrl: TAllUrlInfo[];
}): JSX.Element => {
  const { recommendUrl, type } = props;
  const [selectedUrlId, setSelectedUrlId] = useState<number>(-1);
  const { updateTheOtherUrlListBookmark } = useUrlBookmarkControll();

  return (
    <>
      {recommendUrl.map((content, index) => {
        const { id, subscribed } = content;
        const isSelected = +id === +selectedUrlId;
        return (
          <AllUrlContentBox
            key={id}
            allUrlInfo={content}
            setSelectedUrlId={setSelectedUrlId}
            isSelected={isSelected}
            subscribed={subscribed}
            bookmarkHandler={updateTheOtherUrlListBookmark}
          />
        );
      })}
    </>
  );
};

export default RecommendContentBox;
