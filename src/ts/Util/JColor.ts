import { HexColor, RGBColor, HSLColor } from "./types";
import { hexToRGB } from "./hexToRGB";
import { rgbToHSL } from "./rgbToHSL";
import { rgbToHex } from "./rgbToHex";
import { hslToRGB } from "./hslToRGB";

import { parseHSL } from "./parseHSL";
import { parseRGB } from "./parseRGB";

const HEX_REGEX = /([a-fA-F0-9]{6})/g;

export interface ColorType {
  hex: HexColor;
  rgb: RGBColor;
  hsl: HSLColor;
}

class JColor implements ColorType {
  hex!: HexColor;
  rgb!: RGBColor;
  hsl!: HSLColor;

  constructor(color: any) {
    if (typeof color === "string") {
      if (color.charAt(0) === "#") {
        // is input a string
        const hexColor = color.split("#")[1] || "";
        this.hex = hexColor;
        this.rgb = hexToRGB(hexColor);
        this.hsl = rgbToHSL(this.rgb);
      } else if (typeof color === "string" && color.length === 6) {
        // is input a HexColor
        this.hex = color;
        this.rgb = hexToRGB(color);
        this.hsl = rgbToHSL(this.rgb);
      } else if (color.startsWith("hsl(") || color.startsWith("hsla(")) {
        this.hsl = parseHSL(color);
        this.rgb = hslToRGB(this.hsl);
        this.hex = rgbToHex(this.rgb);
      } else if (color.startsWith("rgb(") || color.startsWith("rgba(")) {
        this.rgb = parseRGB(color);
        this.hsl = rgbToHSL(this.rgb);
        this.hex = rgbToHex(this.rgb);
      }
    } else if (typeof color.h !== "undefined") {
      // is input a HSLColor
      this.hsl = color;
      this.rgb = hslToRGB(color);
      this.hex = rgbToHex(this.rgb);
    } else if (typeof color.r !== "undefined") {
      // is input a HSLColor
      this.rgb = color;
      this.hsl = rgbToHSL(this.rgb);
      this.hex = rgbToHex(this.rgb);
    } else {
      this.hex = "000000";
      this.rgb = hexToRGB(this.hex);
      this.hsl = rgbToHSL(this.rgb);
    }
  }

  hexToCSS(): string {
    return this.isValid() ? "#" + this.hex : "";
  }

  rgbToCSS(): string {
    if (!this.isValid()) return "";

    const r1 = Math.round(this.rgb.r);
    const g1 = Math.round(this.rgb.g);
    const b1 = Math.round(this.rgb.b);

    const rgbAsCSS: string = `rgb(${r1} ${g1} ${b1})`;

    return rgbAsCSS;
  }

  hslToCSS(): string {
    if (!this.isValid()) return "";

    const h1 = Math.round(this.hsl.h);
    const s1 = Math.round(this.hsl.s * 100);
    const l1 = Math.round(this.hsl.l * 100);

    const hslAsCSS: string = `hsl(${h1} ${s1}% ${l1}%)`;

    return hslAsCSS;
  }

  isValid() {
    return this.hex?.match(HEX_REGEX) ? true : false || false;
  }
}

export default JColor;
