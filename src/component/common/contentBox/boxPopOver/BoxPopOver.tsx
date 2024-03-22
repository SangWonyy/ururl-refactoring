import { Dispatch, SetStateAction, useCallback } from "react";
import { BoxPopOverWrapper, Content, CloseIcon } from "../contentBox.style";
import { observer } from "mobx-react";
import toast from "react-hot-toast";
import ChallengeStore from "@src/store/main/body/ChallengeStore";
import useReadUrlMutation from "@src/queries/contentBox/useReadUrlMutation";

const notify = () =>
  toast.success("url 주소 복사 완료", {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });

const BoxPopOver = (props: {
  boxIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  setRead: Dispatch<SetStateAction<boolean>>;
  read: boolean;
  urlId: number;
  url: string;
}): JSX.Element => {
  const { setRead, read, urlId, url, boxIndex, setSelectedIndex } = props;
  const { challengeData } = ChallengeStore;
  const { mutate: readMutation, isLoading } = useReadUrlMutation();

  const copyCallback = useCallback(() => {
    setSelectedIndex(-1);
    navigator.clipboard.writeText(url);
    notify();
  }, [url]);

  const readCallback = useCallback(() => {
    if (isLoading) return;

    const weekReadCount = !read
      ? challengeData.weekReadCount + 1
      : challengeData.weekReadCount - 1 > 0
      ? challengeData.weekReadCount - 1
      : 0;
    const totalReadCount = !read
      ? challengeData.totalReadCount + 1
      : challengeData.totalReadCount - 1 > 0
      ? challengeData.totalReadCount - 1
      : 0;
    ChallengeStore.setChallengeData({
      ...challengeData,
      weekReadCount,
      totalReadCount,
    });

    readMutation({ urlId, cancel: read });
    setSelectedIndex(-1);
    setRead(!read);
  }, [read, boxIndex, urlId]);

  return (
    <>
      <BoxPopOverWrapper>
        <Content
          isFirst={true}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            copyCallback();
          }}
        >
          URL 주소 복사
        </Content>
        <Content
          isFirst={false}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            readCallback();
          }}
        >
          {read ? <>안 읽음 표시</> : <>읽음 표시</>}
        </Content>
      </BoxPopOverWrapper>
      <CloseIcon
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          setSelectedIndex(-1);
        }}
        viewBox="0 0 29 28"
      >
        <path d="M21.75 7L7.25 21" stroke="white" />
        <path d="M7.25 7L21.75 21" stroke="white" />
      </CloseIcon>
    </>
  );
};

export default observer(BoxPopOver);
