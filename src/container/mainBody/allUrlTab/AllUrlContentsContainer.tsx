import { TagListWrapper } from "@src/container/mainBody/mainBody.style";
import AllUrlContents from "@src/component/main/allUrlTab/allUrl/AllUrlContens";
import { FetchNextPageOptions, InfiniteQueryObserverResult } from "react-query";
import { TAllUrlTabData } from "@src/type/mainBody/mainBodyType";
import AllUrlTagList from "@src/component/main/allUrlTab/allUrl/AllUrlTagList";
import DaramLoading from "@src/component/common/loadding/DaramLoading";

const AllUrlContentsContainer = (props: {
  isLoading: boolean;
  isError: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<TAllUrlTabData, Error>>;
  hasNextPage?: boolean;
}): JSX.Element => {
  return (
    <>
      <TagListWrapper>
        <AllUrlTagList />
      </TagListWrapper>
      <AllUrlContents allUrlMeta={props} />
    </>
  );
};

export default AllUrlContentsContainer;
