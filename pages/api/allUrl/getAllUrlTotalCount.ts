import { instance } from "@pages/api";

const getAllUrlTotalCount = async () => {
  const { data } = await instance.get(`/api/urlpost/count`);
  return data.response;
};

export default getAllUrlTotalCount;
