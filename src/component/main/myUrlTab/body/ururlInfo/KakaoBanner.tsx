import { useCallback } from "react";
import { ClickGtagEvent } from "../../../../../../lib/gtag";
import { GtagCategory } from "@src/enum/appEnum";
import {
  BannerBadge,
  BannerBoxWrapper,
  BoldText,
  ImagePart,
  ImageWrapper,
  KaKaoBannerImage,
  TextPartKakao,
} from "@src/component/main/myUrlTab/body/ururlInfo/banner.style";

const KakaoBanner = () => {
  const handleClickBtn = useCallback(() => {
    ClickGtagEvent({
      category: GtagCategory.MyUrlTab,
      label: "배너1(URURL 채널을 추가하고 URL을 보내보세요!)",
    });
    window.open("https://pf.kakao.com/_kjhAb", "_blank");
  }, []);

  return (
    <BannerBoxWrapper onClick={handleClickBtn}>
      <TextPartKakao>
        <BannerBadge width="45px" backgroundColor="#4770ff">공지</BannerBadge>
        <BoldText>URURL 채널을</BoldText>
        <br />
        <BoldText>추가하고</BoldText>
        <br />
        <BoldText>URL을 보내세요!</BoldText>
      </TextPartKakao>
      <ImagePart>
        <ImageWrapper>
          <KaKaoBannerImage src="./banner/kakaoBanner.svg" alt="Daram" />
        </ImageWrapper>
      </ImagePart>
    </BannerBoxWrapper>
  );
};

export default KakaoBanner;
