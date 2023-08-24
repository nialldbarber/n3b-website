import type { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { cn } from "helpers";

const badgeVariants = cva("py-1 px-2 rounded-2xl text-slate-900 w-fit", {
  variants: {
    variant: {
      primary: "bg-blue-500",
      secondary: "bg-purple-300",
      tertiary: "bg-green-400",
      danger: "bg-red-300",
    },
    size: {
      small: "text-sm",
      normal: "text-base",
      large: "text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "small",
  },
});

interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({
  variant,
  size,
  className,
  children,
}: BadgeProps): JSX.Element {
  return (
    <div className={cn(badgeVariants({ variant, size, className }))}>
      <span className="capsize">{children}</span>
    </div>
  );
}
