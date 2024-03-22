import TeamIntro from "@src/component/common/footer/TeamIntro";
import EmptyLine from "@src/component/common/footer/EmptyLine";
import UrUrlIntro from "@src/component/common/footer/UrUrlIntro";
import CopyRight from "@src/component/common/footer/CopyRight";
import { FooterWrapper, FooterInner } from "@src/component/common/footer/footer.style";

const FooterContainer = function Footer(): JSX.Element {
  return (
    <FooterWrapper>
      <FooterInner>
        <TeamIntro />
        <EmptyLine />
        <UrUrlIntro />
        <CopyRight />
      </FooterInner>
    </FooterWrapper>
  );
};

export default FooterContainer;
