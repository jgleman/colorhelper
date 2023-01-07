import CopyToClipboard from "@components/CopyToClipboard";
import Color from "@util/Color";

import { hexString, rgbString, hslString } from "@util";

interface ColorSwatchProps {
  color: Color;
  label?: string;
}

function ColorSwatch({ color, label = "Color" }: ColorSwatchProps) {
  return (
    <div className="justify-center-center flex flex-col gap-2">
      <p className="m-2 font-bold leading-none">{label}</p>
      <div className="mx-2 mb-2 w-48 overflow-hidden rounded border border-zinc-400">
        <div className="">
          <div
            className="h-24 w-full overflow-hidden "
            style={{ background: hexString(color) }}
          ></div>
          <div className="flex">
            <p className="w-full px-2 font-mono text-sm leading-8">
              {hexString(color)}
            </p>
            <div className="mx-1 flex h-8 w-5 items-center">
              <CopyToClipboard value={hexString(color)} />
            </div>
          </div>
          <div className="flex">
            <p className="w-full px-2 font-mono text-xs leading-8">
              {rgbString(color)}
            </p>
            <div className="mx-1 flex h-8 w-5 items-center">
              <CopyToClipboard value={rgbString(color)} />
            </div>
          </div>
          <div className="flex">
            <p className="w-full px-2 font-mono text-xs leading-8">
              {hslString(color)}
            </p>
            <div className="mx-1 flex h-8 w-5 items-center">
              <CopyToClipboard value={hslString(color)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorSwatch;
