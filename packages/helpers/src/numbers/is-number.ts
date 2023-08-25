/**
 * Takes an input and checks if the
 * value is a number (even if it is
 * originally a string)
 * @param input
 * @returns boolean
 */
export function isNumber(input: string | number): boolean {
  if (typeof input === "number") return true;
  return typeof input === "string" && !isNaN(Number(input));
}
