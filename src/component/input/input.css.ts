import { style } from "@vanilla-extract/css";
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
