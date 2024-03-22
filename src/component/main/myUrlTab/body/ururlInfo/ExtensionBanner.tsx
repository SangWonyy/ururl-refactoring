import { useCallback } from "react";
import { ClickGtagEvent } from "../../../../../../lib/gtag";
import { GtagCategory } from "@src/enum/appEnum";
import {
  BannerBadge,
  BannerBoxWrapper,
  BoldText,
  ExtensionImage,
  ImagePart,
  ImageWrapper,
  TextPartExtension,
} from "@src/component/main/myUrlTab/body/ururlInfo/banner.style";

const ExtensionBanner = () => {
  const handleClickBtn = useCallback(() => {
    ClickGtagEvent({
      category: GtagCategory.MyUrlTab,
      label: "배너1(URURL 채널을 추가하고 URL을 보내보세요!)",
    });
    window.open(
      "https://chrome.google.com/webstore/detail/ururl-url%EC%9D%84-%EA%B0%80%EC%9E%A5-%EC%89%BD%EA%B2%8C-%EA%B4%80%EB%A6%AC%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95/hmbkeejbnpmhigeggakaphloaijneenc?hl=ko&authuser=0",
    );
  }, []);

  return (
    <BannerBoxWrapper onClick={handleClickBtn}>
      <TextPartExtension>
        <BannerBadge width="45px" backgroundColor="#4770ff">공지</BannerBadge>
        <BoldText>확장프로그램</BoldText>
        을 다운받고
        <br />
        <BoldText>더 편하게 URL</BoldText>
        을
        <br />
        <BoldText>저장</BoldText>
        해보세요!
      </TextPartExtension>
      <ImagePart>
        <ImageWrapper>
          <ExtensionImage src="./banner/extensionDaram.svg" alt="Daram" />
        </ImageWrapper>
      </ImagePart>
    </BannerBoxWrapper>
  );
};

export default ExtensionBanner;
