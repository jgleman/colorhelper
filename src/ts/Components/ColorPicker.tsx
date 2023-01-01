import CopyToClipboard from "@components/CopyToClipboard";

interface ColorPickerProps {
  id: string;
  baseColor: string;
  setBaseColor?: Function;
}

function ColorPicker({ id, baseColor, setBaseColor }: ColorPickerProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    let tempValue = e.target.value;
    if (tempValue.charAt(0) !== "#") {
      tempValue = "#" + e.target.value;
    }
    if (setBaseColor) {
      setBaseColor(tempValue);
    }
  }

  return (
    <div className="justify-center-center flex w-40 flex-col gap-2 rounded border border-zinc-200 p-4">
      <label className="font-bold leading-none" htmlFor={id}>
        Color
      </label>
      <input
        className="aspect-square h-full w-full"
        type="color"
        value={baseColor}
        onChange={handleChange}
      />
      <div className="flex items-center gap-1">
        <input
          id={id}
          type="text"
          className="h-8 w-full rounded border border-zinc-400 p-2 font-mono shadow-inner"
          value={baseColor}
          readOnly={typeof setBaseColor === "undefined"}
          onChange={
            typeof setBaseColor !== "undefined" ? handleChange : undefined
          }
        />
        <CopyToClipboard value={baseColor} />
      </div>
    </div>
  );
}

export default ColorPicker;
