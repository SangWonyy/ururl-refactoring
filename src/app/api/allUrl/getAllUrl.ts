import { TAllUrlTabData } from "@src/type/mainBody/mainBodyType";
import { instance } from "@src/app/api";

const getAllUrl = async (
  page = 0,
  selectedTagId: number
): Promise<TAllUrlTabData> => {
  const { data } = await instance.get(
    `/api/urlpost/all-urls?page=${page}&selectedTagId=${selectedTagId}`
  );
  return data.response;
};
export default getAllUrl;
