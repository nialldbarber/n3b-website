import { createElement } from "react";
import type { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { isNumber } from "helpers";

export const textVariants = cva("text-white", {
  variants: {
    variant: {},
    level: {
      "1": "capsize text-2xl lg:text-4xl",
      "2": "capsize text-3xl",
      "3": "capsize text-2xl",
      "4": "capsize text-xl",
      "5": "capsize text-base",
      "6": "capsize text-sm",
      p: "capsize text-base",
      span: "text-base inline",
      b: "text-base",
      strong: "text-base",
      em: "text-base",
      code: "text-base",
    },
  },
  defaultVariants: {},
});

interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  withLink?: boolean;
}

export function Text({
  variant,
  className,
  level = "p",
  children,
  ...rest
}: TextProps): JSX.Element {
  const T = level && isNumber(level) ? `h${level}` : level;

  if (!T) {
    return (
      <p className={textVariants({ variant, level, className })}>{children}</p>
    );
  }

  return createElement(
    T,
    { ...rest, className: textVariants({ variant, level, className }) },
    children
  );
}
