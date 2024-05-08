import { keyframes, style } from "@vanilla-extract/css";
import { global } from "@src/style/globalTheme.css";
import { recipe } from "@vanilla-extract/recipes";

export const input = style({
  width: 406,
  height: 58,
  borderRadius: 10,
  fontSize: 18,
  border: `1px solid ${global.color.gray370}`,
  "::placeholder": {
    color: global.color.gray380,
    fontSize: 18,
  },
  ":focus": {
    outline: "none",
    border: `1px solid ${global.color.primary}`,
    color: global.color.gray730,
  },
});

export const inputMessage = recipe({
  base: { marginTop: 22, fontSize: 14 },
  variants: {
    color: {
      error: { color: global.color.warning },
      success: { color: global.color.success },
    },
  },
});

const dropdownKeyframe = keyframes({
  from: { height: 58 },
  to: { height: 180 },
});
export const dropdownInput = style({
  position: "relative",
  marginTop: 30,
  width: 610,
  height: 58,
  borderRadius: 10,
  fontSize: 18,
  border: `1px solid ${global.color.gray370}`,
  transformOrigin: "top",
  selectors: {
    "&:hover": {
      outline: "none",
      border: `1px solid ${global.color.primary}`,
    },
  },
});

export const dropList = style({
  position: "absolute",
  padding: 10,
  top: 53,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  borderTop: "none",
  borderBottom: `1px solid ${global.color.gray370}`,
  borderRight: `1px solid ${global.color.gray370}`,
  borderLeft: `1px solid ${global.color.gray370}`,
  width: "100%",
  height: 0,
  opacity: 0,
  visibility: "hidden",

  selectors: {
    [`${dropdownInput}:hover &`]: {
      visibility: "visible",
      height: 300,
      opacity: 1,
      transition: "0.5s height",
      borderBottom: `1px solid ${global.color.primary}`,
      borderRight: `1px solid ${global.color.primary}`,
      borderLeft: `1px solid ${global.color.primary}`,
    },
    [`${dropdownInput}:not(:hover) &`]: {
      height: 0,
      visibility: "hidden",
      opacity: 0,
      transition: "0.5s height, 0.3s visibility, 1.0s opacity",
    },
  },
});
