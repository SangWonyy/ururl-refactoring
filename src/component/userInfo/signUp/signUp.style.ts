import styled from "styled-components";
import { UrUrlColor, UrUrlFontSize } from "@styles/urUrlStyle";

export const InfoWrapper = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const SubTitleText = styled.div`
  font-size: ${UrUrlFontSize.subTitle}px;
  margin-right: 10px;
  font-family: PretendardSemiB, sans-serif;
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const SubTitleTextWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
`;

export const SubInfoWrapper = styled.div`
  display: flex;
`;

export const WarningIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 4px;
`;

export const WarningText = styled.div`
  color: #f00e0e;
`;

export const SignUpTag = styled.div<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? "white" : `${UrUrlColor.gray4}`)};
  border: 1px solid ${(props) => (props.isSelected ? `${UrUrlColor.main}` : `${UrUrlColor.gray4}`)};
  background-color: ${(props) => (props.isSelected ? `${UrUrlColor.main}` : "white")};
  padding: 5px 15px 5px 15px;
  font-size: 12px;
  border-radius: 25px;
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpTagWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
`;

export const InputWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ResultNicknameValidation = styled.div<{ fontColor: string }>`
  margin-top: 5px;
  color: ${(props) => props.fontColor};
`;

export const UrUrlInput = styled.input<{ width: number }>`
  border-radius: 8px;
  border: 1px solid ${UrUrlColor.gray4};
  height: 45px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 2px;
  outline: none;
  width: ${(props) => props.width}%;
  &:focus {
    border: 1px solid ${UrUrlColor.main};
  }
`;

export const CheckDuplicationBtn = styled.div<{ activeDuplBtn: boolean }>`
  border-radius: 8px;
  height: 45px;
  width: 78px;
  background-color: white;
  border: 1px solid ${(props) => (props.activeDuplBtn ? UrUrlColor.main : UrUrlColor.gray4)};
  color: ${(props) => (props.activeDuplBtn ? UrUrlColor.main : UrUrlColor.gray4)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.activeDuplBtn ? "pointer" : "default")};
`;

export const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const GrayBackground = styled.div<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgb(0 0 0 / 43%);
`;

export const SettingIcon = styled.img`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const ThumbnailWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  cursor: pointer;
  margin-top: 15px;
`;

// title
export const TitleWrapper = styled.div<{ color: string }>`
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: PretendardB, sans-serif;
  margin-right: 51px;
  color: ${(props) => props.color};
`;

export const TitleText = styled.div`
  font-weight: 700;
  font-size: 25px;
`;

// interest
export const SubTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ReadyTagWrapper = styled.div`
  padding: 3px 10px 3px 10px;
  background-color: ${UrUrlColor.gray5};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: ${UrUrlColor.gray2};
`;

export const WarningWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InterestWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TagIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;

// goal
export const GoalTextWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
`;

export const BlackSpeech = styled.img`
  position: absolute;
  width: 240px;
  height: 40px;
  top: 22px;
  left: -73px;
`;

export const BlackSpeechText = styled.div`
  position: absolute;
  font-size: 15px;
`;

export const GoalText = styled.div`
  font-size: 14px;
  margin-right: 5px;
`;

export const GoalInputWrapper = styled.div`
  position: relative;
`;

export const GoalInput = styled.input`
  border: none;
  border-bottom: 1px solid ${UrUrlColor.gray4};
  outline: none;
  padding-left: 3px;
  margin-right: 5px;
  width: 100px;

  &:focus {
    border-bottom: 1px solid ${UrUrlColor.main};
  }
`;

// thumbnail modal

export const OverlayInner = styled.div`
  height: 100%;
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
`;

export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const CloseIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const ModalTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: PretendardExB, sans-serif;
`;

export const ModalTitleText = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const ModalThumbnailWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  margin: 35px;
`;

export const ModalThumbnail = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  cursor: pointer;
`;

export const CheckIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 1;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalFooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const Button = styled.div`
  cursor: pointer;
  width: 45%;
  height: 40px;
  background-color: ${UrUrlColor.gray4};
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WithDrawalBtn = styled(Button)<{ isDisable: boolean }>`
  background-color: ${(props) => (props.isDisable ? `${UrUrlColor.gray4}` : `${UrUrlColor.main}`)};
  cursor: ${(props) => (props.isDisable ? "default" : "pointer")};
`;

// buttons
export const SignUpButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
  flex-direction: column;
`;

export const SignUp = styled.div`
  cursor: pointer;
  background-color: ${UrUrlColor.deepGray};
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 8px;
`;

export const Withdrawal = styled.div`
  font-size: 13px;
  text-underline: ${UrUrlColor.gray3};
  color: ${UrUrlColor.gray3};
  text-decoration: underline;
  margin-top: 20px;
  cursor: pointer;
`;
