import { ModalTitleText, ModalTitleWrapper } from "../../userInfo/signUp/signUp.style";

const ModalHeader = function Header(props: { title: string }): JSX.Element {
  const { title } = props;
  return (
    <>
      <ModalTitleWrapper>
        <ModalTitleText>{title}</ModalTitleText>
      </ModalTitleWrapper>
    </>
  );
};

export default ModalHeader;
