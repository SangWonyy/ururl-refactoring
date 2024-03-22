import { HeaderWrapper, CloseWrapper, CloseIcon, Logo, Title } from "./urlModal.style";
import urlStore from "@src/store/url/urlStore";
import { Dispatch, SetStateAction } from "react";

const UrlModalHeader = function SaveUrlHeader(props: {
  headerText: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const { headerText, setIsOpen } = props;
  return (
    <HeaderWrapper>
      <CloseWrapper>
        <CloseIcon
          src={"./common/closeIcon.svg"}
          onClick={(event) => {
            event.stopPropagation();
            setIsOpen(false);
            urlStore.setTitle(undefined);
          }}
          alt={"Image not found"}
        />
      </CloseWrapper>
      <Logo src={"./common/Logo2.svg"} />
      <Title>{headerText}</Title>
    </HeaderWrapper>
  );
};

export default UrlModalHeader;
