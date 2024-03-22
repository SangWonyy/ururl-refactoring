import { useCallback, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import RecommendUrls from "@src/component/main/allUrlTab/RecommendUrls";
import RemindUrls from "@src/component/main/allUrlTab/RemindUrls";
import { AllUrlSliderWrapper, Arrow } from "../mainBody.style";
import RecommendUrlContentsStore from "@src/store/url/recommendUrlContentsStore";
import { observer } from "mobx-react";

const RecommendSliderContainer = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const { unreadSubscriptions } = RecommendUrlContentsStore;
  const maxIndex = unreadSubscriptions.length === 0 ? 1 : 2;

  const sliderHandler = (isNext: boolean) => {
    const sliderCurrent = sliderRef.current;

    if (!sliderCurrent) return;

    const eventOrder = isNext ? 1 : -1;
    setCurrentPage((prevState) => prevState + eventOrder);

    isNext ? sliderCurrent.slickNext() : sliderCurrent.slickPrev();
  };

  const handleBeforeChange = useCallback((current, next) => {
    setCurrentPage(next);
    setDragging(true);
  }, []);

  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, []);

  const handleOnItemClick = useCallback(
    (e) => {
      dragging && e.stopPropagation();
    },
    [dragging],
  );

  const settings: Settings = {
    dots: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10 * 1000,
  };

  const sliderRef = useRef<Slider>(null);

  return (
    <AllUrlSliderWrapper>
      <Arrow
        direction="L"
        disable={currentPage === 0}
        src={`./common/selectArrowLeft.svg`}
        onClick={() => sliderHandler(false)}
      />
      <Arrow
        direction="R"
        disable={currentPage === maxIndex}
        src={`./common/selectArrowRight.svg`}
        onClick={() => sliderHandler(true)}
      />
      <Slider
        beforeChange={handleBeforeChange}
        afterChange={handleAfterChange}
        {...settings}
        ref={sliderRef}
        dotsClass={"slick-dots slick-dots-style slick-dots-style-recommend-url"}
      >
        <RecommendUrls type="love" handleOnItemClick={handleOnItemClick} />
        <RecommendUrls type="new" handleOnItemClick={handleOnItemClick} />
        {unreadSubscriptions.length !== 0 && <RemindUrls handleOnItemClick={handleOnItemClick} />}
      </Slider>
    </AllUrlSliderWrapper>
  );
};

export default observer(RecommendSliderContainer);
