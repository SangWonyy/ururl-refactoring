import { useMutation } from "react-query";
import { ReadUrlType } from "@src/type/mainBody/mainBodyType";
import { requestReadUrl } from "@pages/api/myUrl/readUrl";
import ChallengeStore from "@src/store/main/body/ChallengeStore";

const useReadUrlMutation = () => {
  return useMutation<{ variance: number }, Error, ReadUrlType>("readUrl", (urlData) => {
    return requestReadUrl(urlData);
  });
};

export default useReadUrlMutation;
