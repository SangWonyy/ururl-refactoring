import styled from "styled-components";
import { UrUrlColor } from "@styles/urUrlStyle";

export const ReportWrapper = styled.div``;

export const ReportTitle = styled.div`
  font-size: 24px;
  padding-left: 30px;
  margin-bottom: 15px;
`;

export const ReportReasonListWrapper = styled.div`
  padding-left: 30px;
  margin-top: 25px;
`;
export const ReportReasonWrapper = styled.div`
  display: flex;
`;

export const ReportReasonText = styled.div`
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const ReportRoundButton = styled.div<{ isSelected: boolean }>`
  position: relative;
  cursor: pointer;
  background-color: white;
  border: 1px solid ${(props) => (props.isSelected ? UrUrlColor.main : "#E0E0E0")};
  width: 20px;
  height: 20px;
  border-radius: 20px;
  margin-right: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const ReportRoundInnerDot = styled.div<{ isSelected: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => (props.isSelected ? UrUrlColor.main : "white")};
  width: 12px;
  height: 12px;
  border-radius: 12px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 40px;
`;

export const ReportBtn = styled.div<{ backgroundColor: string; color: string }>`
  cursor: pointer;
  width: 206px;
  height: 55px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
