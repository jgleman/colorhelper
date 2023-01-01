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
    <div className="justify-center-center flex flex-col gap-2 rounded border border-zinc-200 p-4">
      <label className="font-bold leading-none" htmlFor={id}>
        Color
      </label>
      <div className="aspect-square h-40 w-40 overflow-hidden rounded">
        <input
          className="h-full w-full cursor-pointer appearance-none border-0 p-0 disabled:cursor-default"
          type="color"
          value={baseColor}
          disabled={typeof setBaseColor === "undefined"}
          readOnly={typeof setBaseColor === "undefined"}
          onChange={
            typeof setBaseColor !== "undefined" ? handleChange : undefined
          }
        />
      </div>
      <div className="flex w-40 items-center gap-1">
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
