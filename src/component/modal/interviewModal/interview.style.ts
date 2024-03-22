import styled from "styled-components";
import { UrUrlColor } from "@styles/urUrlStyle";

export const BannerWrapper = styled.div`
  width: 100%;
  height: 331px;
  background-color: ${UrUrlColor.main};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RowWrapper = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
`;

export const TextCenter = styled.div`
  text-align: center;
`;

export const TextWrapper = styled.div``;
export const FontBase = styled.div`
  font-family: PretendardExB;
  font-size: 34px;
  color: #333333;
  text-align: center;
  line-height: 47px;
`;
export const Nickname = styled(FontBase)`
  color: white;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Daram = styled.img``;

export const InterviewWrapper = styled.div`
  padding: 35px 24px 40px 24px;
  width: 100%;
`;

export const GuideText = styled.div`
  font-size: 18px;
  font-family: PretendardRegular;
  text-align: center;
  line-height: 167%;
  color: #2f2f2f;
`;

export const PresentText = styled(GuideText)`
  font-family: PretendardB;
  color: #2f2f2f;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 195px;
  height: 64px;
  border-radius: 15px;
  background-color: ${(props) => (props.active ? "#40403F" : "#D1D1D1")};
  cursor: pointer;
  font-size: 18px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`;
