import styled from "styled-components";
import { UrUrlColor } from "@styles/urUrlStyle";

export const TagListWrapper = styled.div<{ isArrowUP: boolean }>`
  margin-top: 5px;
  padding-top: 4px;
  width: 100%;
  height: 60px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: ${(props) => (props.isArrowUP ? "auto" : "none")};
  flex-wrap: ${(props) => (props.isArrowUP ? "nowrap" : "wrap")};
  gap: 10px;

  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TagListWrapperDown = styled(TagListWrapper)`
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Tag = styled.div<{ isSelected: boolean }>`
  white-space: nowrap;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 15px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isSelected ? UrUrlColor.deepGray : "white")};
  color: ${(props) => (props.isSelected ? "white" : UrUrlColor.deepGray)};
  border-radius: 20px;
  cursor: pointer;
`;

export const CheckIcon = styled.img`
  margin-right: 9px;
`;

export const AllUrlTag = styled(Tag)<{ is2022: boolean }>`
  box-shadow: ${(props) => (props.is2022 ? "0 0 0 3px rgba(227, 14, 14, 1)" : "none")};
  outline: ${(props) => (props.is2022 ? "dashed 3px rgba(3, 177, 0, 1)" : "none")};
`;

export const LockIcon = styled.img`
  margin-right: 2px;
`;

export const MoreArrowIcon = styled.div`
  cursor: pointer;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  right: 5px;
  bottom: 28px;
  background-color: white;
  box-shadow: 0 4.625px 26px rgba(0, 0, 0, 0.09), 0 1.85px 10px rgba(22, 34, 51, 0.08),
    0 3.7px 12.95px rgba(22, 34, 51, 0.04);
  border: 1px solid #dadada;
  border-radius: 50%;
`;

export const ArrowIcon = styled.img`
  width: 15px;
  height: 15px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
  padding: 5px;
`;
export const SortIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 8px;
`;
