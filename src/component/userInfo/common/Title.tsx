import { TitleWrapper, TitleText } from "../signUp/signUp.style";
import { Dispatch, SetStateAction } from "react";
const Title = (props: { title: string; color?: string }): JSX.Element => {
  const { title, color = "#333333" } = props;

  return (
    <TitleWrapper color={color}>
      <TitleText>{title}</TitleText>
    </TitleWrapper>
  );
};

export default Title;
