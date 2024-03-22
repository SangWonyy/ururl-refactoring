import styled from "styled-components";
import { UrUrlColor } from "../../../../styles/urUrlStyle";

export const BodyWrapper = styled.div`
  padding: 10px 20px 10px 20px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 20px;
`;

export const SubWrapper = styled(TitleWrapper)`
  align-items: flex-start;
  padding-top: 20px;
  padding-bottom: 35px;
`;

export const DeleteTitle = styled.div`
  font-size: 23px;
  font-weight: bold;
`;

export const TagWrapper = styled.div`
  border-radius: 15px;
  border: 1px solid ${UrUrlColor.gray4};
  background-color: white;
  padding: 5px 15px 5px 15px;
  font-size: 15px;
  margin-right: 20px;
`;

export const WarningIcon = styled.img`
  width: 15px;
  height: 15px;
  display: flex;
  align-items: flex-start;
  margin-right: 10px;
  margin-top: 4px;
`;

export const SubComment = styled.div`
  font-size: 15px;
  line-height: 25px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 15px;
`;

export const TagButton = styled.div<{ isDelete: boolean }>`
  cursor: pointer;
  border-radius: 10px;
  background-color: ${(props) => (props.isDelete ? `${UrUrlColor.main}` : `${UrUrlColor.gray5}`)};
  color: ${(props) => (props.isDelete ? "white" : `${UrUrlColor.gray3}`)};
  font-weight: bold;
  font-size: 18px;
  padding: 14px 5px 14px 5px;
  width: 47%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
