import {
  AuthorInfo,
  ContentInfoWrapper,
  DateWrapper,
  HoverMark,
  HoverWrapper,
  VerticalMoreIcon,
  IconWrapper,
} from "@src/component/common/contentBox/contentBox.style";
import { TAllUrlInfo } from "@src/type/mainBody/mainBodyType";
import { Dispatch, MouseEvent, SetStateAction, useCallback, useMemo, useState } from "react";
import ModalStore from "@src/store/common/modalStore";
import {
  useCancelSubscriptionMutate,
  useSubscriptionMutate,
} from "@src/queries/contentBox/useSubscriptionMutation";
import { getJWTToken } from "@src/store/localStorage/localStorage";
import { useRouter } from "next/router";
import { needLoginPopup } from "@src/util/openPopup";
import { Popup } from "semantic-ui-react";

const AllUrlContentInfo = (props: {
  allUrlInfo: TAllUrlInfo;
  setSelectedUrlId: Dispatch<SetStateAction<number>>;
  subscribed: boolean;
  bookmarkHandler: (pageId: number, prevSub: boolean) => void;
}) => {
  const router = useRouter();
  const { allUrlInfo, setSelectedUrlId, bookmarkHandler } = props;
  const { subscriptionCount, siteName, id, subscribed, tags } = allUrlInfo;
  const { mutate: cacelSubscription } = useCancelSubscriptionMutate(
    () => {
      bookmarkHandler(id, subscribed);
    },
    undefined,
    false,
  );
  const { mutate: subscription } = useSubscriptionMutate(() => {
    bookmarkHandler(id, subscribed);
  });
  const { setOpenModal } = ModalStore;

  const removeContentBox = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();

      if (subscribed) {
        setOpenModal({
          isOpen: true,
          text: "저장을 해제하시겠어요?",
          isTwoBtn: true,
          completeBtnText: "삭제",
          cancelBtnText: "유지",
          needInfoIcon: true,
          subtext: "저장을 해제하면 My URL에서 확인하실 수 없습니다",
          closeIcon: true,
          onSuccess: () => {
            cacelSubscription(id);
          },
        });
      }

      if (!subscribed) {
        getJWTToken() ? setSubscription() : needLoginPopup();
      }
    },
    [subscribed],
  );

  const setSubscription = () => {
    subscription({
      urlId: id,
      subscriptionInfo: {
        isPublic: true,
        hashtagIds: [...tags.map((tag) => tag.id)],
        sourceMedium: "WEB",
      },
    });
  };

  return (
    <ContentInfoWrapper>
      <DateWrapper>
        <AuthorInfo read={false}>{siteName}</AuthorInfo>
        <HoverWrapper>
          {subscribed ? (
            <Popup
              content="저장 해제하기"
              trigger={
                <IconWrapper right={20} onClick={(e) => removeContentBox(e)}>
                  <HoverMark
                    subscribed={subscribed}
                    src={`./mainBody/${subscribed ? "bookmark" : "nonBookmark"}.svg`}
                    alt={"Image not found"}
                  />
                </IconWrapper>
              }
              position={"bottom center"}
              style={{ borderRadius: 12, color: "white" }}
              inverted
            />
          ) : (
            <Popup
              content="MY URL에 저장하기"
              trigger={
                <IconWrapper right={20} onClick={(e) => removeContentBox(e)}>
                  <HoverMark
                    subscribed={subscribed}
                    src={`./mainBody/${subscribed ? "bookmark" : "nonBookmark"}.svg`}
                    alt={"Image not found"}
                  />
                </IconWrapper>
              }
              position={"bottom center"}
              style={{ borderRadius: 12, color: "white" }}
              inverted
            />
          )}
          <Popup
            content="더보기"
            trigger={
              <IconWrapper
                right={-5}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  setSelectedUrlId(id);
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

export default AllUrlContentInfo;
