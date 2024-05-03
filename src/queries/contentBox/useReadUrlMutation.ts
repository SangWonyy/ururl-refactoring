import { ReadUrlType } from "@src/type/mainBody/mainBodyType";
import { useMutation } from "@tanstack/react-query";
import { requestReadUrl } from "@src/app/api/myUrl/readUrl";

const useReadUrlMutation = () => {
  return useMutation<{ variance: number }, Error, ReadUrlType>({
    mutationKey: ["readUrl"],
    mutationFn: (urlData) => requestReadUrl(urlData),
  });
};

export default useReadUrlMutation;
