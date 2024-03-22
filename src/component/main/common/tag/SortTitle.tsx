import styled from "styled-components";
import { UrUrlColor } from "@styles/urUrlStyle";
import { useState } from "react";
import SortBox from "@src/component/common/sortBox/SortBox";
import { SortIcon, TitleWrapper } from "./tag.style";
import { GtagCategory } from "@src/enum/appEnum";
import { ClickGtagEvent } from "../../../../../lib/gtag";

const SortTitle = function SortTitle(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <SortTitleWrapper>
        <TitleWrapper
          onClick={() => {
            ClickGtagEvent({
              category: GtagCategory.MyUrlTab,
              label: "정렬 버튼",
            });
            setIsOpen(!isOpen);
          }}
        >
          정렬
          <SortIcon src={"./mainBody/sortIcon.svg"} alt={"Image not found"} />
        </TitleWrapper>
        {isOpen && <SortBox setIsOpen={setIsOpen} />}
      </SortTitleWrapper>
    </>
  );
};

const SortTitleWrapper = styled.div`
  display: flex;
  position: relative;
  border-radius: 10px;
  width: 70px;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${UrUrlColor.gray0};
  }
`;

export default SortTitle;
