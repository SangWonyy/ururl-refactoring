import {
  AuthorInfo,
  AuthorInfoWrapper,
  ContentInfoWrapper,
  Date,
  DateInfo,
  DateWrapper,
  HoverMark,
  HoverWrapper,
  VerticalMoreIcon,
  IconWrapper,
} from "@src/component/common/contentBox/contentBox.style";
import { MyContentType } from "@src/type/mainBody/mainBodyType";
import { Dispatch, MouseEvent, SetStateAction, useCallback } from "react";
import { useCancelSubscriptionMutate } from "@src/queries/contentBox/useSubscriptionMutation";
import ModalStore from "@src/store/common/modalStore";
import { Popup } from "semantic-ui-react";

const ContentInfo = (props: {
  read: boolean;
  contentBox: MyContentType;
  setChallengeStore: () => void;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  boxIndex: number;
  urlTags: number[];
}) => {
  const { read, contentBox, setChallengeStore, setSelectedIndex, boxIndex, urlTags } = props;
  const { createOn, siteName } = contentBox;
  const { mutate: cacelSubscription } = useCancelSubscriptionMutate(undefined, setChallengeStore, true);

  const removeContentBox = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();

      ModalStore.setOpenModal({
        isOpen: true,
        text: "저장을 해제하시겠어요?",
        isTwoBtn: true,
        completeBtnText: "삭제",
        cancelBtnText: "유지",
        needInfoIcon: true,
        subtext: "저장을 해제하면 My URL에서 확인하실 수 없습니다",
        closeIcon: true,
        onSuccess: () => {
          cacelSubscription(contentBox.id);
        },
      });
    },
    [urlTags],
  );

  return (
    <ContentInfoWrapper>
      <AuthorInfoWrapper>
        <AuthorInfo read={read}>{siteName}</AuthorInfo>
      </AuthorInfoWrapper>
      <DateWrapper>
        <DateInfo>
          <Date>{createOn}</Date>
        </DateInfo>
        <HoverWrapper>
          <Popup
            content="저장 해제하기"
            trigger={
              <IconWrapper right={20} onClick={(e) => removeContentBox(e)}>
                <HoverMark src="./mainBody/bookmark.svg" alt={"Image not found"} subscribed />
              </IconWrapper>
            }
            position={"bottom center"}
            style={{ borderRadius: 12, color: "white" }}
            inverted
          />

          <Popup
            content="더보기"
            trigger={
              <IconWrapper
                right={-5}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  setSelectedIndex(boxIndex);
                }}
              >
                <VerticalMoreIcon src={"./mainBody/verticalMoreIcon.svg"} alt={"Image not found"} />
              </IconWrapper>
            }
            position={"bottom center"}
            style={{ borderRadius: 12, color: "white" }}
            inverted
          />
        </HoverWrapper>
      </DateWrapper>
    </ContentInfoWrapper>
  );
};

export default ContentInfo;
