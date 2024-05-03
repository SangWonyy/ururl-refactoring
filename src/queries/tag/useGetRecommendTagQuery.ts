import { hashTagType } from "@src/type/tag/tagType";
import { useQuery } from "@tanstack/react-query";
import { requestRecommandTag } from "@src/app/api/tag/recommandTag";

const useGetRecommendTagQuery = (keyword: string) => {
  return useQuery<hashTagType[], Error>({
    queryKey: ["recommendTag", keyword],
    queryFn: () => requestRecommandTag(keyword),
    enabled: Boolean(keyword),
  });
};

export default useGetRecommendTagQuery;
