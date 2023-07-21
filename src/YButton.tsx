import * as React from "react";
import { ButtonVariantProps, button } from "../styled-system/recipes";
import { cx } from "../styled-system/css";
// import YLoading from "./YLoading";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  isLoading?: boolean;
}

// const button = cva({});

// export type ButtonVariants = RecipeVariantProps<typeof button>;

// const defaultButton = cx(css({}), css({}), css({}));
// const destructiveButton = cx(defaultButton, css({}));
// const outlineButton = cx(defaultButton, css({}));
// const subtleButton = cx(defaultButton, css({}));
// const ghostButton = cx(defaultButton, css({}));
// const smButton = css({});
// const lgButton = css({});

const YButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, isLoading, children, visual, size, shape, ...props }, ref) => {
    return (
      <button
        className={cx(
          button({
            visual,
            size,
            shape,
          }),
          className
        )}
        ref={ref}
        {...{
          disabled: isLoading,
          ...props,
        }}
      >
        {isLoading ? (
          // <YLoading
          //   className={css({
          //     // "loading-sm"
          //     h: 4,
          //     w: 4,
          //   })}
          // />
          <div className="">loading...</div>
        ) : (
          children
        )}
      </button>
    );
  }
);
YButton.displayName = "YButton";

export default YButton;
