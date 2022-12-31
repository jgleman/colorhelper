import { useState } from "react";

import Copy from "./Images/Copy";

function Colorpicker() {
  const [selectedColor, setSelectedColor] = useState<string>("#000000");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    let tempValue = e.target.value;
    if (tempValue.charAt(0) !== "#") {
      tempValue = "#" + e.target.value;
    }
    setSelectedColor(tempValue);
  }

  return (
    <div className="justify-center-center flex w-40 flex-col gap-2 rounded border border-zinc-200 p-4">
      <label className="font-bold leading-none" htmlFor="color">
        Color
      </label>
      <input
        className="aspect-square h-full w-full"
        type="color"
        value={selectedColor}
        onChange={handleChange}
      />
      <div className="flex items-center gap-1">
        <input
          id="color"
          type="text"
          className="h-8 w-full rounded border border-zinc-400 p-2 font-mono shadow-inner"
          value={selectedColor}
          onChange={handleChange}
        />
        <Copy className="h-8 w-8 fill-zinc-400" />
      </div>
    </div>
  );
}

export default Colorpicker;
