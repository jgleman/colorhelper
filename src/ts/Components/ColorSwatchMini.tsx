import Color from "@util/Color";
import { hexString } from "@util";

interface ColorSwatchMiniProps {
  color: Color;
  label?: string;
}

function ColorSwatchMini({ color, label }: ColorSwatchMiniProps) {
  return (
    <div className="flex flex-col justify-center text-center">
      <div
        className="h-7 w-7 rounded shadow"
        style={{ background: hexString(color) }}
      ></div>
      <p className="text-xs">{label}</p>
    </div>
  );
}

export default ColorSwatchMini;
