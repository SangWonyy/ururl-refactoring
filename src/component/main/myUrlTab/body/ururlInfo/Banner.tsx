import UrUrlBanner from "./UrUrlBanner";
import { observer } from "mobx-react-lite";
import { BannerWrapper } from "./banner.style";

const Banner = function Banner(): JSX.Element {
  return (
    <BannerWrapper>
      <UrUrlBanner />
    </BannerWrapper>
  );
};

export default observer(Banner);
