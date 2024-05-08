import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { global } from "@src/style/globalTheme.css";
import { responsiveProperties } from "@src/style/sprinkles.css";

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

const buttonDisabled = {
  primary: {
    ":disabled": {
      backgroundColor: global.color.primary100,
      color: global.color.primary200,
    },
  },
  secondary: {
    ":disabled": {
      backgroundColor: global.color.gray370,
      color: global.color.gray380,
    },
  },
  tertiary: {
    ":disabled": {
      backgroundColor: "white",
      color: global.color.gray370,
      border: `1px solid ${global.color.gray370}`,
    },
  },
};

const buttonHover = {
  primary: {
    ":hover": {
      backgroundColor: global.color.secondary,
      color: global.color.white,
    },
  },
  secondary: {
    ":hover": {
      backgroundColor: global.color.gray630,
      color: global.color.gray380,
    },
  },
  tertiary: {
    ":hover": {
      backgroundColor: "white",
      color: global.color.secondary,
      border: `1px solid ${global.color.secondary}`,
    },
  },
};

const buttonClick = {
  primary: {
    ":active": {
      backgroundColor: global.color.primary300,
      color: global.color.white,
    },
  },
  secondary: {
    ":active": {
      backgroundColor: global.color.gray560,
      color: global.color.gray380,
    },
  },
  tertiary: {
    ":active": {
      backgroundColor: "white",
      color: global.color.primary300,
      border: `1px solid ${global.color.primary300}`,
    },
  },
};

const buttonProperties = defineProperties({
  properties: {
    color: global.color,
    backgroundColor: global.color,
    border: buttonBorder,
    disabled: buttonDisabled,
    hover: buttonHover,
    click: buttonClick,
  },
});

export const buttonSprinkles = createSprinkles(
  responsiveProperties,
  buttonProperties
);

export type Sprinkles = Parameters<typeof buttonSprinkles>[0];
