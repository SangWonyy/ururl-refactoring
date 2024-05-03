import { deleteCustomTag } from "@src/app/api/tag/deleteCustomTag";
import { useMutation } from "@tanstack/react-query";

const useDeleteTagMutation = () => {
  return useMutation<boolean, Error, number>({
    mutationKey: ["deleteTag"],
    mutationFn: (tagId) => deleteCustomTag(tagId),
    onSuccess: () => {},
  });
};

export default useDeleteTagMutation;
