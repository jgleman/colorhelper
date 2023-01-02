import { HexColor } from "./types";
import { validateHex } from "./validateHex";

export function cleanHex(color: string): HexColor {
  // strip #
  const cleanHex = color.split("#")[1] || "";
  let fullColor: HexColor = "000000";

  // validate pattern
  if (validateHex(cleanHex)) {
    fullColor = cleanHex;
  }

  return fullColor;
}
