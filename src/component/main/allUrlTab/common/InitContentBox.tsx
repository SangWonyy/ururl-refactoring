import { useMemo, useState } from "react";
import { MyContentType, TAllUrlInfo } from "@src/type/mainBody/mainBodyType";
import ContentBox from "@src/component/common/contentBox/ContentBox";
import AllUrlContentBox from "@src/component/common/contentBox/allurl/AllUrlContentBox";
import DimForLogin from "@src/component/main/allUrlTab/common/DimForLogin";

const InitContentBox = (): JSX.Element => {
  const [selectedUrlId, setSelectedUrlId] = useState<number>(-1);
  const initData = useMemo<TAllUrlInfo[]>(
    () => [
      {
        id: 0,
        thumbnail: null,
        title: "URURL 노션 메인",
        url: "",
        tags: [{ id: 1, name: "미분류" }],
        siteName: "Naver",
        subscriptionCount: 80,
        subscribed: false,
      },
      {
        id: 1,
        thumbnail: null,
        title: "URURL 서비스 소개",
        url: "",
        tags: [{ id: 2, name: "미분류" }],
        siteName: "Naver",
        subscriptionCount: 30,
        subscribed: false,
      },
      {
        id: 2,
        thumbnail: null,
        title: "URURL 개인정처리방침",
        url: "",
        tags: [{ id: 3, name: "미분류" }],
        siteName: "Daum",
        isPublic: true,
        subscriptionCount: 30,
        subscribed: false,
      },
    ],
    [],
  );

  return (
    <>
      {initData.map((content, index) => {
        const { id } = content;
        return (
          <AllUrlContentBox
            key={id}
            allUrlInfo={content}
            isSelected={false}
            subscribed={false}
            setSelectedUrlId={setSelectedUrlId}
            bookmarkHandler={() => {}}
          />
        );
      })}
      <DimForLogin />
    </>
  );
};

export default InitContentBox;
