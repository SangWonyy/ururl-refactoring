import { InnerWrapper, Wrapper } from "./readyTab/ready.style";
import AchievementComponent from "@src/component/main/allUrlTab/readyTab/AchievementComponent";

export async function getStaticProps() {
  return { props: {} };
}

const ReadyAllUrlTab = (props: {}): JSX.Element => {
  return (
    <Wrapper>
      <InnerWrapper>
        <AchievementComponent />
      </InnerWrapper>
    </Wrapper>
  );
};

export default ReadyAllUrlTab;
