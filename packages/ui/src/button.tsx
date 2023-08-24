import type { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { cn } from "helpers";

const button = cva("inline-flex", {
  variants: {
    variant: {
      default: "text-red-500",
      primary: "text-4xl bg-blue-400",
      secondary: "text-xl text-red-500 bg-white text-gray-800",
    },
    size: {
      default: "h-10 px-4 py-2",
      small: "text-sm",
      medium: "text-lg",
    },
  },
  compoundVariants: [
    {
      variant: "default",
      size: "small",
      className: "uppercase",
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children?: string;
}

export function Button({
  variant,
  size,
  className,
  children,
}: ButtonProps): JSX.Element {
  return (
    <button className={cn(button({ variant, size, className }))} type="button">
      <span className={cn(button({ variant, size, className }))}>
        {children}
      </span>
    </button>
  );
}
