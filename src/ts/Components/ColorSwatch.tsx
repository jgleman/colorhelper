interface ColorSwatchProps {
  color: string;
}

function ColorSwatch({ color }: ColorSwatchProps) {
  return (
    <div className="justify-center-center flex flex-col gap-2 rounded border border-zinc-200 p-4">
      <p className="font-bold leading-none">HSL Color</p>
      <div
        className="h-40 w-40 rounded border-0 p-0"
        style={{ background: color }}
      ></div>
      <p className="h-12 text-sm leading-8">{color}</p>
    </div>
  );
}

export default ColorSwatch;
