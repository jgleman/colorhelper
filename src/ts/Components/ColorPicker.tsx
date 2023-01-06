interface ColorPickerProps {
  id: string;
  label?: string;
  baseColor: string;
  setBaseColor?: Function;
  focusOnLoad?: Boolean;
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

    if (tempValue.charAt(0) === "#") {
      tempValue = tempValue.split("#")[1];
    }
    if (setBaseColor) {
      setBaseColor(tempValue);
    }
  }

  return (
    <div className="flex w-full justify-center justify-center border-zinc-200">
      <div>
        <label className="sr-only" htmlFor={id}>
          {label}
        </label>
        <div className="flex items-center gap-2">
          <p className="text-xl text-zinc-500">#</p>
          <input
            id={id}
            placeholder="Enter a color..."
            type="text"
            className="h-10 w-72 rounded border border-zinc-200 p-2 font-mono shadow-inner"
            value={baseColor}
            readOnly={typeof setBaseColor === "undefined"}
            onChange={
              typeof setBaseColor !== "undefined" ? handleChange : undefined
            }
          />
          <div className="h-10 w-10 overflow-hidden rounded">
            <input
              className="h-10 w-10 cursor-pointer appearance-none disabled:cursor-default"
              type="color"
              value={`#${baseColor}`}
              disabled={typeof setBaseColor === "undefined"}
              readOnly={typeof setBaseColor === "undefined"}
              onChange={
                typeof setBaseColor !== "undefined" ? handleChange : undefined
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
