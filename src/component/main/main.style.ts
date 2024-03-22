import styled from "styled-components";
import { UrUrlColor, UrUrlInnerWidth } from "@styles/urUrlStyle";

export const ContestWrapper = styled.div`
  position: relative;
  padding-top: 30px;
  margin-bottom: 50px;
  max-width: ${UrUrlInnerWidth.Max}px;
  margin-left: auto;
  margin-right: auto;
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

export const RecommendUrlWrapper = styled(ContestWrapper)`
  padding: 20px;
`;

export const TitleWrapper = styled.div`
  color: ${UrUrlColor.title};
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
`;

export const SubTitleWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const TitleBase = styled.div`
  font-size: 16px;
  color: #333333;
`;
export const SubTitle = styled(TitleBase)`
  font-family: PretendardRegular, sans-serif;
`;

export const Nickname = styled(TitleBase)`
  font-family: "PretendardB", serif;
`;

export const DimWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 19px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginGuideText = styled.div`
  color: white;
  font-size: 24px;
  font-weight: 700;
`;

export const LoginBtn = styled.div`
  background-color: ${UrUrlColor.main};
  width: 229px;
  height: 55px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 43px;
  cursor: pointer;
`;
