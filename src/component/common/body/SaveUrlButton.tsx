import styled from "styled-components";
import { useState, MouseEvent } from "react";
import SaveUrlModal from "@src/component/modal/saveUrlModal/SaveUrlModal";
import { getJWTToken } from "@src/store/localStorage/localStorage";
import { useRouter } from "next/router";
import urlStore from "@src/store/url/urlStore";
import TagListStore from "@src/store/common/TagListStore";
import { needLoginPopup } from "@src/util/openPopup";

const SaveUrlButton = function SaveUrlButton(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const loggingIn = getJWTToken();
  const router = useRouter();

  const saveUrlClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { setTitle, setUrl, setIsPublic } = urlStore;

    setTitle(undefined);
    setUrl("");
    setIsPublic(true);
    TagListStore.setSelectedTagIdList([]);

    loggingIn ? setIsOpen(true) : needLoginPopup();
  };

  return (
    <BackgroundWrapper onClick={(e) => saveUrlClickHandler(e)}>
      <IconWrapper>
        <MarkIcon src={"./mainBody/bookmark.svg"} alt={"Image not found"} />
      </IconWrapper>
      <InnerText>URL을 저장해 보세요!</InnerText>
      {isOpen && <SaveUrlModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </BackgroundWrapper>
  );
};

const InnerText = styled.div`
  overflow: hidden;
  white-space: nowrap;
  display: none;
  width: 170px;
  height: 100%;
  font-family: PretendardM, sans-serif;
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MarkIcon = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const BackgroundWrapper = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: 133px;
  right: 42px;
  background-color: white;
  border-radius: 100px;
  display: flex;
  width: 66px;
  height: 66px;
  box-shadow: 3px 3px 13px rgb(0 0 0 / 6%), 4px 4px 28px rgb(143 143 143 / 9%);
  color: rgba(0, 0, 0, 0);
  transition: width 0.5s, color 1s;
  z-index: 10;

  &:hover {
    width: 200px;
    color: rgb(0, 0, 0);
  }

  &:hover ${InnerText} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &:hover ${IconWrapper} {
    width: 30%;
  }
`;

export default SaveUrlButton;
