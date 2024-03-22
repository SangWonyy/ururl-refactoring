import { instance } from "@pages/api";
import { TUrlReportRequest } from "@src/type/mainBody/mainBodyType";

const urlReport = async (props: TUrlReportRequest) => {
  const { pageId, reason } = props;
  const { data } = await instance.post(`/api/urlpost/page/${pageId}/report`, { reason });
  return data;
};

export default urlReport;
