import { HSLColor } from "./types";
import JColor from "./JColor";

export function lighten(color: JColor, amount: number): JColor {
  const asHSL: HSLColor = { ...color.hsl };
  asHSL.l += amount / 100;
  // can't be more than 1 luminence
  if (asHSL.l > 1) {
    asHSL.l = 1;
  }
  return new JColor(asHSL);
}
