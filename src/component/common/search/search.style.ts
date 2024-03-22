import styled from "styled-components";
import { UrUrlColor, UrUrlInnerWidth } from "@styles/urUrlStyle";

export const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const ResultText = styled.div`
  font-size: 15px;
`;
export const ResultBoldText = styled(ResultText)`
  font-size: 18px;
  font-weight: bold;
`;

export const ResultWrapper = styled.div`
  padding-top: 30px;
  margin-bottom: 50px;
  flex: 8;
  display: grid;
  grid-template-columns: minmax(295px, 1fr) minmax(295px, 1fr) minmax(295px, 1fr);
  gap: 33px;

  @media screen and (max-width: 1180px) {
    gap: 20px;
  }

  @media screen and (max-width: 960px) {
    grid-template-columns: minmax(295px, 1fr) minmax(295px, 1fr);
  }

  @media screen and (max-width: 645px) {
    grid-template-columns: minmax(230px, 1fr) minmax(230px, 1fr);
  }

  @media screen and (max-width: 645px) {
    grid-template-columns: 1fr;
  }
`;

export const SearchInner = styled.div`
  max-width: ${UrUrlInnerWidth.Max}px;
  margin: 70px auto;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${UrUrlColor.gray5};
  overflow: hidden;
  padding-left: 15px;
  padding-right: 15px;
  font-family: PretendardM, sans-serif;
`;
