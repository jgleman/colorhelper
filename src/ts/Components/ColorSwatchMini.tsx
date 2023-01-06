import JColor from "@util/JColor";

interface ColorSwatchMiniProps {
  color: JColor;
  label?: string;
}

function ColorSwatchMini({ color, label }: ColorSwatchMiniProps) {
  return (
    <div className="flex flex-col justify-center text-center">
      <div
        className="h-7 w-7 rounded shadow"
        style={{ background: color.hexToCSS() }}
      ></div>
      <p className="text-xs">{label}</p>
    </div>
  );
}

export default ColorSwatchMini;
