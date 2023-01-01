import { HexColor, RGBColor } from "./types";

export function rgbToHex(rgbColor: RGBColor): HexColor {
  const rPart = Math.round(rgbColor.r).toString(16);
  console.log({ rPart });
  const gPart = Math.round(rgbColor.g).toString(16);
  console.log({ gPart });
  const bPart = Math.round(rgbColor.b).toString(16);
  console.log({ bPart });

  const hexColor: HexColor = [
    "#",
    rPart === "0" ? "00" : rPart,
    gPart === "0" ? "00" : gPart,
    ,
    bPart === "0" ? "00" : bPart,
    ,
  ].join("");

  return hexColor;
}
