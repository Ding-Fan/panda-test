import { definePreset } from "@pandacss/dev";
import { buttonRecipe } from "./recipes/button.recipe";

export const YPreset = definePreset({
  // to avoid className conflicts
  // prefix: "y-panda-",

  // Whether to use css reset
  // preflight: true,

  // Useful for theme customization
  theme: {
    extend: {
      recipes: {
        button: buttonRecipe,
      },
      keyframes: {
        slideDown: {
          "0%": {
            height: 0,
          },
          "100%": {
            height: "var(--radix-accordion-content-height)",
          },
        },
        slideUp: {
          "0%": {
            height: "var(--radix-accordion-content-height)",
          },
          "100%": {
            height: 0,
          },
        },
        slideUpAndFade: {
          "0%": { opacity: 0, transform: "translateY(2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          "0%": { opacity: 0, transform: "translateX(-2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideDownAndFade: {
          "0%": { opacity: 0, transform: "translateY(-2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          "0%": { opacity: 0, transform: "translateX(2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },

  // https://panda-css.com/docs/references/config#emitpackage
  // emitPackage: true,
});
