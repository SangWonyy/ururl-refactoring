import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "@src/style/sprinkles.css";

export const button = recipe({
  base: [
    { borderRadius: "10px", height: "48px" },
    sprinkles({
      display: "flex",
      placeItems: "center",
    }),
  ],
  variants: {
    color: {
      primary: [
        sprinkles({
          backgroundColor: "primary",
          color: "white",
          border: "none",
        }),
      ],
      secondary: [
        sprinkles({ backgroundColor: "black", color: "white", border: "none" }),
      ],
      tertiary: [
        sprinkles({
          backgroundColor: "white",
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
