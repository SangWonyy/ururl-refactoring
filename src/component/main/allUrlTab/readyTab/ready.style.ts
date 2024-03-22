import styled from "styled-components";
import { UrUrlColor } from "@styles/urUrlStyle";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${UrUrlColor.gray5};
  font-family: -apple-system, PretendardM, sans-serif;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 400px;
  height: 210px;
  border-radius: 50px;
  position: relative;
`;

export const UrlCntWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const ReadMarkStroke = styled.img`
  width: 20px;
  height: 22px;
  margin-right: 10px;
`;

export const AttainWrapper = styled.div`
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;
`;

export const CurrentComent = styled.div`
  color: #333333;
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
`;

export const ThanksComment = styled.div`
  color: #222222;
  font-size: 13px;
`;

export const Character = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const CurrentCnt = styled.div`
  font-size: 32px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-family: PretendardExB, sans-serif;
  height: 17px;
`;

export const TargetCnt = styled.div`
  font-size: 20px;
  color: ${UrUrlColor.gray2};
  display: flex;
`;

export const Congratuation = styled.img`
  width: 440px;
  height: 350px;
  position: absolute;

  top: -240px;
  left: 51%;
  transform: translate(-50%, 0);
`;

export const NexComment = styled.div`
  font-size: 24px;
  margin-top: 60px;
  color: #333333;
  font-weight: bold;
`;

export const NextComment2 = styled.div`
  color: #333333;
  font-size: 18px;
  margin-top: 18px;
`;

export const NotComplete = styled.div`
  font-size: 15px;
  margin-top: 60px;
  color: rgba(40, 40, 40, 0.47);
  font-weight: bold;
`;
