import styled from "styled-components";
import { UrUrlColor, UrUrlInnerWidth } from "@styles/urUrlStyle";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 87px;
  background-color: ${UrUrlColor.main};
  padding-left: 15px;
  padding-right: 15px;
  font-family: PretendardExB, sans-serif;
`;

export const HeaderInner = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: ${UrUrlInnerWidth.Max}px;
`;

export const LeftItems = styled.div`
  flex: 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const LogoWrapper = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 105px;
  height: 15px;
  cursor: pointer;
`;

export const LeftItem = styled.div<{ isSelected: boolean }>`
  background-color: ${(props) => (props.isSelected ? UrUrlColor.deepGray : UrUrlColor.main)};
  color: ${(props) => (props.isSelected ? "white" : UrUrlColor.deepGray)};
  font-weight: bold;
  border-radius: 20px;
  padding: 12px 20px 12px 20px;
  cursor: pointer;
`;

export const RightItems = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const RightIcon = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const SpeeechBubbleDraw = styled.div`
  position: absolute;
  top: 45px;
  left: -55px;
  width: 140px;
  background: white;
  height: 100px;
  z-index: 3;
  border-radius: 10px;
  filter: drop-shadow(0px 2.33912px 19.4927px rgba(0, 0, 0, 0.04))
    drop-shadow(0px 2.33912px 17.9333px rgba(22, 34, 51, 0.03));
  display: none;

  @media screen and (max-width: 1480px) {
    left: -100px;
  }

  ::before {
    content: "";
    position: absolute;
    top: -9px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
    border-radius: 10px;

    @media screen and (max-width: 1480px) {
      left: 83%;
    }
  }
`;

export const Setting = styled.div`
  display: flex;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  height: 50%;

  &:hover {
    color: black;
  }
`;

export const Logout = styled.div`
  display: flex;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  height: 50%;

  &:hover {
    color: black;
  }
`;

export const BubbleContent = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  position: absolute;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  z-index: 4;
  color: ${UrUrlColor.gray3};
`;

export const LogoutIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 5px;
`;

export const UserWrapper = styled.div<{ loggingIn: boolean }>`
  position: relative;
  cursor: ${(props) => (props.loggingIn ? "pointer" : "default")};

  &:hover ${SpeeechBubbleDraw} {
    display: ${(props) => (props.loggingIn ? "block" : "none")};
  }

  &:hover ${BubbleContent} {
    display: ${(props) => (props.loggingIn ? "block" : "none")};
  }
`;

export const UserIcon = styled(RightIcon)`
  width: 30.5px;
  height: 30.5px;
`;

// search
export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchBarInput = styled.input`
  height: 40px;
  width: 331px;
  border-radius: 30px;
  outline: none;
  border: none;
  padding-left: 15px;
  font-size: 13px;
`;
export const SearchIcon = styled.img`
  width: 22px;
  height: 22px;
  position: absolute;
  right: 13px;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
`;

export const GoNotion = styled.a``;
