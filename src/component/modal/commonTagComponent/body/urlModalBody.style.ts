import styled from "styled-components";
import { UrUrlColor } from "@styles/urUrlStyle";

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.div`
  font-size: 17px;
  color: ${UrUrlColor.deepGray};
  margin-top: 12px;
  margin-bottom: 12px;
  margin-right: 5px;
`;

export const LabelInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Input = styled.input`
  outline: none;
  padding-left: 10px;
  border-radius: 13px;
  border: 1px solid ${UrUrlColor.gray4};
  height: 40px;
  font-size: 15px;
`;

export const SaveUrlInput = styled(Input)`
  width: 100%;
  padding: 0px 16px;

  input::placeholder {
    color: ${UrUrlColor.gray2};
    font-size: 15px;
    input:focus::placeholder {
      color: transparent;
    }
  }
`;

export const TitleInput = styled(Input)`
  width: 100%;
`;

// tag
export const TagsWrapper = styled.div<{ isMetaTag: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  flex-wrap: wrap;
  border-bottom: ${(props) => props.isMetaTag && `1px solid ${UrUrlColor.gray5}`};
  padding: ${(props) => `${props.isMetaTag ? 5 : 18}px 5px ${props.isMetaTag ? 20 : 5}px 5px`};
  min-height: ${(props) => (props.isMetaTag ? 98 : 30)}px;
`;

export const HashTagView = styled.div<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? "white" : `${UrUrlColor.gray4}`)};
  border: 1px solid ${(props) => (props.isSelected ? `${UrUrlColor.main}` : `${UrUrlColor.gray4}`)};
  background-color: ${(props) => (props.isSelected ? `${UrUrlColor.main}` : "white")};
  padding: 5px 15px 5px 15px;
  font-size: 14px;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: PretendardSemiB sans-serif;
`;

export const HashTagText = styled.div`
  margin-top: 2px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CntWrapper = styled.div`
  display: flex;
`;

export const SelectedCnt = styled.div`
  font-size: 12px;
  color: ${UrUrlColor.main};
`;

export const TotalCnt = styled.div`
  font-size: 12px;
  color: ${UrUrlColor.gray4};
`;

export const WarnningWrapper = styled.div`
  margin-bottom: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LabelBodyWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SaveUrlBodyWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  flex: 8;
`;
