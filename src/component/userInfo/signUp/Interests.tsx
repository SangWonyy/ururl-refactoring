import {
  InfoWrapper,
  SubTitleText,
  ReadyTagWrapper,
  TagIcon,
  SignUpTagWrapper,
  SignUpTag,
  SubTitleTextWrapper,
  WarningIcon,
  WarningText,
  SubInfoWrapper,
  InterestWrapper,
} from "./signUp.style";
import { useCallback, useEffect, useState } from "react";
import { hashTagType } from "@src/type/tag/tagType";
import TagListStore from "@src/store/common/TagListStore";
import { observer } from "mobx-react";
import ProfileUserInfoStore from "@src/store/user/ProfileInfoStore";

const Interests = function Interests(props: { checkValidation: boolean }): JSX.Element {
  const { checkValidation } = props;
  const { tagList } = TagListStore;
  const { profileUserInfo, setProfileUserInfo } = ProfileUserInfoStore;
  const { hashtags } = profileUserInfo;
  const selectedTagList = hashtags.map((hashTag) => +hashTag.id);
  const [metaTagList, setMetaTagList] = useState<hashTagType[]>([]);
  const getMeta = useCallback(() => getMetaList(tagList), [tagList]);
  const tagClickHandler = useCallback(
    (selectedIndex: number, hashtags: hashTagType[], tag: hashTagType) => {
      if (selectedIndex >= 0) {
        const copyList = [...hashtags];
        copyList.splice(selectedIndex, 1);

        setProfileUserInfo({ ...profileUserInfo, hashtags: copyList });
      } else {
        setProfileUserInfo({ ...profileUserInfo, hashtags: [...hashtags, tag] });
      }
    },
    [profileUserInfo],
  );

  useEffect(() => {
    setMetaTagList(getMeta());
  }, [tagList]);

  return (
    <InfoWrapper>
      <SubTitleTextWrapper>
        <SubTitleText id={"hashtags"}>관심 분야</SubTitleText>
        <SubInfoWrapper>
          {checkValidation && profileUserInfo.hashtags.length === 0 ? (
            <InterestWrapper>
              <WarningIcon src={"./common/warningIcon.svg"} alt={"Image not found"} />
              <WarningText>요즘 어디에 관심이 많으세요?</WarningText>
            </InterestWrapper>
          ) : (
            <ReadyTagWrapper>
              <TagIcon src={"./signUp/tagIcon.svg"} alt={"Image not found"} />
              궁금해 하실만한 {metaTagList.length}가지 해시태그를 준비해봤어요!
            </ReadyTagWrapper>
          )}
        </SubInfoWrapper>
      </SubTitleTextWrapper>
      <SignUpTagWrapper>
        {metaTagList.map((tag, index) => {
          const selectedIndex = selectedTagList.findIndex((selectedTagId) => selectedTagId === +tag.id);
          return (
            <SignUpTag
              key={tag.id}
              isSelected={selectedIndex >= 0}
              onClick={() => {
                tagClickHandler(selectedIndex, hashtags, tag);
              }}
            >
              {tag.name}
            </SignUpTag>
          );
        })}
      </SignUpTagWrapper>
    </InfoWrapper>
  );
};

const getMetaList = (tagList: hashTagType[]) => {
  try {
    return [...tagList].filter((tag) => !tag.isCustom);
  } catch (e) {
    throw new Error(`getMetaList: ${e}`);
  }
};

export default observer(Interests);
