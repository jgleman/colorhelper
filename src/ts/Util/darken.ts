import { HSLColor } from "./types";
import JColor from "./JColor";

export function darken(color: JColor, amount: number): JColor {
  const asHSL: HSLColor = { ...color.hsl };
  asHSL.l -= amount / 100;
  // can't be less than 0 luminence
  if (asHSL.l < 0) {
    asHSL.l = 0;
  }
  return new JColor(asHSL);
}
