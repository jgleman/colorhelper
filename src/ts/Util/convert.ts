import { cleanHex } from "./cleanHex";
import { rgbToHSL } from "./rgbToHSL";
import { hslToRGB } from "./hslToRGB";
import { hexToRGB } from "./hexToRGB";
import { rgbToHex } from "./rgbToHex";
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
  return rgbToHex(temp);
}

export function hslToCSS(color: HSLColor): string {
  const h1 = Math.round(color.h);
  const s1 = Math.round(color.s * 100);
  const l1 = Math.round(color.l * 100);

  const hslAsCSS: string = `hsl(${h1}, ${s1}%, ${l1}%)`;

  return hslAsCSS;
}
