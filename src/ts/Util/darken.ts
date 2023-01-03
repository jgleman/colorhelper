import { HSLColor } from "./types";
import UColor from "./UColor";

export function lighten(color: UColor, amount: number): UColor {
  const asHSL: HSLColor = { ...color.hsl };
  asHSL.l += amount / 100;
  return new UColor(asHSL);
}
