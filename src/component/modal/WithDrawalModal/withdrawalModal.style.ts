import styled from "styled-components";
import { UrUrlColor } from "../../../../styles/urUrlStyle";

// common
export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const Label = styled.div`
  flex: 2;
  font-size: 15px;
  color: ${UrUrlColor.gray3};
`;

export const DrawalLabel = styled(Label)`
  height: 100px;
`;

export const ValueWrapper = styled.div`
  flex: 8;
  font-size: 15px;
  display: flex;
  align-items: center;
`;

// agreecomments
export const AgreeCommentsWrapper = styled.div`
  height: 130px;
  width: 100%;
  border-radius: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: ${UrUrlColor.gray5};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const AgreeCommentsInner = styled.div`
  padding: 10px 30px 10px 30px;
`;

export const CommentsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const InfoIcon = styled.img`
  margin-top: 2px;
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

export const CommentWrapper = styled.div`
  display: flex;
`;

export const Comments = styled.div`
  font-size: 13px;
  font-family: PretendardSemiB, sans-serif;
`;

export const CheckBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;

export const CheckBox = styled.div<{ isSelected: boolean }>`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: ${(props) => `1px solid ${props.isSelected ? UrUrlColor.main : UrUrlColor.gray4}`};
  background-color: ${(props) => `${props.isSelected ? UrUrlColor.main : "white"}`}; ;
`;

export const CheckBoxText = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 12px;
  font-family: PretendardM, sans-serif;
`;

export const CheckIcon = styled.img`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

// ReasonForWithdrawal

export const WithdrawalArea = styled.textarea`
  width: 95%;
  resize: none;
  outline: none;
  border: 1px solid ${UrUrlColor.gray3};
  border-radius: 10px;
  padding: 10px;
  height: 100px;
`;
