import styled from "styled-components";

const NoResults = function NoResults(props: { searchText: string | string[] | undefined }): JSX.Element {
  const searchText = props.searchText;

  return (
    <NoResultWrapper>
      <IconWrapper>
        <CautionIcon src={"./common/cautionIcon.svg"} />
      </IconWrapper>
      <NoResultBoldText>&apos; {searchText} &apos; </NoResultBoldText>
      <NoResultText>과/와 관련된 URL 검색결과가 없어요</NoResultText>
    </NoResultWrapper>
  );
};

const NoResultWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  color: #333333;
  font-size: 20px;
`;
const IconWrapper = styled.div`
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CautionIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 11.5px;
`;

const NoResultText = styled.div``;

const NoResultBoldText = styled(NoResultText)`
  font-weight: bold;
  font-size: 23px;
`;
export default NoResults;
