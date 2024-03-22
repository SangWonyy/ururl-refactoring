import { SearchBarInput, SearchWrapper, SearchIcon } from "../header.style";
import { NextRouter, useRouter } from "next/router";
import { RefObject, useCallback, useRef } from "react";
import SearchStore from "@src/store/search/SearchStore";
import { ClickGtagEvent } from "../../../../../lib/gtag";
import { GtagCategory } from "@src/enum/appEnum";

const SearchBar = function SearchBar(): JSX.Element {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const keyPressCallback = useCallback(
    (event) => {
      handleKeyPress(event, router, searchRef);
    },
    [searchRef],
  );

  return (
    <SearchWrapper>
      <SearchBarInput
        ref={searchRef}
        placeholder={"키워드, 해시태그를 검색해보세요"}
        type={"text"}
        onKeyPress={(event) => keyPressCallback(event)}
      />
      <SearchIcon
        src={"./header/searchIcon.svg"}
        onClick={() => {
          ClickGtagEvent({
            category: GtagCategory.MyUrlTab,
            label: "검색창 클릭",
          });
          const searchText = searchRef.current?.value;
          searchText !== undefined && search(searchText, router, searchRef);
        }}
        alt={"Image not found"}
      />
    </SearchWrapper>
  );
};

const handleKeyPress = (event: any, router: NextRouter, searchRef: RefObject<HTMLInputElement>) => {
  if (event.key !== "Enter" || !searchRef.current) return;
  const searchText = event.target.value;
  search(searchText, router, searchRef);
};

const search = (searchText: string, router: NextRouter, searchRef: RefObject<HTMLInputElement>) => {
  try {
    const currentPath = router.pathname;
    searchRef.current!.value = "";
    SearchStore.setSearchText(searchText);

    !currentPath.includes("search") && router.push("search");
  } catch (e) {
    throw new Error(`search : ${e}`);
  }
};

export default SearchBar;
