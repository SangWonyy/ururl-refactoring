import AllUrlContentInfo from "@src/component/common/contentBox/allurl/AllUrlContentInfo";
import {
  BoxImage,
  BoxWrapper,
  ContentWrapper,
  FadeOutWrapper,
  ImageWrapper,
  InnerWrapper,
  Tag,
  TagsWrapper,
  Title,
  TitleWrapper,
} from "../contentBox.style";
import AllUrlBoxPopOver from "./AllUrlBoxPopOver";
import { Dispatch, memo, SetStateAction, useCallback } from "react";
import { TAllUrlInfo } from "@src/type/mainBody/mainBodyType";

const AllUrlContentBox = (props: {
  allUrlInfo: TAllUrlInfo;
  setSelectedUrlId: Dispatch<SetStateAction<number>>;
  isSelected: boolean;
  subscribed: boolean;
  bookmarkHandler: (pageId: number, prevSub: boolean) => void;
}): JSX.Element => {
  const { setSelectedUrlId, isSelected, allUrlInfo, subscribed, bookmarkHandler } = props;
  const { tags, thumbnail, title, id, url } = allUrlInfo;
  const clickHandler = useCallback(
    (urlId: number) => {
      goUrl(subscribed, urlId, url);
    },
    [subscribed, url],
  );

  return (
    <BoxWrapper
      onClick={() => {
        clickHandler(id);
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
          </TagsWrapper>
          <TitleWrapper>
            <Title read={false}>{title ?? "Untitled URL"}</Title>
          </TitleWrapper>
          <AllUrlContentInfo
            allUrlInfo={allUrlInfo}
            setSelectedUrlId={setSelectedUrlId}
            subscribed={subscribed}
            bookmarkHandler={bookmarkHandler}
          />
        </ContentWrapper>
        {isSelected && (
          <>
            <FadeOutWrapper isDeep />
            <AllUrlBoxPopOver url={url} urlId={id} setSelectedUrlId={setSelectedUrlId} />
          </>
        )}
      </InnerWrapper>
    </BoxWrapper>
  );
};

const goUrl = (subscribed: boolean, urlId: number, url: string) => {
  try {
    typeof window !== "undefined" && window.open(url, "_blank");
  } catch (e) {
    throw new Error(`goUrl : ${e}`);
  }
};

export default memo(AllUrlContentBox);
