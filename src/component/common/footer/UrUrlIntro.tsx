import { UrUrlWrapper, InfoText } from "./footer.style";

const introList = [
  {
    id: 1,
    type: "service",
    title: "서비스 소개",
    link: "https://www.notion.so/ururl-official/URURL-Home-CBT-1e724223643d4df6ba54976376478a58",
  },
  {
    id: 2,
    type: "privacy",
    title: "개인정보처리방침",
    link: "https://www.notion.so/ururl-official/f7073fe0379e434bbddcaa736d37aef9",
  },
  {
    id: 3,
    type: "200%",
    title: "URURL 가이드",
    link: "https://ururl-official.notion.site/URURL-c317d8e3ef714874ae633c27d8060523",
  },
  // { id: 4, type: "add", title: "제휴 및 광고 문의", link: "" },
];

const UrUrlIntro = function UrUrlIntro(): JSX.Element {
  return (
    <UrUrlWrapper>
      {introList.map((intro) => {
        const { id, type, title, link } = intro;
        return (
          <InfoText
            key={id}
            onClick={() => {
              if (typeof window !== "undefined") {
                window.open(link, "_blank");
              }
            }}
          >
            {title}
          </InfoText>
        );
      })}
    </UrUrlWrapper>
  );
};

export default UrUrlIntro;
