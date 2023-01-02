import { validateHex } from "./validateHex";

export function isHexColorValid(color: string): Boolean {
  // strip #
  const cleanHex = color.split("#")[1] || "";
  // validate pattern
  return validateHex(cleanHex);
}
