import { createElement } from "react";
import type { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { isNumber } from "helpers";

export const textVariants = cva("", {
  variants: {
    variant: {},
    size: {},
  },
  defaultVariants: {},
});

interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  level:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "p"
    | "span"
    | "b"
    | "strong"
    | "em"
    | "code";
}

export function Text({
  variant,
  size,
  className,
  level = "p",
  children,
  ...rest
}: TextProps): JSX.Element {
  const T = isNumber(level) ? `h${level}` : level;

  return createElement(
    T,
    { ...rest, className: textVariants({ variant, size, className }) },
    children
  );
}
