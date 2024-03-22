import styled from "styled-components";
import { UrUrlColor, UrUrlInnerWidth } from "@styles/urUrlStyle";

export const MainBodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${UrUrlColor.gray5};
  overflow: hidden;
  padding-left: 15px;
  padding-right: 15px;
  font-family: PretendardM, sans-serif;
`;

export const MainRecommendWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e2e2e2;
  overflow: hidden;
  padding-left: 15px;
  padding-right: 15px;
  font-family: PretendardM, sans-serif;
`;
export const MainRecommendInner = styled.div`
  max-width: ${UrUrlInnerWidth.Max}px;
  margin: 30px auto;
`;

export const MainBodyInner = styled.div`
  // max-width: ${UrUrlInnerWidth.Max}px;
  margin: 30px auto;
`;

export const SliderWrapper = styled.div``;

export const TagListWrapper = styled.div`
  max-width: ${UrUrlInnerWidth.Max}px;
  margin: 71px auto 30px auto;
`;

export const Arrow = styled.img<{ disable: boolean; direction: "R" | "L" }>`
  cursor: ${(props) => (props.disable ? "default" : "pointer")};
  z-index: 2;
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 260px;

  right: ${(props) => (props.direction === "R" ? "-25px" : "none")};
  left: ${(props) => (props.direction === "L" ? "-25px" : "none")};
`;

export const AllUrlSliderWrapper = styled.div`
  position: relative;
`;
