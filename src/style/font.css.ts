import { globalFontFace, style } from "@vanilla-extract/css";

const pretendardM = "Pretendard-Medium";

globalFontFace(pretendardM, {
  src: "url(../public/fonts/Pretendard-Medium.woff2) format(woff)",
  fontStyle: "normal",
  fontDisplay: "swap",
});

export const pretendardMFont = style({
  fontFamily: pretendardM,
});

/*@font-face {*/
/*  font-family: "Pretendard-Medium";*/
/*  src:url("../public/fonts/Pretendard-Medium.woff2") format("woff");*/
/*  font-style: normal;*/
/*  font-display: swap;*/
/*}*/

/*@font-face {*/
/*  font-family: "PretendardRegular";*/
/*  src:url("../public/fonts/Pretendard-Regular.woff2") format("woff");*/
/*  font-style: normal;*/
/*  font-display: swap;*/
/*}*/

/*@font-face {*/
/*  font-family: "PretendardB";*/
/*  src: url("../public/fonts/Pretendard-Bold.woff2") format("woff");*/
/*  font-style: normal;*/
/*  font-display: swap;*/
/*}*/

/*@font-face {*/
/*  font-family: "PretendardExB";*/
/*  src: url("../public/fonts/Pretendard-ExtraBold.woff2") format("woff");*/
/*  font-style: normal;*/
/*  font-display: swap;*/
/*}*/

/*@font-face {*/
/*  font-family: "PretendardSemiB";*/
/*  src: url("../public/fonts/Pretendard-ExtraBold.woff2") format("woff");*/
/*  font-style: normal;*/
/*  font-display: swap;*/
/*}*/
