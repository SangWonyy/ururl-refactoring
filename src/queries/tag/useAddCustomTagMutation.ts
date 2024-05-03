import { hashTagType } from "@src/type/tag/tagType";
import { AddCustomTagType } from "@src/type/mainBody/mainBodyType";
import { addCustomTag, tagParam } from "@src/app/api/tag/addCustomTag";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useAddCustomTagMutation = (tagList: hashTagType[]) => {
  const queryClient = useQueryClient();
  return useMutation<AddCustomTagType, Error, tagParam>({
    mutationKey: ["addTag"],
    mutationFn: (tag) => {
      return addCustomTag(tag);
    },
    onSuccess: () => {},
  });
};

export default useAddCustomTagMutation;
