import { CustomTag, CustomTagWrapper, DeleteIcon, IconWrapper, LockIcon } from "./customHashTag.style";
import { useEffect, useMemo, useState } from "react";
import { hashTagType } from "@src/type/tag/tagType";
import TagListStore from "@src/store/common/TagListStore";
import TagDeleteModal from "@src/component/modal/tagDeleteModal/TagDeleteModal";
import { observer } from "mobx-react";

const CustomTagList = function (): JSX.Element {
  const { tagList } = TagListStore;
  const [openTagDeleteModal, setOpenTagDeleteModal] = useState<boolean>(false);
  const [selectedTag, setSelectedTag] = useState<hashTagType>();
  const metaTagList = tagList.filter((tag) => !tag.isCustom);
  const customTag = tagList.filter((tag) => tag.isCustom);

  useEffect(() => {
    console.log("tagListtagList", tagList);
  }, [tagList]);

  return (
    <CustomTagWrapper>
      {getCustomTag(tagList).map((tag, index) => {
        return (
          <CustomTag key={tag.id} isSelected={true}>
            {tag.name}
            <IconWrapper>
              <DeleteIcon
                src={"./common/closeIcon.svg"}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();

                  setSelectedTag(tag);
                  setOpenTagDeleteModal(true);
                }}
                alt={"Image not found"}
              />
            </IconWrapper>
          </CustomTag>
        );
      })}
      {openTagDeleteModal && (
        <TagDeleteModal
          openTagDeleteModal={openTagDeleteModal}
          setOpenTagDeleteModal={setOpenTagDeleteModal}
          tagList={customTag}
          metaTagList={metaTagList}
          isOneMoreModal={false}
          selectedTag={selectedTag}
        />
      )}
    </CustomTagWrapper>
  );
};

const getCustomTag = (tagList: hashTagType[]): hashTagType[] => {
  try {
    return [...tagList].filter((tag) => tag.isCustom);
  } catch (e) {
    throw new Error(`getCustomTag : ${e}`);
  }
};

export default observer(CustomTagList);
