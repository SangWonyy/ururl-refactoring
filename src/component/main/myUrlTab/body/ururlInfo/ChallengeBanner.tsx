import { useCallback } from "react";
import { ClickGtagEvent } from "../../../../../../lib/gtag";
import { GtagCategory } from "@src/enum/appEnum";
import {
  BannerBadge,
  BannerBoxWrapper,
  BannerImage,
  BoldText, ChallengeImage,
  ImagePart,
  ImageWrapper,
  TextPartAllUrl,
} from "@src/component/main/myUrlTab/body/ururlInfo/banner.style";
import { useRouter } from "next/router";

const ChallengeBanner = () => {
  const handleClickBtn = useCallback(() => {
    ClickGtagEvent({
      category: GtagCategory.MyUrlTab,
      label: "Challenge",
    });
    window.open("https://ururl-official.notion.site/URURL-3-a9c62e0e21524d81bb5d2336e3b0adf7", "_blank");
  }, []);

  return (
    <BannerBoxWrapper onClick={handleClickBtn}>
      <TextPartAllUrl>
        <BannerBadge width='91px' backgroundColor="#FB6C05">챌린저 모집</BannerBadge>
        <BoldText>매주 하나씩 URL을</BoldText>
        <br />
        <BoldText>읽고 쓰는 습관</BoldText>을
        <br />
        들여보세요
      </TextPartAllUrl>
      <ImagePart>
        <ImageWrapper>
          <ChallengeImage src="./banner/challengeBanner.svg" alt="Daram" />
        </ImageWrapper>
      </ImagePart>
    </BannerBoxWrapper>
  );
};

export default ChallengeBanner;
