import React from "react";
import { BoxWrapper, InnerWrapper, ImageWrapper } from "../contentBox/contentBox.style";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const SkeletonActiveContentsLoad = (): JSX.Element => {
  return (
    <SkeletonInner>
      <Skeleton
        baseColor={"#d3d3d3"}
        highlightColor={"#E1E1E1D2"}
        style={{
          width: 25,
          height: 20,
          paddingBottom: 10,
          marginTop: 2,
          marginLeft: 2,
          borderRadius: 5,
        }}
      />
    </SkeletonInner>
  );
};

const SkeletonInner = styled.div``;

export default SkeletonActiveContentsLoad;
