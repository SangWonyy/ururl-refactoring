// custom input
import styled from "styled-components";
import { UrUrlColor } from "@styles/urUrlStyle";
import { Input } from "../../modal/commonTagComponent/body/urlModalBody.style";

export const CustomHashTagInput = styled(Input)`
  width: 100%;
`;

export const InputWrppaer = styled.div`
  position: relative;
  width: 90%;
`;

export const CustomHashTagWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PlusButton = styled.div<{ openClick: boolean; activeBtn: boolean }>`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background-color: ${(props) => (props.activeBtn ? `${UrUrlColor.main}` : `${UrUrlColor.gray4}`)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: ${(props) => (!props.openClick || !props.activeBtn) && "none"};
`;

export const PlusIcon = styled.img`
  width: 10px;
  height: 10px;
`;

export const SeeOnlyWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 7px;
  margin-bottom: 7px;
`;

export const Checkbox = styled.div<{ isPublic: boolean }>`
  width: 13px;
  height: 13px;
  background-color: ${(props) => (props.isPublic ? "white" : `${UrUrlColor.main}`)};
  border: 1px solid ${(props) => (props.isPublic ? `${UrUrlColor.gray4}` : `${UrUrlColor.main}`)};
  cursor: pointer;
  margin-right: 6px;
`;

export const CheckIcon = styled.img`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SeeOnlyText = styled.div`
  font-size: 13px;
  margin-right: 2px;
`;

export const LockIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 3px;
`;

export const CustomTagWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;

export const IconWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;
export const TagLockIcon = styled.img`
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
`;

export const CustomTag = styled.div<{ isSelected: boolean }>`
  background-color: ${(props) => (props.isSelected ? `${UrUrlColor.main}` : "white")};
  padding: 6px 14px 6px 14px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.isSelected ? "white" : `${UrUrlColor.gray4}`)};
  border: 1px solid ${(props) => (props.isSelected ? `${UrUrlColor.main}` : `${UrUrlColor.gray4}`)};
  cursor: pointer;
  font-size: 14px;
  font-family: PretendardSemiB sans-serif;
`;

export const TagNameText = styled.div`
  margin-top: 3px;
`;

export const DeleteIcon = styled.img`
  display: flex;
  align-items: center;
  width: 13px;
  height: 13px;
  margin-left: 6px;
  margin-top: 1px;
  cursor: pointer;
`;

export const TagOption = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  font-family: PretendardM, sans-serif;
  padding-left: 5px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(211, 211, 211, 0.25);
  }
`;

export const TagDataListWrapper = styled.div<{ optionCnt: number }>`
  position: absolute;
  filter: drop-shadow(0px 2.33912px 19.4927px rgba(0, 0, 0, 0.04))
    drop-shadow(0px 2.33912px 17.9333px rgba(22, 34, 51, 0.03));
  border-radius: 5px;
  width: 99%;
  max-height: 85px;
  min-height: 53px;
  height: ${(props) => props.optionCnt * 35}px;
  background-color: white;
  padding: 10px;
  box-shadow: 0 1px 3px 0 #00000024;
  left: 50%;
  transform: translate(-50%, 4%);
  overflow: auto;
`;
