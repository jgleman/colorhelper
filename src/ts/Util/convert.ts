import { cleanHex } from "./cleanHex";
import { rgbToHSL } from "./rgbToHSL";
import { hslToRGB } from "./hslToRGB";
import { hexToRGB } from "./hexToRGB";
import { rgbToHex } from "./rgbToHex";
import { HSLColor, RGBColor, HexColor } from "./types";

export function convertHexToHSL(color: string): HSLColor {
  const hexColor = cleanHex(color);
  const rgbColor = hexToRGB(hexColor);
  return rgbToHSL(rgbColor);
}

export function convertHexToRGB(color: string): RGBColor {
  const hexColor = cleanHex(color);
  return hexToRGB(hexColor);
}

export function convertHSLToHex(color: HSLColor): HexColor {
  const temp = hslToRGB(color);
  return rgbToHex(temp);
}

export function convertHSLToRGB(color: HSLColor): RGBColor {
  return hslToRGB(color);
}

export function rgbToCSS(color: RGBColor): string {
  const r1 = Math.round(color.r);
  const g1 = Math.round(color.g);
  const b1 = Math.round(color.b);

  const rgbAsCSS: string = `rgb(${r1}, ${g1}, ${b1})`;

  return rgbAsCSS;
}

export function hslToCSS(color: HSLColor): string {
  const h1 = Math.round(color.h);
  const s1 = Math.round(color.s * 100);
  const l1 = Math.round(color.l * 100);

  const hslAsCSS: string = `hsl(${h1}, ${s1}%, ${l1}%)`;

  return hslAsCSS;
}
