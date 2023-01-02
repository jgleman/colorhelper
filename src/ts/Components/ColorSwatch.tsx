import CopyToClipboard from "@components/CopyToClipboard";

interface ColorSwatchProps {
  color: string;
}

function ColorSwatch({ color }: ColorSwatchProps) {
  return (
    <div className="justify-center-center flex flex-col gap-2">
      <p className="m-2 font-bold leading-none">HSL Color</p>
      <div className="relative mx-2 mb-2 w-52">
        <input
          value={color}
          type="text"
          readOnly={true}
          className="w-full border border-zinc-400 px-2 pt-52 font-mono text-sm leading-8 shadow-inner"
        />
        <div
          className="absolute top-0 aspect-square h-52 w-52 overflow-hidden border border-zinc-400"
          style={{ background: color || "hsl(0, 0%, 0%)" }}
        ></div>
        <div className="absolute bottom-0 right-1 flex h-8 w-5 items-center">
          <CopyToClipboard value={color} />
        </div>
      </div>
    </div>
  );
}

export default ColorSwatch;
