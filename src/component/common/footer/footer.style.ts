import styled from "styled-components";
import { UrUrlColor, UrUrlInnerWidth } from "@styles/urUrlStyle";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${UrUrlColor.deepGray};
  font-family: PretendardM, sans-serif;
`;

export const FooterInner = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  max-width: ${UrUrlInnerWidth.Max}px;
  margin-left: auto;
  margin-right: auto;
`;

export const TeamWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const FirstWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TeamLogo = styled.img`
  width: 90px;
  height: 12px;
  margin-right: 30px;
`;

export const Team = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-right: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
`;

export const MessageWrapper = styled.div`
  height: 35px;
  border-radius: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &:hover {
    background-color: ${UrUrlColor.gray6};
  }
`;

export const MessageComment = styled.div`
  padding: 15px 5px 15px 5px;
  margin: 15px;
  font-size: 15px;
  color: ${UrUrlColor.gray3};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SendMailLogo = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 7px;
`;

// ururlIntro
export const UrUrlWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const InfoText = styled.div`
  font-size: 12px;
  color: ${UrUrlColor.gray2};
  margin-right: 15px;
  cursor: pointer;
`;

// copyright
export const CopyRightWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CopyRightInfo = styled.div`
  margin-bottom: 5px;
  font-size: 12px;
  color: ${UrUrlColor.gray2};
`;
