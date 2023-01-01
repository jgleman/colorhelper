import { HexColor } from "./types";

const HEX_REGEX = /([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/g;

export function cleanHex(color: string): HexColor {
  // strip #
  const cleanHex = color.split("#")[1] || "";
  let fullColor: HexColor = "000000";

  // validate pattern
  if (cleanHex.match(HEX_REGEX)) {
    // convert shorthand (3) to full (6)
    if (cleanHex.length === 3) {
      fullColor = [
        cleanHex.charAt(0),
        cleanHex.charAt(0),
        cleanHex.charAt(1),
        cleanHex.charAt(1),
        cleanHex.charAt(2),
        cleanHex.charAt(2),
      ].join("");
    } else {
      fullColor = cleanHex;
    }
  }
  return fullColor;
}
