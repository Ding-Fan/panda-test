import { defineGlobalStyles } from "@pandacss/dev";

export const YGlobalCss = defineGlobalStyles({
  "*": {
    boxSizing: "border-box",
    p: 0,
    m: 0,
  },
  li: {
    listStyle: "none",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  "html, body": {
    scrollBehavior: "scroll-smooth",
    maxWidth: "100vw",
    overflowX: "hidden",
  },
  button: {
    all: "unset",
  },
});
