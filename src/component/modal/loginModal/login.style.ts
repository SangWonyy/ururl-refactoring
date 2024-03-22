import styled from "styled-components";
import { UrUrlColor } from "@styles/urUrlStyle";
import KaKaoLogin from "react-kakao-login";

export const InnerModal = styled.div`
  padding: 40px;
  width: 66%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
`;

export const Title = styled.div`
  font-size: 23px;
  font-weight: bold;
  text-align: center;
  font-family: PretendardM, sans-serif;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StartBtnWrapper = styled.div``;

export const StartIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 8px;
`;

export const Button = styled.div`
  width: 100%;
  height: 49px;
  background-color: ${UrUrlColor.deepGray};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  cursor: pointer;
  color: white;
`;

export const WelcomeImg = styled.img`
  height: 45%;
`;

export const KakaologinButton = styled(KaKaoLogin)`
  width: 100% !important;
  background-color: #fbe950 !important;
  border-radius: 10px !important;
  cursor: pointer;
  outline: none;
`;

export const KakaoText = styled.div`
  font-size: 15px;
`;
export const KakaoIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 8px;
`;
export const KakaoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginTitleWrapper = styled.div`
  padding-top: 81px;
  margin-bottom: 47px;
  color: ${UrUrlColor.title};
  font-size: 36px;
  font-family: PretendardB, sans-serif;
  width: 100%;
  text-align: center;
`;

export const GuideWrapper = styled.div`
  position: relative;
  width: 70%;
  margin: auto;
  max-width: 700px;
`;

export const Arrow = styled.img<{ disable: boolean; direction: "R" | "L" }>`
  cursor: ${(props) => (props.disable ? "default" : "pointer")};
  z-index: 2;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: ${(props) => (props.direction === "R" ? 0 : "none")};
  left: ${(props) => (props.direction === "L" ? 0 : "none")};
  top: 50%;
  transform: translateY(-50%);
`;

export const LoginStartWrapper = styled.div<{ height: number }>`
  display: flex;
  flex-direction: column;
  height: ${(props) => props.height}px;
`;

export const GuideTextWrapper = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${UrUrlColor.title};
  white-space: pre-line;
  height: 90px;
`;

export const GuideText = styled.div`
  text-align: center;
  font-family: PretendardB, serif;
  line-height: 30px;
`;

export const GuideImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const GuideImage = styled.div<{ url: string; width: number; height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 16px;
  background-image: ${(props) => `url(${props.url})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const ListArrow = styled.img`
  cursor: pointer;
  position: absolute;
  z-index: 2;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 63%;
  left: 50px;
`;

export const PageWrapper = styled.div`
  position: relative;
  outline: none;
`;

export const UrlWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;
export const GoUseUrUrl = styled.div`
  border-bottom: 1px solid ${UrUrlColor.gray1};
  color: ${UrUrlColor.gray1};
  font-weight: 800;
  display: flex;
  cursor: pointer;
`;
