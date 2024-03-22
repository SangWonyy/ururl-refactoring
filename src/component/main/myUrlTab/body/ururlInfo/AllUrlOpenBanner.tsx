import { useCallback } from "react";
import { ClickGtagEvent } from "../../../../../../lib/gtag";
import { GtagCategory } from "@src/enum/appEnum";
import {
  BannerBadge,
  BannerBoxWrapper,
  BannerImage,
  BoldText,
  ImagePart,
  ImageWrapper,
  TextPartAllUrl,
} from "@src/component/main/myUrlTab/body/ururlInfo/banner.style";
import { useRouter } from "next/router";

const AllUrlOpenBanner = () => {
  const route = useRouter();
  const handleClickBtn = useCallback(() => {
    ClickGtagEvent({
      category: GtagCategory.MyUrlTab,
      label: "All Url Open",
    });
    window.open("https://ururl-official.notion.site/ALL-URL-cb73088435a04e0e8c4cfe82a06ccb38", "_blank");
  }, []);

  return (
    <BannerBoxWrapper onClick={handleClickBtn}>
      <TextPartAllUrl>
        <BannerBadge width='45px' backgroundColor="#4770ff">공지</BannerBadge>
        <BoldText>드디어, ALL URL탭 오픈!</BoldText>
        <br />
        <BoldText>다른 사람들은 어떤 URL</BoldText>
        을
        <br />
        저장했을까요
      </TextPartAllUrl>
      <ImagePart>
        <ImageWrapper>
          <BannerImage src="./banner/allUrlOpen.png" alt="Daram" />
        </ImageWrapper>
      </ImagePart>
    </BannerBoxWrapper>
  );
};

export default AllUrlOpenBanner;
