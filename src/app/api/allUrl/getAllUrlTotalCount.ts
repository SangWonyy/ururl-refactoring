import { instance } from "@src/app/api";

const getAllUrlTotalCount = async () => {
  const { data } = await instance.get(`/api/urlpost/count`);
  return data.response;
};

export default getAllUrlTotalCount;
