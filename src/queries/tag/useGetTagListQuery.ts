import { useQuery } from "react-query";
import { TagResponseType } from "@src/type/mainBody/mainBodyType";
import { getTags } from "@pages/api/tag/getTags";
import { StaleTimeEnum } from "@src/enum/appEnum";
import TagListStore from "@src/store/common/TagListStore";

const useGetTagListQuery = () => {
  return useQuery<TagResponseType, Error | void>("getTag", getTags, {
    staleTime: StaleTimeEnum.Default,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      const { hashtags } = data;
      TagListStore.setTagList(hashtags);
    },
  });
};

export default useGetTagListQuery;
