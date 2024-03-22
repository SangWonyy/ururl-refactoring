import { makeAutoObservable, observable } from "mobx";
import { ChallengeType } from "@src/type/mainBody/mainBodyType";

class ChallengeClass {
  challengeData = <ChallengeType>{
    goal: 5,
    nickname: "no nickname",
    totalReadCount: -1,
    totalStoreCount: -1,
    weekReadCount: 3,
    weekStoreCount: 5,
  };

  initValue = <ChallengeType>{
    goal: 5,
    nickname: "no nickname",
    totalReadCount: -1,
    totalStoreCount: -1,
    weekReadCount: 3,
    weekStoreCount: 5,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setChallengeData = (challengeData: ChallengeType) => {
    this.challengeData = challengeData;
  };

  setInitValue = () => {
    this.challengeData = this.initValue;
  };
}

const ChallengeStore = new ChallengeClass();
export default ChallengeStore;
