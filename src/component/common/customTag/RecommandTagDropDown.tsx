import { TagDataListWrapper, TagOption } from "@src/component/common/customTag/customHashTag.style";
import { hashTagType } from "@src/type/tag/tagType";
import { Dispatch, RefObject, SetStateAction } from "react";

const RecommandTagDropDown = (props: {
  tagKeyWord: string;
  setTagKeyWord: Dispatch<SetStateAction<string>>;
  inputRef: RefObject<HTMLInputElement>;
  setActiveTagDrop: Dispatch<SetStateAction<boolean>>;
  recommandList?: hashTagType[];
}): JSX.Element => {
  const { recommandList, tagKeyWord, setTagKeyWord, inputRef, setActiveTagDrop } = props;
  return (
    <>
      {tagKeyWord !== "" && recommandList && recommandList.length > 0 && (
        <TagDataListWrapper optionCnt={recommandList.length}>
          {recommandList.map((tag) => {
            return (
              <TagOption
                key={tag.id}
                onClick={() => {
                  setTagKeyWord(tag.name);
                  if (!inputRef.current) return;
                  inputRef.current.value = tag.name;
                  setActiveTagDrop(false);
                }}
              >
                {tag.name}
              </TagOption>
            );
          })}
        </TagDataListWrapper>
      )}
    </>
  );
};

export default RecommandTagDropDown;
