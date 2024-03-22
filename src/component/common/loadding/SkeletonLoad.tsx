import React from "react";
import { BoxWrapper, InnerWrapper, ImageWrapper } from "../contentBox/contentBox.style";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoad = (props: { cnt?: number }): JSX.Element => {
  const { cnt } = props;
  const emptyArray = new Array(cnt ?? 6).fill(1);

  return (
    <>
      {emptyArray.map((value, index) => {
        return (
          <BoxWrapper key={index}>
            <InnerWrapper>
              <ImageWrapper>
                <Skeleton
                  baseColor={"#d3d3d3"}
                  highlightColor={"#E1E1E1D2"}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    paddingBottom: 10,
                  }}
                />
              </ImageWrapper>
              <Skeleton
                width={"50%"}
                height={23}
                style={{
                  marginTop: 20,
                  marginLeft: 15,
                  marginRight: 15,
                  marginBottom: 10,
                }}
              />
              <Skeleton
                width={"83%"}
                height={23}
                style={{
                  marginTop: 15,
                  marginLeft: 15,
                  marginRight: 15,
                }}
              />
            </InnerWrapper>
          </BoxWrapper>
        );
      })}
    </>
  );
};

export default SkeletonLoad;
