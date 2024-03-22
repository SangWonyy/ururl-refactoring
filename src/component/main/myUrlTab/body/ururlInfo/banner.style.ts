import styled from "styled-components";
import { UrUrlColor, UrUrlInnerWidth } from "@styles/urUrlStyle";

export const Arrow = styled.img<{ direction: string }>`
  cursor: pointer;
  width: 50px;
  height: 50px;
  margin: 10px 20px 10px 20px;
  position: absolute;
  z-index: 2;
  display: none !important;
`;

export const BoxWrapper = styled.div<{ flex: number }>`
  flex: ${(props) => props.flex};
  height: 200px;
  background-color: white;
  border-radius: 15px;
  font-family: PretendardB, sans-serif;

  &:hover ${Arrow} {
    display: block !important;
  }
`;

export const ActiveBoxWrapper = styled.div`
  flex: 2;
  height: 200px;
  background-color: white;
  border-radius: 15px;

  @media screen and (max-width: 1120px) {
    display: none;
  }
`;

// challenge

export const ProgressWrapper = styled.div`
  position: relative;
  background-color: ${UrUrlColor.gray5};
  width: 100%;
  height: 30px;
  border-radius: 6px 16px 16px 6px;
`;

export const Progress = styled.div<{ percent: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.percent}%;
  height: 30px;
  background: linear-gradient(90deg, #fa8700 4.01%, #ffcc19 98.73%);
  border-radius: 6px 16px 16px 6px;
`;

export const OverProgress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: 30px;
  background: linear-gradient(270deg, #FB9505 5.07%, #F9B900 100%);
  border-radius: 6px 16px 16px 6px;
`;
export const CurrentCnt = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 15px;
`;

export const GoalCnt = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 15px;
  font-weight: bold;
  color: ${UrUrlColor.gray2};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 15px;
`;

export const ChallengeInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-right: 30px;
  margin-left: 30px;
`;

export const ThisWeekendWrapper = styled.div`
  display: flex;
  flex: 2;
  justify-content: flex-start;
  align-items: center;
  font-size: 13px;
  margin-bottom: 10px;
  margin-top: 10px;
  font-family: PretendardM, sans-serif;
`;

export const MoreIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 10px;
  cursor: pointer;
`;

export const CommentsWrapper = styled.div`
  font-size: 18px;
  flex: 1;
`;

export const GaugeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 3;
  margin-bottom: 10px;
`;

export const Gauge = styled.div<{ color: string }>`
  position: relative;
  background: ${(props) => props.color};
  width: 50px;
  height: 20px;
  border-radius: 6px;
`;

export const GuageCnt = styled.div<{ isFill: boolean }>`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 22px;
  left: 50%;
  transform: translate(-50%, 0);
  color: ${(props) => (props.isFill ? `${UrUrlColor.main}` : `${UrUrlColor.gray4}`)};
  font-size: 15px;
`;

// activeContents
export const ActiveContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 65px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActiveInfoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-height: 70px;
  max-width: 190px;
`;

export const ActiveCnt = styled.div<{ isMargin: boolean }>`
  display: flex;
  font-size: 24px;
  font-weight: bold;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-right: ${(props) => props.isMargin && "5px"};
  font-family: PretendardExB, sans-serif;
`;

export const Icon = styled.img<{ size: number; isMargin: boolean }>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  margin-right: ${(props) => (props.isMargin ? "2px" : "3px")};
`;

export const ActiveText = styled.div`
  text-align: center;
  font-size: 18px;
  color: ${UrUrlColor.fontColor};
`;

export const BannerImg = styled.img`
  object-fit: cover;
  display: block;
  border-radius: 15px;
  width: 90%;
  height: 200px;
  margin: auto;
`;

export const BannerWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 40px;
  max-width: ${UrUrlInnerWidth.Max}px;
  margin-left: auto;
  margin-right: auto;
`;

export const BannerBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 15px;
  padding: 34px 24px 20px;
  max-width: 393px;
  display: flex;
  justify-content: space-between;
  line-height: 26px;
  cursor: pointer;
`;

const TextPart = styled.div`
  font-size: 22px;
  font-family: PretendardRegular, serif;
`;

export const TextPartAllUrl = styled(TextPart)`
  @media (max-width: 1270px) {
    font-size: 20px;
  }
  @media (max-width: 1140px) {
    font-size: 18px;
  }
  @media (max-width: 1120px) {
    font-size: 22px;
  }
  @media (max-width: 985px) {
    font-size: 20px;
  }
  @media (max-width: 730px) {
    font-size: 18px;
  }
  @media (max-width: 650px) {
    font-size: 18px;
  }
`;

export const TextPartITIndustry = styled(TextPart)`
  @media (max-width: 1330px) {
    font-size: 20px;
  }
  @media (max-width: 1120px) {
    font-size: 24px;
  }
  @media (max-width: 1023px) {
    font-size: 22px;
  }
  @media (max-width: 933px) {
    font-size: 20px;
  }
  @media (max-width: 860px) {
    font-size: 17px;
  }
`;

export const TextPartExtension = styled(TextPart)`
  @media (max-width: 1270px) {
    font-size: 20px;
  }
  @media (max-width: 1140px) {
    font-size: 18px;
  }
  @media (max-width: 1120px) {
    font-size: 22px;
  }
  @media (max-width: 985px) {
    font-size: 20px;
  }
  @media (max-width: 730px) {
    font-size: 18px;
  }
  @media (max-width: 650px) {
    font-size: 18px;
  }
`;

export const TextPartKakao = styled(TextPart)`
  @media (max-width: 932px) {
    font-size: 20px;
  }
  @media (max-width: 871px) {
    font-size: 16px;
  }
  @media (max-width: 730px) {
    font-size: 14px;
  }
  @media (max-width: 650px) {
    font-size: 18px;
  }
`;

export const BoldText = styled.span`
  font-family: PretendardB, serif;
`;
export const ImagePart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BannerBadge = styled.div<{ width: string, backgroundColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: 32px;
  background: ${(props) => props.backgroundColor};
  border-radius: 8px;
  color: white;
  font-size: 16px;
  margin-bottom: 15px;
  @media (max-width: 932px) {
    font-size: 14px;
  }
`;
export const Text = styled.div``;
export const ImageWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BannerImage = styled.img`
  width: 87px;
  height: 132px;
  @media (max-width: 871px) {
    width: 80px;
    height: 122px;
  }
  @media (max-width: 860px) {
    width: 70px;
    height: 110px;
  }
  @media (max-width: 854px) {
    width: 60px;
    height: 100px;
  }
  @media (max-width: 810px) {
    width: 0;
    height: 0;
  }
`;

export const ChallengeImage = styled.img`
  width: 118px;
  height: 114px;
  @media (max-width: 1270px) {
    width: 100px;
    height: 97px;
  }
  @media (max-width: 1120px) {
    width: 118px;
    height: 114px;
  }
  @media (max-width: 985px) {
    width: 100px;
    height: 97px;
  }
  @media (max-width: 860px) {
    width: 90px;
    height: 87.3px;
  }
  @media (max-width: 650px) {
    width: 0;
    height: 0;
  }
`;

export const ITIndustryBannerImage = styled.img`
  width: 155px;
  height: 133px;
  @media (max-width: 1385px) {
    width: 140px;
    height: 120px;
  }
  @media (max-width: 1120px) {
    width: 155px;
    height: 133px;
  }

  @media (max-width: 1023px) {
    width: 135px;
    height: 115px;
  }
  @media (max-width: 898px) {
    width: 105px;
    height: 90px;
  }
  @media (max-width: 860px) {
    width: 100px;
    height: 85px;
  }
  @media (max-width: 650px) {
    width: 0;
    height: 0;
  }
`;

export const ExtensionImage = styled.img`
  width: 118px;
  height: 114px;
  @media (max-width: 1270px) {
    width: 100px;
    height: 97px;
  }
  @media (max-width: 1120px) {
    width: 118px;
    height: 114px;
  }
  @media (max-width: 985px) {
    width: 100px;
    height: 97px;
  }
  @media (max-width: 860px) {
    width: 90px;
    height: 87.3px;
  }
  @media (max-width: 650px) {
    width: 0;
    height: 0;
  }
`;

export const KaKaoBannerImage = styled.img`
  width: 105px;
  height: 130px;
  @media (max-width: 871px) {
    width: 100px;
    height: 125px;
  }
  @media (max-width: 860px) {
    width: 90px;
    height: 112.5px;
  }
  @media (max-width: 650px) {
    width: 0;
    height: 0;
  }
`;

export const ExtensionBannerImage = styled.img`
  width: 155px;
  height: 133px;
  @media (max-width: 1385px) {
    width: 140px;
    height: 120px;
  }
  @media (max-width: 1120px) {
    width: 155px;
    height: 133px;
  }

  @media (max-width: 1023px) {
    width: 135px;
    height: 115px;
  }
  @media (max-width: 898px) {
    width: 105px;
    height: 90px;
  }
  @media (max-width: 860px) {
    width: 100px;
    height: 85px;
  }
  @media (max-width: 650px) {
    width: 0;
    height: 0;
  }
`;
