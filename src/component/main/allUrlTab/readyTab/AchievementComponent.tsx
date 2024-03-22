import {
  CommentWrapper,
  Congratuation,
  Character,
  AttainWrapper,
  ThanksComment,
  CurrentComent,
  UrlCntWrapper,
  CurrentCnt,
  ReadMarkStroke,
  TargetCnt,
  NexComment,
  NextComment2,
} from "./ready.style";
import { memo } from "react";

const AchivementComponent = () => {
  return (
    <>
      <CommentWrapper>
        <Congratuation src={"./common/congratuation.svg"} alt={"Image not found"} />
        <Character src={"./common/character/AttainmentDaram.svg"} alt={"Image not found"} />
        <AttainWrapper>
          <ThanksComment>여러분 덕분에 드디어...!!</ThanksComment>
          <CurrentComent>✌️달성✌️</CurrentComent>
        </AttainWrapper>

        <UrlCntWrapper>
          <CurrentCnt>
            <ReadMarkStroke src={"./common/bookmark.svg"} alt={"Image not found"} />
            2022
          </CurrentCnt>
          <TargetCnt>/ 2022</TargetCnt>
        </UrlCntWrapper>
      </CommentWrapper>
      <NexComment>열심히 준비해서 쨔잔하고 나타날게요!</NexComment>
      <NextComment2>조금만 더 기다려주시겠어요?</NextComment2>
    </>
  );
};

export default memo(AchivementComponent);
