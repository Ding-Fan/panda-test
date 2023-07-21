import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  name: "button",
  description: "The styles for the Button component",
  base: {
    cursor: "pointer",
    fontWeight: "medium",
    transition: "all 0.15s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    _disabled: {
      opacity: 0.75,
      cursor: "not-allowed",
    },
    _focus: {
      ring: 2,
      ringColor: "slate.400",
      ringOffset: 2,
    },
    _active: {
      scale: 0.9,
      _disabled: {
        scale: 1,
      },
    },
    _dark: {
      _focus: {
        outline: "none",
        ringColor: "slate.400",
        // ringOffset: "sla  "
      },
    },
    //  dark:focus:ring-offset-slate-900
    //   dark:data-[state=open]:bg-slate-800
    // data-[state=open]:bg-slate-100
    //        transition-colors;
  },
  variants: {
    visual: {
      default: {
        bg: "blue.300",
        color: "white",
        _hover: {
          // color:
          bg: "blue.200",
        },
        _dark: {
          bg: "slate.50",
          color: "slate.900",
          _hover: {
            bg: "slate.800",
            color: "slate.100",
          },
        },
      },
      destructive: {
        bg: "red.500",
        color: "white",
        _hover: {
          bg: "red.600",
        },
      },
      outline: {
        bg: "transparent",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "blue.300",
        _hover: {
          bg: "blue.200",
        },
      },
      subtle: {
        bg: "slate.100",
        color: "slate.900",
        _hover: {
          bg: "slate.200",
        },
        _dark: {
          bg: "slate.700",
          color: "slate.100",
        },
      },
      ghost: {
        // bg: "transparent",
        _hover: {
          bg: "gray.100",
          color: "black",
        },
        _dark: {
          color: "slate.100",
          _hover: {
            bg: "slate.800",
            color: "slate.400",
          },
        },
      },
    },
    size: {
      sm: {
        py: 1,
        px: 3,
      },
      md: {
        py: 2,
        px: 6,
      },
      lg: {
        py: 3,
        px: 9,
      },
    },
    shape: {
      square: { borderRadius: "0" },
      round: {
        rounded: "md",
      },
      circle: { borderRadius: "full" },
    },
  },
  defaultVariants: {
    visual: "default",
    size: "md",
    shape: "round",
  },
});
