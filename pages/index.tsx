import type { NextPage } from "next";
import Seo from "@src/component/common/Seo";
import AllUrlTabContainer from "@src/container/mainBody/allUrlTab/AllUrlTabContainer";
import { observer } from "mobx-react";
import SaveUrlButton from "@src/component/common/body/SaveUrlButton";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <>
      <Seo
        tabTitle="URURL - URL을 가장 쉽게 관리하는 방법"
        title="URURL - URL을 가장 쉽게 관리하는 방법"
        description="PM/PO/기획자를 위한 URL 관리 사이트. 카카오톡과 확장 프로그램으로 URURL에서 URL을 편리하게 저장하고 읽어요!"
        image="https://ururl-assets.s3.ap-northeast-2.amazonaws.com/thumbnail.png"
      />
      <AllUrlTabContainer />
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
    </>
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

export default observer(Home);
