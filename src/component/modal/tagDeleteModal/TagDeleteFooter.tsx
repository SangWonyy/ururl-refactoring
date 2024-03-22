import { BtnWrapper, TagButton } from "./tagDelete.style";
import { Dispatch, SetStateAction, useCallback } from "react";
import { hashTagType } from "@src/type/tag/tagType";
import TagListStore from "../../../store/common/TagListStore";
import useDeleteTagMutation from "@src/queries/tag/useDeleteTagMutation";
import { QueryClient, UseMutationResult, useQueryClient } from "react-query";

const TagDeleteFooter = function (props: {
  setOpenTagDeleteModal: Dispatch<SetStateAction<boolean>>;
  selectedTag: hashTagType | undefined;
  tagList: hashTagType[];
  metaTagList: hashTagType[];
}): JSX.Element {
  const { setOpenTagDeleteModal, selectedTag, tagList, metaTagList } = props;
  const deleteMutation = useDeleteTagMutation();
  const deleteCallback = useCallback(() => {
    deleteTag(tagList, metaTagList, deleteMutation, setOpenTagDeleteModal, selectedTag);
  }, [tagList, metaTagList, deleteMutation, setOpenTagDeleteModal, selectedTag]);

  return (
    <BtnWrapper>
      <TagButton
        isDelete={false}
        onClick={() => {
          setOpenTagDeleteModal(false);
        }}
      >
        유지
      </TagButton>
      <TagButton isDelete={true} onClick={deleteCallback}>
        삭제
      </TagButton>
    </BtnWrapper>
  );
};

const deleteTag = (
  tagList: hashTagType[],
  metaTagList: hashTagType[],
  deleteMutation: UseMutationResult<boolean, Error, number, unknown>,
  setOpenTagDeleteModal: Dispatch<SetStateAction<boolean>>,
  selectedTag?: hashTagType,
) => {
  try {
    if (selectedTag) {
      const { setTagList, setSelectedTagIdList, selectedTagIdList } = TagListStore;
      setTagList([...metaTagList, ...tagList.filter((tag) => +tag.id !== +selectedTag.id)]);
      const findIndexSelectedTag = selectedTagIdList.findIndex((tagId) => tagId === +selectedTag.id);
      if (findIndexSelectedTag >= 0) {
        const copy = [...selectedTagIdList];
        copy.splice(findIndexSelectedTag, 1);
        setSelectedTagIdList([...copy]);
      }
      deleteMutation.mutate(+selectedTag.id);
      setOpenTagDeleteModal(false);
    } else {
      console.error("selectedTag가 없어요");
    }
  } catch (e) {
    throw new Error(`deleteTag : ${e}`);
  }
};

export default TagDeleteFooter;
