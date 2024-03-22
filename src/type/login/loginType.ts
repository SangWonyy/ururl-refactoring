export type SignUpType = {
  kakaoToken: string;
  nickName: string;
  defaultPhotoIdx: number;
  careerLevel: number;
  introduction: string;
  articleGoal: number;
  majors: string[];
  hashtags: number[];
};

export type tagType = {
  name: string;
};

export type TNickNameState = "duple" | "check" | "noneCheck" | "prevSame" | "init" | "prevSameInit";
