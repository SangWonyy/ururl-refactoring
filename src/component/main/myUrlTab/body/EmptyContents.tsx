import styled from "styled-components";

const EmptyContents = function (): JSX.Element {
  return <EmptyWrapper />;
};

const EmptyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpeachBubbleWrapper = styled.div``;
export default EmptyContents;
