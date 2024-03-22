import { useCallback, useState } from "react";
import { observer } from "mobx-react";
import TagListStore from "@src/store/common/TagListStore";
import { AllUrlTag, TagListWrapper } from "../../common/tag/tag.style";
import { UrUrlColor } from "@styles/urUrlStyle";

const AllUrlTagList = (): JSX.Element => {
  const [all, setAll] = useState<boolean>(true);
  const { setAllUrlSelectedTagId, allUrlSelectedTagId, allUrlTagList } = TagListStore;

  const tagClickHandler = useCallback((tagId: number) => {
    if (tagId === -1) {
      setAll(!all);
      setAllUrlSelectedTagId(-1);
      return;
    }

    setAll(false);
    setAllUrlSelectedTagId(tagId);
  }, []);

  return (
    <TagListWrapper isArrowUP={false}>
      {allUrlTagList.map((tag) => {
        const { id, name, size } = tag;
        const isSelected = +allUrlSelectedTagId === +id;
        const is2022 = +id === -2022;
        return (
          <AllUrlTag
            is2022={is2022}
            key={id}
            isSelected={isSelected}
            onClick={() => {
              tagClickHandler(+id);
            }}
          >
            {name}
            {+id !== -1 && <div style={{ color: UrUrlColor.gray3, marginLeft: 5 }}>{size}</div>}
          </AllUrlTag>
        );
      })}
    </TagListWrapper>
  );
};
export default observer(AllUrlTagList);
