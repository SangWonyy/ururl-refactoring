import { hashTagType } from "@src/type/tag/tagType";

export type TCarreerLevel =
  | "CareerLevel.JUNIOR"
  | "CareerLevel.INTERMEDIATE"
  | "CareerLevel.SENIOR"
  | "CareerLevel.SUPER_SENIOR"
  | null;

export type UserInfoType = {
  nickName: string;
  careerLevel: TCarreerLevel;
  introduction: string;
  articleGoal: number | string;
  defaultPhotoIdx: number;
  major: string;
  hashtags: hashTagType[];
  attributes: { isVisibleInterviewPopup: boolean };
  kakaoToken?: string | null;
};

export type TInterviewResponse = {
  success: boolean;
  response: { email: string } | null;
  error: {
    status: number;
    message: string;
  } | null;
};
