import { useMutation, useQueryClient } from "react-query";
import { deleteCustomTag } from "@pages/api/tag/deleteCustomTag";

const useDeleteTagMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<boolean, Error, number>(
    "deleteTag",
    (tagId) => {
      return deleteCustomTag(tagId);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getTag");
      },
    },
  );
};

export default useDeleteTagMutation;
