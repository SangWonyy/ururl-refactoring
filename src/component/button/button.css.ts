import { recipe } from "@vanilla-extract/recipes";
import { buttonSprinkles } from "@src/component/button/buttonSprinkles.css";

export const button = recipe({
  base: [
    { borderRadius: "10px", height: "48px" },
    buttonSprinkles({
      display: "flex",
      placeItems: "center",
    }),
  ],
  variants: {
    color: {
      primary: [
        buttonSprinkles({
          backgroundColor: "primary",
          disabled: "primary",
          hover: "primary",
          click: "primary",
          color: "white",
          border: "none",
        }),
      ],
      secondary: [
        buttonSprinkles({
          backgroundColor: "black",
          disabled: "secondary",
          hover: "secondary",
          click: "secondary",
          color: "white",
          border: "none",
        }),
      ],
      tertiary: [
        buttonSprinkles({
          backgroundColor: "white",
          disabled: "tertiary",
          hover: "tertiary",
          click: "tertiary",
          color: "primary",
          border: "primary",
        }),
      ],
    },
    size: {
      large: {
        width: "296px",
      },
      small: {
        width: "48px",
      },
    },
  },
  defaultVariants: { size: "large", color: "primary" },
});
