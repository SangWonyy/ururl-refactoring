import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import {
  BoxWrapper,
  BoxImage,
  ContentWrapper,
  TagsWrapper,
  Tag,
  TitleWrapper,
  Title,
  ImageWrapper,
  EditIconWrapper,
  EditIcon,
  InnerWrapper,
  FadeOutWrapper,
  OnlyMeIcon,
} from "./contentBox.style";
import BoxPopOver from "./boxPopOver/BoxPopOver";
import { Popup } from "semantic-ui-react";
import ChallengeStore from "@src/store/main/body/ChallengeStore";
import EditContentBoxModal from "@src/component/modal/editTagModal/EditContentBoxModal";
import { MyContentType, ReadUrlType } from "@src/type/mainBody/mainBodyType";
import ContentInfo from "@src/component/common/contentBox/ContentInfo";
import { observer } from "mobx-react";
import { UseMutationResult } from "react-query";
import useReadUrlMutation from "@src/queries/contentBox/useReadUrlMutation";
import urlStore from "@src/store/url/urlStore";
import TagListStore from "@src/store/common/TagListStore";

const ContentBox = function ContentBox(props: {
  contentBox: MyContentType;
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  boxIndex: number;
  handleOnItemClick?: (e: any) => void;
}): JSX.Element {
  const { contentBox, selectedIndex, setSelectedIndex, boxIndex, handleOnItemClick } = props;
  const { thumbnail, url, isRead, title, tags, isPublic, id } = contentBox;
  const [read, setRead] = useState<boolean>(isRead);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const isSelected = boxIndex === selectedIndex;
  const urlTags = contentBox.tags.map((tag) => tag.id);

  const readMutation = useReadUrlMutation();

  const challengeStoreCallBack = useCallback(setChallengeStore, []);

  const goUrlCallback = useCallback(() => {
    goUrl(read, setRead, +id, url, readMutation);
  }, [read, id, url, readMutation]);

  useEffect(() => {
    setRead(isRead);
  }, [isRead]);

  return (
    <BoxWrapper
      onClickCapture={(e) => {
        handleOnItemClick && handleOnItemClick(e);
      }}
      onClick={() => {
        goUrlCallback();
      }}
    >
      <InnerWrapper>
        <ImageWrapper>
          <BoxImage
            referrerPolicy="no-referrer"
            src={thumbnail ?? "./common/noImage.svg"}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = "./common/noImage.svg";
            }}
          />
        </ImageWrapper>
        <ContentWrapper>
          <TagsWrapper>
            {tags.map((tag, index) => {
              return <Tag key={tag.id}>{tag.name}</Tag>;
            })}

            <Popup
              content="정보 수정하기"
              trigger={
                <EditIconWrapper
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    urlStore.setTitle(title);
                    urlStore.setUrl(url);
                    urlStore.setIsPublic(isPublic);
                    TagListStore.setSelectedTagIdList(urlTags);
                    setOpenEditModal(true);
                  }}
                >
                  <EditIcon src={"./common/editIcon.svg"} alt={"Image not found"} />
                </EditIconWrapper>
              }
              position={"bottom center"}
              style={{ borderRadius: 12, color: "white" }}
              inverted
            />
          </TagsWrapper>
          <TitleWrapper>
            <Title read={read}>{title ?? "Untitled URL"}</Title>
          </TitleWrapper>
          <ContentInfo
            read={read}
            contentBox={contentBox}
            setChallengeStore={challengeStoreCallBack}
            setSelectedIndex={setSelectedIndex}
            boxIndex={boxIndex}
            urlTags={urlTags}
          />
        </ContentWrapper>
        {isSelected && (
          <>
            <FadeOutWrapper isDeep />
            <BoxPopOver
              boxIndex={boxIndex}
              setSelectedIndex={setSelectedIndex}
              setRead={setRead}
              read={read}
              urlId={contentBox.id}
              url={url}
            />
          </>
        )}
        {openEditModal && (
          <EditContentBoxModal
            openEditModal={openEditModal}
            setOpenEditModal={setOpenEditModal}
            urlId={contentBox.id}
          />
        )}
      </InnerWrapper>
      {!isPublic && <OnlyMeIcon src="./common/OnlyMe.svg" alt="no image" />}
    </BoxWrapper>
  );
};

const setChallengeStore = () => {
  try {
    const { challengeData, setChallengeData } = ChallengeStore;
    const currentTotalStoreCnt = challengeData.totalStoreCount;
    const currentTotalReadCount = challengeData.totalReadCount;
    const currenTweekReadCount = challengeData.weekReadCount;
    const currenWeekStoreCount = challengeData.weekStoreCount;

    const totalStoreCount = currentTotalStoreCnt > 0 ? currentTotalStoreCnt - 1 : currentTotalStoreCnt;
    const totalReadCount = currentTotalReadCount > 0 ? currentTotalReadCount - 1 : currentTotalReadCount;
    const weekReadCount = currenTweekReadCount > 0 ? currenTweekReadCount - 1 : currenTweekReadCount;
    const weekStoreCount = currenWeekStoreCount > 0 ? currenWeekStoreCount - 1 : currenWeekStoreCount;

    setChallengeData({
      ...challengeData,
      totalStoreCount,
      totalReadCount,
      weekReadCount,
      weekStoreCount,
    });
  } catch (e) {
    throw new Error(`setChallengeStore: ${e}`);
  }
};

const goUrl = (
  read: boolean,
  setRead: Dispatch<SetStateAction<boolean>>,
  urlId: number,
  url: string,
  readMutation: UseMutationResult<{ variance: number }, Error, ReadUrlType, unknown>,
) => {
  try {
    const { challengeData, setChallengeData } = ChallengeStore;
    if (!read) {
      readMutation.mutate({ urlId, cancel: false });
      setChallengeData({
        ...challengeData,
        weekReadCount: challengeData.weekReadCount + 1,
        totalReadCount: challengeData.weekReadCount + 1,
      });
    }

    setRead(true);
    typeof window !== "undefined" && window.open(url, "_blank");
  } catch (e) {
    throw new Error(`goUrl : ${e}`);
  }
};

export default observer(ContentBox);
