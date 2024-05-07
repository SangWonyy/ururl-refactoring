import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const global = createGlobalTheme(":root", {
  fontSize: {
    h1: "48px",
    h2: "36px",
    h3: "32px",
    h4: "24px",
    h5: "18px",
    h6: "16px",
    b1: "24px",
    b2: "18px",
    b3: "16px",
    b4: "14px",
    b5: "12px",
  },
  color: {
    main: "#F9B900",
    secondary: "#FFCC37",
    warning: "#F11D1D",
    success: "#4CC297",
    white: "#FFFFFF",
    gray100: "#FCFCFC",
    gray150: "#F5F5F5",
    gray200: "#F5F5F5",
    gray250: "#E8E8E8",
    gray300: "#DFDFDF",
    gray350: "#C8C8C8",
    gray400: "#B7B7B7",
    gray450: "#949494",
    gray500: "#777777",
    gray550: "#777777",
    gray600: "#555555",
    gray650: "#3F3F3F",
    gray700: "#383838",
    gray750: "#2A2A2A",
    gray800: "#1F1F1F",
    gray900: "#1A1A1A",
    gray950: "#111111",
    black: "#000000",
  },
});

globalStyle("*", {
  boxSizing: "border-box",
});
