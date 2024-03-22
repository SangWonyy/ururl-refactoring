import { CharacterIcon, NoSvaedUrlWrapper, ResultText, BubbleWrapper } from "./noSaveUrl.style";

const NoSavedUrl = function (): JSX.Element {
  return (
    <NoSvaedUrlWrapper>
      <BubbleWrapper>
        <CharacterIcon src={"./common/notFoundCharacter.svg"} alt={"Image not found"} />
        <ResultText>아직 저장된 URL이 없어요</ResultText>
        <ResultText>All URL에서 보고싶은 URL을 찾아보세요!</ResultText>
      </BubbleWrapper>
    </NoSvaedUrlWrapper>
  );
};

export default NoSavedUrl;
