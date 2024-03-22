import { NextPage } from "next";
import { SearchInner, SearchWrapper } from "@src/component/common/search/search.style";
import Results from "@src/component/common/search/Results";

const Search: NextPage = () => {
  return (
    <SearchWrapper>
      <SearchInner>
        <Results />
      </SearchInner>
    </SearchWrapper>
  );
};

export default Search;
