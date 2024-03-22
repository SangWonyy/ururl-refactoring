import {
  CommentWrapper,
  Character,
  AttainWrapper,
  CurrentComent,
  UrlCntWrapper,
  CurrentCnt,
  ReadMarkStroke,
  TargetCnt,
  NotComplete,
} from "./ready.style";

const ReadyComponent = (props: { totalUrlCnt: number }) => {
  const { totalUrlCnt } = props;

  return (
    <>
      <CommentWrapper>
        <Character src={"./common/character/AttainmentDaram.svg"} alt={"Image not found"} />
        <AttainWrapper>
          <CurrentComent>지금까지 URL이 이만큼 저장되었어요!</CurrentComent>
        </AttainWrapper>

        <UrlCntWrapper>
          <CurrentCnt>
            <ReadMarkStroke src={"./common/bookmark.svg"} alt={"Image not found"} />
            {totalUrlCnt}
          </CurrentCnt>
          <TargetCnt>/ 2022</TargetCnt>
        </UrlCntWrapper>
      </CommentWrapper>
      <NotComplete>2022개가 모이면 다른 사람들의 URL 모음을 볼 수 있어요!</NotComplete>
    </>
  );
};

export default ReadyComponent;
