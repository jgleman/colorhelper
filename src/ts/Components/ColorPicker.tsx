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
    <div className="justify-center-center flex flex-col gap-2 border-zinc-200">
      <label className="m-2 font-bold leading-none" htmlFor={id}>
        {label}
      </label>

      <div className="relative mx-2 mb-2 w-52">
        <input
          id={id}
          type="text"
          className="w-full border border-zinc-400 px-2 pt-52 font-mono text-sm leading-8 shadow-inner"
          value={baseColor}
          readOnly={typeof setBaseColor === "undefined"}
          onChange={
            typeof setBaseColor !== "undefined" ? handleChange : undefined
          }
        />
        <div className="absolute top-0 aspect-square h-52 w-52 overflow-hidden">
          <input
            className="h-full w-full cursor-pointer appearance-none rounded-none border border-zinc-400 p-0 disabled:cursor-default"
            type="color"
            value={baseColor}
            disabled={typeof setBaseColor === "undefined"}
            readOnly={typeof setBaseColor === "undefined"}
            onChange={
              typeof setBaseColor !== "undefined" ? handleChange : undefined
            }
          />
        </div>
        <div className="absolute bottom-0 right-1 flex h-8 w-5 items-center">
          <CopyToClipboard value={baseColor} />
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
