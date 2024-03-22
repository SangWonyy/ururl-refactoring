import styled from "styled-components";
import { UrUrlColor } from "@styles/urUrlStyle";

export const BoxWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 98%;
  box-shadow: 0 5px 30px rgb(0 0 0 / 0%), 6px 8px 20px rgb(22 34 51 / 4%);
  border-radius: 15px;
  background-color: white;
  cursor: pointer;
  flex-wrap: wrap;

  &:hover {
    transform: translate(0, -3%);
    transition-duration: 0.4s;
    transition-property: transform;
  }
`;

export const AddUrlBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 98%;
  background-color: #ffffff4c;
  border: 1px dashed #90949b;
  border-radius: 15px;
  flex-wrap: wrap;
  cursor: pointer;
  color: #90949b;
  fill: #90949b;

  &:hover {
    border: 1px dashed #f9b900;
    transform: translate(0, -3%);
    transition-duration: 0.4s;
    transition-property: transform;
    color: ${UrUrlColor.main};
    fill: ${UrUrlColor.main};
  }
`;

export const AddUrlInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const AddText = styled.div`
  font-weight: 500;
  font-size: 17px;
  margin-top: 15px;
`;
export const AddIcon = styled.img`
  width: 43px;
  height: 47px;
`;

export const InnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const AddUrlBoxInner = styled(InnerWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  height: 50%;
  flex: 1;
  background-color: #d3d3d3;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const BoxImage = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  object-fit: cover;
`;
// export const BoxImage = styled.div<{ url: string }>`
//   width: 100%;
//   height: 100%;
//   border-top-left-radius: 15px;
//   border-top-right-radius: 15px;
//   background-image: ${(props) => `url(${props.url})`};
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
// `;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  height: 50%;
  justify-content: space-around;
  width: 100%;
`;

export const TagsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 0 16px 0;
  gap: 10px;
  min-height: 25px;
  width: 100%;
`;

export const SkeletonWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SkeletonInnerWrapper = styled.div``;

export const Tag = styled.div`
  border-radius: 8px;
  padding: 2px 13px 2px 13px;
  font-size: 12px;
  border: 1px solid ${UrUrlColor.gray5};
  color: ${UrUrlColor.gray2};
  background-color: ${UrUrlColor.gray5};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 50px;
  line-height: 26px;

  @media screen and (max-width: 1024px) {
    min-height: 30px;
    line-height: 20px;
  }
`;

export const HoverMark = styled.img<{ subscribed: boolean }>`
  position: relative;
  width: ${(props) => (props.subscribed ? 27 : 19)}px;
  height: ${(props) => (props.subscribed ? 27 : 19)}px;
  margin-right: ${(props) => (props.subscribed ? 3 : 6)}px;
`;

export const SubscriptionIcon = styled.img`
  margin-right: 4px;
`;

export const IconWrapper = styled.div<{ right: number }>`
  position: absolute;
  right: ${(props) => props.right}px;
`;

export const HoverWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const VerticalMoreIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const Title = styled.div<{ read: boolean }>`
  font-family: ${(props) => (props.read ? "PretendardRegular" : "PretendardB")}, sans-serif;
  font-size: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: ${(props) => (props.read ? "#616161" : "#21210B")}};

  @media screen and (max-width: 1024px) {
    font-size: 17px;
  }
`;

export const ContentInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 17px 0 17px 0;
`;

export const AuthorInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const AuthorInfo = styled.div<{ read: boolean }>`
  font-size: 13px;
  margin-right: 2px;
  color: ${(props) => (props.read ? "#7A7A7A" : "#40403F")};
`;

export const DateWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;

  @media screen and (max-width: 1024px) {
    margin-top: 0;
  }
`;

export const DateInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${UrUrlColor.gray3};
`;
export const Date = styled.div`
  font-size: 13px;
  margin-top: 2px;
`;

export const ClockIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

// popover
export const Content = styled.div<{ isFirst: boolean }>`
  width: 100%;
  height: 50%;
  border-top-left-radius: ${(props) => props.isFirst && "9px"};
  border-top-right-radius: ${(props) => props.isFirst && "9px"};
  border-bottom-right-radius: ${(props) => !props.isFirst && "9px"};
  border-bottom-left-radius: ${(props) => !props.isFirst && "9px"};
  cursor: pointer;
  color: ${UrUrlColor.gray3};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;

  &:hover {
    background-color: ${UrUrlColor.gray5};
    color: black;
  }
`;

export const BoxPopOverWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 55px;
  width: 150px;
  height: 100px;
  border-radius: 9px;
  background-color: white;
  box-shadow: 3px 3px 13px rgb(0 0 0 / 6%), 4px 4px 28px rgb(143 143 143 / 9%);
`;

export const CloseIcon = styled.svg`
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const EditIconWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-items: center;
  align-items: center;
  &:hover {
    background-color: ${UrUrlColor.gray5};
  }
`;

export const EditIcon = styled.img`
  width: 50%;
  height: 50%;
  margin: auto;
`;

export const FadeOutWrapper = styled.div<{ isDeep: boolean }>`
  width: 100%;
  height: 100%;
  background: ${(props) => (props.isDeep ? "rgba(0, 0, 0, 0.5)" : "rgb(245 245 245 / 62%)")};
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
`;

export const OnlyMeIcon = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 15px;
  right: 15px;
`;
