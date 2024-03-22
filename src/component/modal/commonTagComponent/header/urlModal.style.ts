import styled from "styled-components";
import { UrUrlColor } from "@styles/urUrlStyle";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 15px;
`;

export const CloseWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const CloseIcon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const Logo = styled.img`
  width: 102px;
  height: 14px;
`;

export const Title = styled.div`
  font-size: 30px;
  margin-top: 18px;
  margin-bottom: 37px;
  font-family: PretendardExB, sans-serif; ;
`;

export const UrlWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  overflow: hidden;
  outline: none;
`;

export const SaveUrlButton = styled.div`
  width: 100%;
  height: 50px;
  min-height: 50px;
  background-color: ${UrUrlColor.deepGray};
  font-size: 15px;
  border-radius: 15px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  flex: 1;
`;

export const BtnWrapper = styled.div`
  display: flex;
  font-size: 17px;
  font-family: PretendardB, sans-serif;
  align-items: center;
`;

export const BookmarkIcon = styled.img`
  margin-left: 5px;
`;
