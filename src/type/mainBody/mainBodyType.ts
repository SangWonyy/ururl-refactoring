import { hashTagType, TAllUrlTag } from "@src/type/tag/tagType";
import { OrderType } from "@src/enum/appEnum";

export type SaveUrlInfoType = {
  url: string;
  hashtags: number[];
  sourceMedium: string;
  isPublic: boolean;
  title?: string;
};

export type EditTagInfoType = {
  hashtags: number[];
  urlId: number;
  urlTitle?: string;
};

export type AddMyTagType = {
  id: number;
  name: string;
  isPublic: boolean;
};

type contentInfo = {
  platform: string;
  name: string;
};

export type ContentBoxType = {
  id: number;
  thumbnail: string;
  tags: string[];
  title: string;
  contentInfo: contentInfo;
  savedDate: string;
  min: string;
  isBookmark: boolean;
  isRead: boolean;
};

export type BothMarginsType = {
  type: string;
  value: number;
};

export type PageInfoType = {
  hasNext: boolean;
  hasPrev: boolean;
  totalNum: number;
  totalPages: number;
  currentPage: number;
};

export type NextUrlParamType = {
  nextPage: number;
  isScroll: boolean;
  prevUrlInfo: MyContentType[];
};

export type RequestUrlType = {
  orderType: OrderType;
  selectedTags: number[];
};

export type ResponseUrlType = {
  myUrl: MyContentType[];
  pageInfo: PageInfoType;
};

export type urlTag = {
  id: number;
  name: string;
};

export interface BothMarginsInterface {
  marginLeft: string;
  marginRight: string;
  height: string;
  display: string;
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
}

export type ChallengeType = {
  goal: number;
  nickname: string;
  totalReadCount: number;
  totalStoreCount: number;
  weekReadCount: number;
  weekStoreCount: number;
};

export type ChallengeResponseType = {
  goal: number;
  nickName: string;
  totalReadCount: number;
  totalStoreCount: number;
  weekReadCount: number;
  weekStoreCount: number;
};

export type TagResponseType = {
  hashtags: hashTagType[];
  selected: number[];
  status: number;
};

export type EditBookmarkType = {
  urlId: number;
  action: boolean;
  urlTags: number[];
};

export type ReadUrlType = {
  urlId: number;
  cancel: boolean;
};

export type AddCustomTagType = {
  status: number;
  id: number;
  name: string;
};

export type MyContentType = {
  id: number;
  createOn: string;
  estimatedTime: number;
  hits: number; // 해당 url을 사용자들이 저장한 횟수
  isRead: boolean; // 읽음 표시 안읽음 표시
  reads: number; // 모든 유저들이 이 게시물을 읽은 횧수
  isPublic: boolean;
  thumbnail: string | null;
  url: string;
  tags: urlTag[];
  siteName: string;
  title?: string;
};

export type SubscriptionUrl = {
  isPublic: boolean;
  sourceMedium: "WEB";
  hashtagIds: number[];
  customTitle?: string | null;
};

export type TAllUrlTabData = {
  unreadSubscriptions: []; // {}님을 기다리는 URL
  recentUrls: TAllUrlInfo[]; // 따끈따끈한 URL
  lovedUrls: TAllUrlInfo[]; // 사랑받는 URL
  hashtags: TAllUrlTag[]; // 해시태그
  allUrls: {
    // URL 목록
    page: number; // 현재 페이지
    hasNext: boolean; // 다음 페이지 존재 여부
    urls: TAllUrlInfo[]; // URL 목록
  };
};

export type TAllUrlInfo = {
  id: number;
  subscribed: boolean;
  title: string | null;
  thumbnail: string | null;
  siteName: string | null;
  subscriptionCount: number;
  tags: TPublicTag[];
  url: string;
};

export type TPublicTag = {
  id: number;
  name: string;
};

export type TUrlReportRequest = {
  pageId: number;
  reason: "DELETED" | "INAPPROPRIATE" | "ADS";
};
// DELETED: 원문이 삭제된 URL
// INAPPROPRIATE: 불쾌한 URL
// ADS: 광고성 URL
export type TUrlReportReason = {
  reason: "DELETED" | "INAPPROPRIATE" | "ADS";
};
