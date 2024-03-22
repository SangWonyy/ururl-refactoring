import Slider from "react-slick";
import { useRef } from "react";

import { BoxWrapper, Arrow } from "./banner.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExtensionBanner from "@src/component/main/myUrlTab/body/ururlInfo/ExtensionBanner";
import KakaoBanner from "@src/component/main/myUrlTab/body/ururlInfo/KakaoBanner";
import ChallengeBanner from "@src/component/main/myUrlTab/body/ururlInfo/ChallengeBanner";
import styled from "styled-components";

const UrUrlBanner = function UrUrlBanner(): JSX.Element {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    style: { height: "85%" },
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: false,
    nextArrow: <Arrow src={"./common/arrowRight.svg"} direction={"right"} />,
    prevArrow: <Arrow src={"./common/arrowLeft.svg"} direction={"left"} />,
  };
  const sliderRef = useRef<Slider>(null);

  return (
    <BoxWrapper flex={2} style={{ width: "30%" }}>
      <Slider {...settings} ref={sliderRef}>
        <ExtensionBanner />
        <KakaoBanner />
      </Slider>
    </BoxWrapper>
  );
};
export const ImageWrapper = styled.div`
  position: relative;
  outline: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  cursor: pointer;

  &:hover ${Arrow} {
    display: block !important;
  }
`;

export const BannerImg = styled.img`
  object-fit: cover;
  display: block;
  border-radius: 15px;
  width: 90%;
  height: 200px;
  margin: auto;
`;
export default UrUrlBanner;
