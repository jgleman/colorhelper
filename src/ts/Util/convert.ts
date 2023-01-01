import { cleanHex } from "./cleanHex";
import { rgbToHSL } from "./rgbToHSL";
import { hslToRGB } from "./hslToRGB";
import { hexToRGB } from "./hexToRGB";
import { HSLColor } from "./types";

export function convertHexToHSL(color: string): any {
  const hexColor = cleanHex(color);
  const rgbColor = hexToRGB(hexColor);
  return rgbToHSL(rgbColor);
}

export function convertHexToRGB(color: string): any {
  const hexColor = cleanHex(color);
  const temp = hexToRGB(hexColor);
  console.log(temp);
}

export function convertHSLToHex(color: HSLColor): any {
  const temp = hslToRGB(color);
  console.log(temp);
}
