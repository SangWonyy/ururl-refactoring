import { useMutation } from "react-query";
import urlReport from "@pages/api/allUrl/urlReport";
import { TUrlReportRequest } from "@src/type/mainBody/mainBodyType";
import { Dispatch, SetStateAction } from "react";
import ModalStore from "@src/store/common/modalStore";
import { successToast } from "@src/util/toast";

const useUrlReportMutation = (setLoading: Dispatch<SetStateAction<boolean>>) => {
  return useMutation<void, Error, TUrlReportRequest>(
    ["useUrlReportMutation"],
    (reportInfo) => urlReport(reportInfo),
    {
      onSuccess: () => {
        const { setOpenReportModal } = ModalStore;

        setOpenReportModal({ isOpen: false, urlId: -1 });
        successToast("신고가 완료되었습니다");
      },
      onSettled: () => {
        setLoading(false);
      },
    },
  );
};
export default useUrlReportMutation;
