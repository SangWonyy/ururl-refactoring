import { Modal } from "react-responsive-modal";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import TagDeleteBody from "./TagDeleteBody";
import TagDeleteFooter from "./TagDeleteFooter";
import { hashTagType } from "@src/type/tag/tagType";

const TagDeleteModal = function CommentModal(props: {
  openTagDeleteModal: boolean;
  setOpenTagDeleteModal: Dispatch<SetStateAction<boolean>>;
  tagList: hashTagType[];
  metaTagList: hashTagType[];
  isOneMoreModal: boolean;
  selectedTag?: hashTagType;
}): JSX.Element {
  const { openTagDeleteModal, setOpenTagDeleteModal, selectedTag, tagList, metaTagList, isOneMoreModal } =
    props;

  return (
    <Modal
      center={true}
      open={openTagDeleteModal}
      onClose={() => {
        setOpenTagDeleteModal(false);
      }}
      closeOnOverlayClick={true}
      onOverlayClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
      }}
      showCloseIcon={false}
      styles={{ modalContainer: { padding: 50 }, modal: { padding: 30, maxWidth: 600, borderRadius: 6 } }}
    >
      <CloseWrapper>
        <CloseIcon
          src={"./common/closeIcon.svg"}
          onClick={() => {
            setOpenTagDeleteModal(false);
          }}
          alt={"Image not found"}
        />
      </CloseWrapper>
      <TagDeleteBody selectedTag={selectedTag} />
      <TagDeleteFooter
        setOpenTagDeleteModal={setOpenTagDeleteModal}
        selectedTag={selectedTag}
        tagList={tagList}
        metaTagList={metaTagList}
      />
    </Modal>
  );
};

const CloseWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CloseIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export default TagDeleteModal;
