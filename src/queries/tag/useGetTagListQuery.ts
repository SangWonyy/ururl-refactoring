import { TagResponseType } from "@src/type/mainBody/mainBodyType";
import { StaleTimeEnum } from "@src/enum/appEnum";
import TagListStore from "@src/store/common/TagListStore";
import { useQuery } from "@tanstack/react-query";
import { getTags } from "@src/app/api/tag/getTags";

const useGetTagListQuery = () => {
  const { data } = useQuery<TagResponseType, Error | void>({
    queryKey: ["getTag"],
    queryFn: getTags,
    staleTime: StaleTimeEnum.Default,
    refetchOnWindowFocus: false,
  });
  TagListStore.setTagList(data ? data.hashtags : []);
};

export default useGetTagListQuery;
