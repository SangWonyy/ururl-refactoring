import { useQuery } from "react-query";
import { requestChallenge } from "@pages/api/myUrl/getChallenge";
import { ChallengeResponseType } from "@src/type/mainBody/mainBodyType";
import { StaleTimeEnum } from "@src/enum/appEnum";
import ChallengeStore from "@src/store/main/body/ChallengeStore";

const useGetChallengeQuery = () => {
  return useQuery<ChallengeResponseType, Error | void, ChallengeResponseType>(
    ["ururlInfoQuery"],
    requestChallenge,
    {
      refetchOnWindowFocus: false,
      staleTime: StaleTimeEnum.Default,
      onSuccess: (data) => {
        const { challengeData, setChallengeData } = ChallengeStore;
        setChallengeData({ ...challengeData, ...data });
      },
    },
  );
};

export default useGetChallengeQuery;
