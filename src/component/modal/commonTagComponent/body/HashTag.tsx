import {
  Wrapper,
  Label,
  LabelWrapper,
  CntWrapper,
  SelectedCnt,
  TotalCnt,
  LabelInfoWrapper,
} from "./urlModalBody.style";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { hashTagType } from "@src/type/tag/tagType";
import TagList from "./TagList";
import { observer } from "mobx-react";
import TagListStore from "@src/store/common/TagListStore";
import { WarningIcon, WarningText } from "@src/component/userInfo/signUp/signUp.style";
import useGetTagListQuery from "@src/queries/tag/useGetTagListQuery";

const HashTag = (): JSX.Element => {
  const customTagList: hashTagType[] = [];
  const metaTagList: hashTagType[] = [];
  useGetTagListQuery();
  const { tagList, selectedTagIdList } = TagListStore;
  const [isMaxLength, setIsMaxLength] = useState<boolean>(false);

  const deleteDuplicateCallback = useCallback(
    (
      selectedIdList: number[],
      tagId: number,
      copyList: number[],
      setIsMaxLength: Dispatch<SetStateAction<boolean>>,
    ) => {
      deleteDuplicate(selectedIdList, tagId, copyList, setIsMaxLength);
    },
    [],
  );

  const addTagCallback = useCallback(
    (copyList: number[], tagId: number, setIsMaxLength: Dispatch<SetStateAction<boolean>>) => {
      addTag(copyList, tagId, setIsMaxLength);
    },
    [],
  );

  tagList.map((tag) => {
    tag.isCustom ? customTagList.push(tag) : metaTagList.push(tag);
  });

  return (
    <Wrapper>
      <LabelWrapper>
        <LabelInfoWrapper>
          <Label>해시태그를 선택해주세요</Label>
          {isMaxLength && (
            <>
              <WarningIcon src={"./common/warningIcon.svg"} alt={"Image not found"} />
              <WarningText>이미 4개의 해시태그를 선택하셨어요!</WarningText>
            </>
          )}
        </LabelInfoWrapper>
        <CntWrapper>
          <SelectedCnt>{selectedTagIdList.length} &nbsp;</SelectedCnt>
          <TotalCnt>/ 4</TotalCnt>
        </CntWrapper>
      </LabelWrapper>

      <TagList
        key={"meta"}
        customTagList={customTagList}
        metaTagList={metaTagList}
        deleteDuplicate={deleteDuplicateCallback}
        addTag={addTagCallback}
        setIsMaxLength={setIsMaxLength}
        type={"meta"}
      />

      <TagList
        key={"custom"}
        customTagList={customTagList}
        metaTagList={metaTagList}
        deleteDuplicate={deleteDuplicateCallback}
        addTag={addTagCallback}
        setIsMaxLength={setIsMaxLength}
        type={"custom"}
      />
    </Wrapper>
  );
};

const deleteDuplicate = (
  selectedIdList: number[],
  tagId: number,
  copyList: number[],
  setIsMaxLength: Dispatch<SetStateAction<boolean>>,
) => {
  try {
    const selectedIdIndex = selectedIdList.findIndex((id) => +id === +tagId);
    copyList.splice(selectedIdIndex, 1);
    setIsMaxLength(false);
  } catch (e) {
    throw new Error(`deleteDuplicate: ${e}`);
  }
};

const addTag = (copyList: number[], tagId: number, setIsMaxLength: Dispatch<SetStateAction<boolean>>) => {
  try {
    const isMaxLength = copyList.length === 4;

    if (isMaxLength) {
      // copyList.shift();
      setIsMaxLength(true);
      return;
    }
    copyList.push(tagId);
  } catch (e) {
    throw new Error(`addTag: ${e}`);
  }
};

export default observer(HashTag);
