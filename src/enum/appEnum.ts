export enum BothMarginsEum {
  Max = "max",
  Mid = "mid",
  Min = "min",
  none = "none",
}

export const ThumbnailList = [
  { id: 0, img: "./profile/urlProfile.svg" },
  { id: 1, img: "./profile/cherryProfile.svg" },
  { id: 2, img: "./profile/penguinProfile.svg" },
  { id: 3, img: "./profile/lionProfile.svg" },
  { id: 4, img: "./profile/dogProfile.svg" },
  { id: 5, img: "./profile/snowmanProfile.svg" },
  { id: 6, img: "./profile/beeProfile.svg" },
  { id: 7, img: "./profile/treeProfile.svg" },
];

export enum HeaderTabType {
  MyUrl,
  AllUrl,
  None,
}

export enum FadeoutType {
  Deep = "deep",
  Shallow = "shallow",
}

export enum ServerStatus {
  Refresh = 401,
  NeedSignUp = 601,
  ReLogin = 602,
  SuccessLogin = 700,
  TagDuplication = 800,
}

export enum ClientStatus {
  NeedLogin = 1,
}

export enum LoginState {
  Padding = 0,
  Success = 1202,
  Unknown = 1000,
  NofoundJWT = 1001,
}

export enum InfoType {
  Edit,
  SignUp,
}

export enum OrderType {
  LatestSave = "latestSave",
  DurationTime = "durationTime",
  MostRead = "mostRead",
}

export enum StaleTimeEnum {
  Default = 1000 * 60 * 5, // 5 minute
}

export enum UrlModalEnum {
  Save = "save",
  Edit = "edit",
}

export enum GtagCategory {
  Service1 = "서비스 소개1",
  Service2 = "서비스 소개2",
  Service3 = "서비스 소개3",
  Service4 = "서비스 소개4",
  Service5 = "서비스 소개5",
  Service6 = "서비스 소개6",
  Signup = "회원가입",
  CompleteSignup = "회원가입 완료 팝업",
  MyUrlTab = "MyURL탭",
  Setting = "프로필 설정",
  EtcSetting = "기타 설정",
  WithDrawal = "회원탈퇴 팝업",
}
