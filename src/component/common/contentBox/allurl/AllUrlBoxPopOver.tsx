import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import { BoxPopOverWrapper, Content, CloseIcon } from "../contentBox.style";
import { observer } from "mobx-react";
import toast from "react-hot-toast";
import ModalStore from "@src/store/common/modalStore";
import { useRouter } from "next/router";
import { getJWTToken } from "@src/store/localStorage/localStorage";
import { needLoginPopup } from "@src/util/openPopup";

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

const AllUrlBoxPopOver = (props: {
  urlId: number;
  url: string;
  setSelectedUrlId: Dispatch<SetStateAction<number>>;
}): JSX.Element => {
  const router = useRouter();
  const { url, urlId, setSelectedUrlId } = props;
  const copyCallback = useCallback(() => {
    setSelectedUrlId(-1);
    navigator.clipboard.writeText(url);
    notify();
  }, [url]);
  const reportClickHandler = useCallback(() => {
    if (!getJWTToken()) {
      needLoginPopup();
      return;
    }
    const { setOpenReportModal } = ModalStore;

    setOpenReportModal({ isOpen: true, urlId });
    setSelectedUrlId(-1);
  }, []);

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
            reportClickHandler();
          }}
        >
          신고
        </Content>
      </BoxPopOverWrapper>
      <CloseIcon
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setSelectedUrlId(-1);
        }}
        viewBox="0 0 29 28"
      >
        <path d="M21.75 7L7.25 21" stroke="white" />
        <path d="M7.25 7L21.75 21" stroke="white" />
      </CloseIcon>
    </>
  );
};

export default observer(AllUrlBoxPopOver);
