import Challenge from "./Challenge";
import ActiveContents from "./ActiveContents";
import UrUrlBanner from "./UrUrlBanner";
import { observer } from "mobx-react";
import { BannerWrapper } from "./banner.style";
import useGetChallengeQuery from "@src/queries/userInfo/useGetChallengeQuery";

const Banner = function Banner(): JSX.Element {
  const { isLoading } = useGetChallengeQuery();

  return (
    <BannerWrapper>
      <Challenge isLoading={isLoading} />
      <ActiveContents isLoading={isLoading} />
      <UrUrlBanner />
    </BannerWrapper>
  );
};

export default observer(Banner);
