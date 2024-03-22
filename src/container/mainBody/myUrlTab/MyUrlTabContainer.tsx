import Contents from "@src/component/main/myUrlTab/body/Contents";
import Banner from "@src/component/main/myUrlTab/body/ururlInfo/Banner";
import { MainBodyInner, MainBodyWrapper } from "@src/container/mainBody/mainBody.style";
import Tag from "@src/component/main/common/tag/Tag";
import useGetTagListQuery from "@src/queries/tag/useGetTagListQuery";
import SaveUrlButton from "@src/component/common/body/SaveUrlButton";
import styled from "styled-components";

const MyUrlTabContainer = (): JSX.Element => {
  useGetTagListQuery();

  return (
    <MainBodyWrapper>
      <MainBodyInner>
        <Banner />
        <Tag />
        <Contents />
      </MainBodyInner>
      <ScrollUpIcon
        src={"./common/scrollUpIcon.svg"}
        onClick={() => {
          if (typeof window !== "undefined") {
            window.scrollTo(0, 0);
          }
        }}
        alt={"Image not found"}
      />
      <SaveUrlButton />
    </MainBodyWrapper>
  );
};
const ScrollUpIcon = styled.img`
  cursor: pointer;
  width: 150px;
  height: 150px;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 100;
`;
export default MyUrlTabContainer;
