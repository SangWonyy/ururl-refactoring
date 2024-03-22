import styled from "styled-components";
import SortTitle from "./SortTitle";
import TagList from "./TagList";
import { ArrowIcon, MoreArrowIcon } from "./tag.style";
import { useRef, useState } from "react";
import { UrUrlInnerWidth } from "@styles/urUrlStyle";
const Tag = function Tag(): JSX.Element {
  const [isArrowUP, setIsArrowUP] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <TagWrapper ref={ref}>
      <SortTitle />
      <TagList isArrowUP={isArrowUP} />
      <MoreArrowIcon
        onClick={() => {
          setIsArrowUP(!isArrowUP);
        }}
      >
        <ArrowIcon
          src={isArrowUP ? "./mainBody/arrowDown.svg" : "./mainBody/arrowUp.svg"}
          alt={"Image not found"}
        />
      </MoreArrowIcon>
    </TagWrapper>
  );
};

const TagWrapper = styled.div`
  margin-bottom: 40px;
  position: relative;
  max-width: ${UrUrlInnerWidth.Max}px;
  margin-left: auto;
  margin-right: auto;
`;

export default Tag;
