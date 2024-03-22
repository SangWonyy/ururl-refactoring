import { hashTagType } from "@src/type/tag/tagType";
import { useMutation, useQueryClient } from "react-query";
import { AddCustomTagType } from "@src/type/mainBody/mainBodyType";
import { addCustomTag, tagParam } from "@pages/api/tag/addCustomTag";
import TagListStore from "@src/store/common/TagListStore";

const useAddCustomTagMutation = (tagList: hashTagType[]) => {
  const queryClient = useQueryClient();
  return useMutation<AddCustomTagType, Error, tagParam>(
    "addTag",
    (tag) => {
      return addCustomTag(tag);
    },
    {
      onError: (error) => {
        console.error(error);
      },

      onSuccess: (newTag) => {
        // TagListStore.setTagList([...tagList, newTag]);
        queryClient.invalidateQueries("getTag");
      },
    },
  );
};

export default useAddCustomTagMutation;
