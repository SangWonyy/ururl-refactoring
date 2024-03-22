import { HashTagText, HashTagView, TagsWrapper } from "./urlModalBody.style";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { hashTagType } from "@src/type/tag/tagType";
import {
  CustomTag,
  DeleteIcon,
  IconWrapper,
  TagLockIcon,
  TagNameText,
} from "../../../common/customTag/customHashTag.style";
import { observer } from "mobx-react";
import TagDeleteModal from "../../tagDeleteModal/TagDeleteModal";
import TagListStore from "@src/store/common/TagListStore";

const TagList = (props: {
  customTagList: hashTagType[];
  metaTagList: hashTagType[];
  deleteDuplicate: (
    selectedIdList: number[],
    tagId: number,
    copyList: number[],
    setIsMaxLength: Dispatch<SetStateAction<boolean>>,
  ) => void;
  addTag: (copyList: number[], tagId: number, setIsMaxLength: Dispatch<SetStateAction<boolean>>) => void;
  setIsMaxLength: Dispatch<SetStateAction<boolean>>;
  type: string;
}) => {
  const { customTagList, metaTagList, deleteDuplicate, addTag, type, setIsMaxLength } = props;
  const { selectedTagIdList } = TagListStore;
  const [openTagDeleteModal, setOpenTagDeleteModal] = useState<boolean>(false);
  const [selectedTag, setSelectedTag] = useState<hashTagType>();
  const isMetaTag = type === "meta";
  const tagList = isMetaTag ? metaTagList : customTagList;

  const tagControllCallback = useCallback(
    (tagId: number) => {
      tagControll(tagId, deleteDuplicate, addTag, setIsMaxLength);
    },
    [deleteDuplicate, addTag, setIsMaxLength],
  );

  return (
    <TagsWrapper isMetaTag={isMetaTag}>
      {tagList.map((tag, index) => {
        const isSelected = selectedTagIdList.includes(tag.id);

        return (
          <div key={tag.id}>
            {isMetaTag ? (
              <HashTagView
                isSelected={isSelected}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();

                  tagControllCallback(+tag.id);
                }}
              >
                <HashTagText>{tag.name}</HashTagText>
              </HashTagView>
            ) : (
              <CustomTag
                isSelected={isSelected}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();

                  tagControllCallback(+tag.id);
                }}
              >
                <TagNameText>{tag.name}</TagNameText>
                <IconWrapper
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();

                    setSelectedTag(tag);
                    setOpenTagDeleteModal(true);
                  }}
                >
                  <DeleteIcon src={"./common/closeIcon.svg"} alt={"Image not found"} />
                </IconWrapper>
              </CustomTag>
            )}
          </div>
        );
      })}
      {openTagDeleteModal && (
        <TagDeleteModal
          openTagDeleteModal={openTagDeleteModal}
          setOpenTagDeleteModal={setOpenTagDeleteModal}
          tagList={tagList}
          metaTagList={metaTagList}
          isOneMoreModal={true}
          selectedTag={selectedTag}
        />
      )}
    </TagsWrapper>
  );
};

const tagControll = (
  tagId: number,
  deleteDuplicate: (
    selectedIdList: number[],
    tagId: number,
    copyList: number[],
    setIsMaxLength: Dispatch<SetStateAction<boolean>>,
  ) => void,
  addTag: (copyList: number[], tagId: number, setIsMaxLength: Dispatch<SetStateAction<boolean>>) => void,
  setIsMaxLength: Dispatch<SetStateAction<boolean>>,
) => {
  try {
    const { selectedTagIdList } = TagListStore;
    const copyList = [...selectedTagIdList];
    const isDuplicate = selectedTagIdList.includes(tagId);

    isDuplicate
      ? deleteDuplicate(selectedTagIdList, tagId, copyList, setIsMaxLength)
      : addTag(copyList, tagId, setIsMaxLength);

    TagListStore.setSelectedTagIdList(copyList);
  } catch (e) {
    throw new Error(`tagControll : ${e}`);
  }
};

export default observer(TagList);
