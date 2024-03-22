import { useQuery } from "react-query";
import { hashTagType } from "@src/type/tag/tagType";
import { requestRecommandTag } from "@pages/api/tag/recommandTag";

const useGetRecommendTagQuery = (keyword: string) => {
  return useQuery<hashTagType[], Error>(["recommendTag", keyword], () => requestRecommandTag(keyword), {
    enabled: Boolean(keyword),
  });
};

export default useGetRecommendTagQuery;
