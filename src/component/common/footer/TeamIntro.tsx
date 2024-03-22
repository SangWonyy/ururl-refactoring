import {
  FirstWrapper,
  TeamWrapper,
  TeamLogo,
  MessageWrapper,
  MessageComment,
  SendMailLogo,
  Team,
} from "./footer.style";

const teamList: readonly string[] = ["줂⭐", "채채⛄️", "봄봄🍬", "유디🎨", "허흥🦁", "티백🌊️", "스구레🐥", "범비😈"];

const TeamIntro = function TeamIntro(): JSX.Element {
  return (
    <FirstWrapper>
      <TeamWrapper>
        <TeamLogo src={"./common/footerLogo.svg"} alt={"Image not found"} />
        {teamList.map((team, index) => {
          return <Team key={index}>{team}</Team>;
        })}
      </TeamWrapper>

      <MessageWrapper>
        <MessageComment
          onClick={() => {
            if (typeof window !== "undefined") {
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSeWgd6P55oCxwlZjtcaUTakIJq4_QZI351dCPyvAkCSUwFKIw/viewform",
                "_blank",
              );
            }
          }}
        >
          URURL에게 전하고 싶은 말씀을 적어주세요
          <SendMailLogo src={"./footer/ArrowRight.svg"} alt={"Image not found"} />
        </MessageComment>
      </MessageWrapper>
    </FirstWrapper>
  );
};

export default TeamIntro;
