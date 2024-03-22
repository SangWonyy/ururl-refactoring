import { instance } from "../index";
import {  ResponseUrlType } from "@src/type/mainBody/mainBodyType";

const requestSearch = async (search: string, pageParam = 1): Promise<ResponseUrlType> => {
  const { data } = await instance.get("/api/urlpost/urls", {
    params: {
      page: pageParam,
      search,
    },
  });
  const response = data.response;
  const { urls, totalNum, totalPages, hasNext, hasPrev } = response;

  return {
    myUrl: urls,
    pageInfo: {
      totalNum,
      currentPage: pageParam,
      totalPages,
      hasNext,
      hasPrev,
    },
  };
};

export { requestSearch };
