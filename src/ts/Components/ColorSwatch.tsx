interface ColorSwatchProps {
  color: string;
}

function ColorSwatch({ color }: ColorSwatchProps) {
  return (
    <div className="justify-center-center flex flex-col gap-2 rounded border border-zinc-200">
      <p className="m-2 font-bold leading-none">HSL Color</p>
      <div
        className="mx-2 h-40 w-40 rounded"
        style={{ background: color || "hsl(0, 0%, 0%)" }}
      ></div>
      <p className="mx-2 mb-2 text-sm leading-none">{color}</p>
    </div>
  );
}

export default ColorSwatch;
