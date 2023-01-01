import CopyToClipboard from "@components/CopyToClipboard";

interface ColorPickerProps {
  id: string;
  label?: string;
  baseColor: string;
  setBaseColor?: Function;
}

function ColorPicker({
  id,
  label = "Color",
  baseColor,
  setBaseColor,
}: ColorPickerProps) {
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
    <div className="justify-center-center flex flex-col gap-2 rounded border border-zinc-200">
      <label className="m-2 font-bold leading-none" htmlFor={id}>
        {label}
      </label>

      <div className="relative mx-2 mb-2 w-40 rounded">
        <input
          id={id}
          type="text"
          className="w-full rounded border border-zinc-400 px-2 pt-40 font-mono shadow-inner"
          value={baseColor}
          readOnly={typeof setBaseColor === "undefined"}
          onChange={
            typeof setBaseColor !== "undefined" ? handleChange : undefined
          }
        />
        <div className="absolute top-0 aspect-square h-40 w-40 overflow-hidden rounded-t">
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
        <div className="absolute bottom-1 right-1 h-5 w-5">
          <CopyToClipboard value={baseColor} />
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
