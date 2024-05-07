import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { global } from "@src/style/globalTheme.css";

const space = {
  none: 0,
  small: "4px",
  medium: "8px",
  large: "16px",
};

const buttonBorder = {
  none: 0,
  primary: `1px solid ${global.color.primary}`,
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

const buttonColorProperties = defineProperties({
  properties: {
    color: global.color,
    backgroundColor: global.color,
    border: buttonBorder,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  buttonColorProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
