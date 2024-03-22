import styled from "styled-components";
import { UrUrlColor } from "@styles/urUrlStyle";

export const CloseWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CloseIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const Comment = styled.div`
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  padding-top: 10px;
  font-size: 16px;
  font-family: PretendardSemiB, sans-serif;
  color: #333333;
`;

export const InfoIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
export const SubCommentWrapper = styled.div`
  display: flex;
`;

export const SubComment = styled.div<{ bold: boolean }>`
  color: #333333;
  font-size: 16px;
  width: 100%;
  text-align: center;
  font-family: ${(props) => (props.bold ? "PretendardSemiB" : "Pretendard-Medium")}, sans-serif;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

export const CompleteBtn = styled.div<{ width: string }>`
  height: 40px;
  width: ${(props) => props.width};
  color: white;
  background-color: ${UrUrlColor.main};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CancelBtn = styled(CompleteBtn)`
  margin-right: 10px;
  background-color: ${UrUrlColor.gray5};
  color: ${UrUrlColor.gray3};
`;
