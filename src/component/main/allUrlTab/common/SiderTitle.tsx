import { SubTitle, SubTitleWrapper, Title, TitleWrapper, Nickname } from "@src/component/main/main.style";

const SiderTitle = (props: { title: string; subtitle: string; nickname?: string }): JSX.Element => {
  const { title, subtitle, nickname } = props;

  return (
    <TitleWrapper>
      <Title>{title}</Title>
      <SubTitleWrapper>
        {nickname && <Nickname>{nickname}님,&nbsp;&nbsp;</Nickname>}
        <SubTitle>{subtitle}</SubTitle>
      </SubTitleWrapper>
    </TitleWrapper>
  );
};

export default SiderTitle;
