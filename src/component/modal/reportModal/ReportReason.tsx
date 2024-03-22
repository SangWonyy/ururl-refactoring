import {
  BtnWrapper,
  ReportBtn,
  ReportReasonListWrapper,
  ReportReasonText,
  ReportReasonWrapper,
  ReportRoundButton,
  ReportRoundInnerDot,
  ReportTitle,
  ReportWrapper,
} from "./report.style";
import { useMemo, useState } from "react";
import { UrUrlColor } from "@styles/urUrlStyle";
import useUrlReportMutation from "@src/queries/allUrl/useUrlReportMutation";
import { CircularProgress } from "@material-ui/core";
import ModalStore from "@src/store/common/modalStore";

const ReportReason = (): JSX.Element => {
  const { setOpenReportModal, openReportModal } = ModalStore;
  const { urlId } = openReportModal;
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>(-1);
  const { mutate } = useUrlReportMutation(setLoading);

  const reasonList = useMemo<
    { id: number; reason: string; type: "DELETED" | "ADS" | "INAPPROPRIATE" }[]
  >(() => {
    return [
      { id: 0, reason: "원문이 삭제된 URL", type: "DELETED" },
      { id: 1, reason: "광고성 URL", type: "ADS" },
      { id: 2, reason: "불쾌한 URL", type: "INAPPROPRIATE" },
    ];
  }, []);
  return (
    <ReportWrapper>
      <ReportTitle>신고 이유를 선택해주세요</ReportTitle>
      <ReportReasonListWrapper>
        {reasonList.map((reasonValue) => {
          const { id, reason } = reasonValue;
          const isSelected = id === selectedId;
          return (
            <ReportReasonWrapper key={id} onClick={() => setSelectedId(id)}>
              <ReportRoundButton isSelected={isSelected}>
                <ReportRoundInnerDot isSelected={isSelected} />
              </ReportRoundButton>
              <ReportReasonText>{reason}</ReportReasonText>
            </ReportReasonWrapper>
          );
        })}
      </ReportReasonListWrapper>
      <BtnWrapper>
        <ReportBtn
          backgroundColor={UrUrlColor.gray5}
          color={UrUrlColor.gray3}
          style={{ marginRight: 10 }}
          onClick={() => setOpenReportModal({ isOpen: false, urlId: -1 })}
        >
          {loading ? <CircularProgress style={{ margin: "auto" }} size={20} color="inherit" /> : "취소"}
        </ReportBtn>
        <ReportBtn
          backgroundColor={UrUrlColor.main}
          color="white"
          onClick={() => {
            setLoading(true);
            mutate({ pageId: urlId, reason: reasonList[selectedId].type });
          }}
        >
          {loading ? <CircularProgress style={{ margin: "auto" }} size={20} color="inherit" /> : "신고하기"}
        </ReportBtn>
      </BtnWrapper>
    </ReportWrapper>
  );
};
export default ReportReason;
