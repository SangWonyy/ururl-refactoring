import { instance } from "../index";
import { RequestUrlType, ResponseUrlType } from "@src/type/mainBody/mainBodyType";

const requestMyUrl = async (requestData: RequestUrlType, pageParam = 1): Promise<ResponseUrlType> => {
  const { orderType, selectedTags } = requestData;

  const url =
    selectedTags.length !== 0
      ? `/api/urlpost/urls?page=${pageParam}&orderMode=${orderType}&tags=${selectedTags.toString()}`
      : `/api/urlpost/urls?page=${pageParam}&orderMode=${orderType}`;

  const { data } = await instance.get(url);

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

export { requestMyUrl };
