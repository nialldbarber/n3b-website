import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Using clsx & twMerge, this formats
 * a class without style conflicts
 * @param values
 * @returns string
 */
export function cn(...values: ClassValue[]) {
  return twMerge(clsx(values));
}
