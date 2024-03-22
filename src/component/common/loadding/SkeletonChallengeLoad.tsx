import React from "react";
import { BoxWrapper, InnerWrapper, ImageWrapper } from "../contentBox/contentBox.style";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const SkeletonChallengeLoad = (): JSX.Element => {
  return (
    <SkeletonInner>
      <Skeleton
        baseColor={"#d3d3d3"}
        highlightColor={"#E1E1E1D2"}
        style={{
          width: "20%",
          height: 20,
          paddingBottom: 10,
          marginTop: 20,
          borderRadius: 5,
        }}
      />
      <Skeleton
        baseColor={"#d3d3d3"}
        highlightColor={"#E1E1E1D2"}
        style={{
          width: "90%",
          height: 25,
          paddingBottom: 10,
          marginTop: 20,
          borderRadius: 5,
        }}
      />
      <Skeleton
        baseColor={"#d3d3d3"}
        highlightColor={"#E1E1E1D2"}
        style={{
          width: "90%",
          height: 25,
          paddingBottom: 10,
          borderRadius: 5,
        }}
      />
      <Skeleton
        baseColor={"#d3d3d3"}
        highlightColor={"#E1E1E1D2"}
        style={{
          width: "100%",
          height: 30,
          marginTop: 28,
          paddingBottom: 10,
          borderRadius: 5,
        }}
      />
    </SkeletonInner>
  );
};

const SkeletonInner = styled.div`
  width: 100%;
  height: 100%;
`;

export default SkeletonChallengeLoad;
