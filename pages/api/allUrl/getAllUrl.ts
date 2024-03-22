import { instance } from "@pages/api";
import { TAllUrlTabData } from "@src/type/mainBody/mainBodyType";

const getAllUrl = async (page = 0, selectedTagId: number): Promise<TAllUrlTabData> => {
  const { data } = await instance.get(`/api/urlpost/all-urls?page=${page}&hashtagId=${selectedTagId}`);
  return data.response;
};
export default getAllUrl;
