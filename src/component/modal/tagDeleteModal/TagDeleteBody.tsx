import {
  BodyWrapper,
  TitleWrapper,
  SubWrapper,
  SubComment,
  TagWrapper,
  WarningIcon,
  DeleteTitle,
} from "./tagDelete.style";
import { hashTagType } from "@src/type/tag/tagType";
import Warnning from "@public/common/withDrawalWarnningIcon.svg";

const TagDeleteBody = function (props: { selectedTag: hashTagType | undefined }): JSX.Element {
  const { selectedTag } = props;
  return (
    <BodyWrapper>
      <TitleWrapper>
        <TagWrapper>{selectedTag?.name}</TagWrapper>
        <DeleteTitle>태그를 삭제하시겠어요?</DeleteTitle>
      </TitleWrapper>
      <SubWrapper>
        <WarningIcon src="./common/withDrawalWarnningIcon.svg" />

        <SubComment>
          태그를 삭제하시면, 기존에 저장한 URL 은 보관되지만, <br /> 미분류로 해시태그가 변경될 수 있습니다.
        </SubComment>
      </SubWrapper>
    </BodyWrapper>
  );
};

export default TagDeleteBody;
