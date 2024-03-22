import styled, { keyframes } from "styled-components";
import { memo } from "react";

const DaramLoading = (): JSX.Element => {
  return <DaramLoadingWrapper />;
};

const DaramLoadingWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default memo(DaramLoading);
