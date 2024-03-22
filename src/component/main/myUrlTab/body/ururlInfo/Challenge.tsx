import {BoxWrapper, OverProgress} from "./banner.style";
import {
  ChallengeInner,
  ThisWeekendWrapper,
  CommentsWrapper,
  GaugeWrapper,
  ProgressWrapper,
  Progress,
  CurrentCnt,
  GoalCnt,
} from "./banner.style";
import { observer } from "mobx-react";
import ChallengeStore from "@src/store/main/body/ChallengeStore";
import { useMemo } from "react";
import SkeletonChallengeLoad from "@src/component/common/loadding/SkeletonChallengeLoad";

const commentList = [
  {
    id: 0,
    callComment: "님 이번주 많이 바쁘셨나요?",
    infoComment: "잠시 시간내서 한 개 읽어보시는 거 어때요?😊",
  },
  {
    id: 1,
    callComment: "님 멋져요!!",
    infoComment: "이번주 목표 달성까지 남은 URL은 ",
  },
  {
    id: 2,
    callComment: "님 대박대박!!!",
    infoComment: "이번주 목표 달성에 성공했어요!!!🥳😁",
  },
  {
    id: 3,
    callComment: "님 굉장해요!",
    infoComment: "이번 주 목표보다 ",
  },
];

const Challenge = (props: { isLoading: boolean }): JSX.Element => {
  const { isLoading } = props;
  const { challengeData } = ChallengeStore;
  const { nickname, goal, weekReadCount } = challengeData;
  const isAchieveGoal = weekReadCount >= goal;
  const isOverGoal = weekReadCount > goal;
  const percentage = (weekReadCount * 100) / goal;
  const maxPercentage = 100;
  const goalPercentage = goal === 0 ? 0 : isAchieveGoal ? maxPercentage : percentage;
  const goalResult = useMemo<number>(() => getReadCommentResult(goal, weekReadCount), [goal, weekReadCount]);

  return (
    <BoxWrapper flex={3}>
      <ChallengeInner>
        {isLoading && nickname === "no nickname" ? (
          <SkeletonChallengeLoad />
        ) : (
          <>
            <ThisWeekendWrapper>⏰ &nbsp; 이번주 목표</ThisWeekendWrapper>
            <CommentsWrapper>
              {nickname}
              {commentList[goalResult].callComment}
            </CommentsWrapper>
            <CommentsWrapper>
              {commentList[goalResult].infoComment}
              {goalResult === 1 && (goal - weekReadCount > 0 ? goal - weekReadCount : 0) + "개👏👏👏"}
              {goalResult === 3 && weekReadCount - goal + "개 더 읽으셨어요🎉"}
            </CommentsWrapper>
            <GaugeWrapper>
              <ProgressWrapper>

                <GoalCnt>{goal} 개</GoalCnt>
                <Progress percent={goalPercentage}>
                  <CurrentCnt>{weekReadCount} 개</CurrentCnt>
                </Progress>
                {
                    isOverGoal && (
                        <OverProgress/>
                    )
                }

              </ProgressWrapper>
            </GaugeWrapper>
          </>
        )}
      </ChallengeInner>
    </BoxWrapper>
  );
};

const getReadCommentResult = (goal: number, weekReadCount: number): number => {
  try {
    if (weekReadCount <= 0) {
      return 0;
    } else if (weekReadCount > 0 && goal > weekReadCount) {
      return 1;
    } else if (goal === weekReadCount) {
      return 2;
    } else {
      return 3;
    }
  } catch (e) {
    throw new Error(`getReadCommentResult : ${e}`);
  }
};

export default observer(Challenge);
