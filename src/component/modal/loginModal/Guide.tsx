import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { ClickGtagEvent } from "../../../../lib/gtag";
import { GtagCategory } from "@src/enum/appEnum";
import {
  Arrow,
  GoUseUrUrl,
  GuideImage,
  GuideImageWrapper,
  GuideText,
  GuideTextWrapper,
  LoginStartWrapper,
  PageWrapper,
  StartIcon,
  UrlWrapper,
} from "@src/component/modal/loginModal/login.style";
import KakaoLoginButton from "@src/component/modal/loginModal/KakaoLoginButton";
const slideList = [
  {
    id: 1,
    guideText: `카카오톡 나에게 보내기에\nURL이 쌓여있지는 않으신가요?\n보기 너무 어려우셨죠?`,
    img: "./common/introService/introService1.svg",
    width: 250,
    height: 370,
  },
  {
    id: 2,
    guideText: "URURL 카톡 채널에 URL을 보내면\n자동으로 웹페이지에 저장되어요!",
    img: "./common/introService/introService2.png",
    width: 250,
    height: 370,
  },
  {
    id: 3,
    guideText: "크롬 확장프로그램을 다운받고\n클릭 한 번으로 url을 더 간편하게 저장해보세요!",
    img: "./common/introService/introService3.png",
    width: 430,
    height: 370,
  },
  {
    id: 4,
    guideText: "카카오톡으로 보낸 URL들!\nMy URL에서 해시태그별로 살펴보세요",
    img: "./common/introService/introService4.png",
    width: 430,
    height: 370,
  },
  {
    id: 5,
    guideText:
      "다른 사람은 어떤 URL을 저장했을까요?\nAll URL탭에서 다른사람이 저장한 URL들을 살펴볼 수 있어요.",
    img: "./common/introService/introService5.png",
    width: 430,
    height: 370,
  },
  {
    id: 6,
    guideText: "이제 시작해볼까요?",
    img: "./common/introService/squirrel.svg",
    width: 330,
    height: 370,
  },
];

const Guide = function (): JSX.Element {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    style: { height: "93%" },
    adaptiveHeight: false,
    padding: "10px",
    infinite: false,
  };
  const sliderRef = useRef<Slider>(null);
  const clickHandler = () => {
    window.open("https://ururl-official.notion.site/URURL-c317d8e3ef714874ae633c27d8060523", "_blank");
  };
  return (
    <>
      <Slider {...settings} ref={sliderRef} dotsClass={"slick-dots slick-dots-style"}>
        {slideList.map((page, index) => {
          const { guideText, id, img, width, height } = page;
          return (
            <PageWrapper key={id}>
              <GuideTextWrapper>
                <GuideText>{guideText}</GuideText>
              </GuideTextWrapper>
              <GuideImageWrapper>
                {index !== 0 && (
                  <Arrow
                    disable={false}
                    src={"./common/arrowLeft.svg"}
                    direction={"L"}
                    onClick={() => {
                      ClickGtagEvent({
                        category: GtagCategory.Service2,
                        label: `좌측 화살표${index - 1} 버튼`,
                      });
                      sliderRef.current && sliderRef.current.slickPrev();
                    }}
                  />
                )}
                {index !== 5 && <GuideImage url={img} width={width} height={height} />}
                {index === 5 && (
                  <LoginStartWrapper height={height}>
                    <GuideImage url={img} width={width} height={height - 80} />
                    <KakaoLoginButton isWelcome />

                    <UrlWrapper>
                      <StartIcon src={"./common/endStartEmogeIcon.svg"} />
                      <GoUseUrUrl onClick={clickHandler}>URURL 200% 활용하기 →</GoUseUrUrl>
                    </UrlWrapper>
                  </LoginStartWrapper>
                )}
                <Arrow
                  disable={false}
                  src={"./common/arrowRight.svg"}
                  direction={"R"}
                  onClick={() => {
                    ClickGtagEvent({
                      category: GtagCategory.Service2,
                      label: `우측 화살표${index + 1} 버튼`,
                    });
                    sliderRef.current && sliderRef.current.slickNext();
                  }}
                />
              </GuideImageWrapper>
            </PageWrapper>
          );
        })}
      </Slider>
    </>
  );
};

export default Guide;
``;
