import { useCallback, useState } from "react";
import { TagListWrapper, Tag, LockIcon, CheckIcon } from "./tag.style";
import { observer } from "mobx-react";
import TagListStore from "@src/store/common/TagListStore";
import { GtagCategory } from "@src/enum/appEnum";
import { ClickGtagEvent } from "../../../../../lib/gtag";

const UNCLASSIFIED = 0;
const TagList = function TagList(props: { isArrowUP: boolean }): JSX.Element {
  const { isArrowUP } = props;
  const [all, setAll] = useState<boolean>(true);
  const { tagList, sortTagList } = TagListStore;
  const tagSetCallback = useCallback(
    (tagId: number) => {
      setIdList(sortTagList, tagId);
    },
    [sortTagList],
  );

  return (
    <TagListWrapper isArrowUP={isArrowUP}>
      <Tag
        isSelected={all}
        onClick={() => {
          setAll(!all);
          ClickGtagEvent({
            category: GtagCategory.MyUrlTab,
            label: `전체 태그`,
          });
          TagListStore.setSortTagList([]);
        }}
      >
        전체
      </Tag>
      {tagList &&
        tagList.map((tag) => {
          const { id, name } = tag;
          const isSelected = sortTagList.includes(id);
          return (
            <Tag
              key={id}
              isSelected={isSelected}
              onClick={() => {
                if (all) setAll(false);
                !tag.isCustom &&
                  ClickGtagEvent({
                    category: GtagCategory.MyUrlTab,
                    label: `${name}`,
                  });
                tagSetCallback(+id);
              }}
            >
              {isSelected && <CheckIcon src="common/checkIconThin.svg" />}
              {name}
            </Tag>
          );
        })}
      <Tag
        isSelected={sortTagList.includes(UNCLASSIFIED)}
        onClick={() => {
          if (all) setAll(false);

          tagSetCallback(UNCLASSIFIED);
        }}
      >
        {sortTagList.includes(UNCLASSIFIED) && <CheckIcon src="common/checkIconThin.svg" />}
        미분류
      </Tag>
    </TagListWrapper>
  );
};

const setIdList = (sortTagList: number[], selectedNumber: number) => {
  try {
    let copyList = [];
    if (sortTagList.includes(selectedNumber)) {
      copyList = [...sortTagList];
      const selectedIdIndex = sortTagList.findIndex((id) => +id === +selectedNumber);
      copyList.splice(selectedIdIndex, 1);
      TagListStore.setSortTagList(copyList);
    } else {
      copyList = [...sortTagList, selectedNumber];
      TagListStore.setSortTagList(copyList);
    }
  } catch (e) {
    throw new Error(`setIdList : ${e}`);
  }
};

export default observer(TagList);
