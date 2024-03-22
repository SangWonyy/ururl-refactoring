import { ActiveBoxWrapper } from "./banner.style";
import { ActiveContentsWrapper, ActiveCnt, ActiveInfoWrapper, Icon, ActiveText } from "./banner.style";
import { observer } from "mobx-react";
import ChallengeStore from "@src/store/main/body/ChallengeStore";
import SkeletonActiveContentsLoad from "@src/component/common/loadding/SkeletonActiveContentsLoad";

const itemList = [
  {
    id: 1,
    cnt: 25,
    title: "읽은 URL",
    icon: "./mainBody/readUrlIcon.svg",
    size: 20,
  },
  {
    id: 2,
    cnt: 100,
    title: "저장한 URL",
    icon: "./mainBody/bookmark.svg",
    size: 20,
  },
];

const ActiveContents = (props: { isLoading: boolean }): JSX.Element => {
  const { isLoading } = props;
  const { challengeData } = ChallengeStore;
  const { totalReadCount, totalStoreCount } = challengeData;

  return (
    <ActiveBoxWrapper>
      <ActiveContentsWrapper>
        {itemList.map((item) => {
          const { id, title, icon, size } = item;
          const count = id === 1 ? totalReadCount : totalStoreCount;
          return (
            <ActiveInfoWrapper key={id}>
              <ActiveCnt isMargin={id === 1}>
                <Icon src={icon} size={size} isMargin={id === 1} alt={"Image not found"} />
                {isLoading && count < 0 ? <SkeletonActiveContentsLoad /> : count}
              </ActiveCnt>
              <ActiveText>{title}</ActiveText>
            </ActiveInfoWrapper>
          );
        })}
      </ActiveContentsWrapper>
    </ActiveBoxWrapper>
  );
};

export default observer(ActiveContents);
