import { globalFontFace } from "@vanilla-extract/css";

const pretendardM = "Pretendard-Medium";

globalFontFace(pretendardM, {
  src: "url(../public/fonts/Pretendard-Medium.woff2) format(woff)",
  fontStyle: "normal",
  fontDisplay: "swap",
});
