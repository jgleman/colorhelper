import { useState } from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import ColorPicker from "@components/ColorPicker";
import ColorSwatch from "@components/ColorSwatch";

import {
  convertHexToHSL,
  convertHSLToHex,
  convertHexToRGB,
  convertHSLToRGB,
  hslToCSS,
  rgbToCSS,
  isHexColorValid,
} from "@util";

import { HSLColor } from "@util/types";

function App() {
  const [baseColor, setBaseColor] = useState<string>("#336699");

  const validColor = isHexColorValid(baseColor);

  const hslColor = convertHexToHSL(baseColor);
  const rgbColor = convertHexToRGB(baseColor);

  const lighterColor: HSLColor = { ...hslColor };
  const darkerColor: HSLColor = { ...hslColor };

  if (validColor) {
    lighterColor.l += 20 / 100;
    let darker = darkerColor.l;
    darker -= 20 / 100;
    darkerColor.l = Math.min(1, Math.max(0, darker));
  }

  const darkerAsRGB = convertHSLToRGB(darkerColor);

  return (
    <div className="container flex h-screen max-w-none flex-col">
      <Header />
      <main className="flex-grow p-4 text-slate-700">
        <h2 className="mb-4 text-xl">Enter a color:</h2>
        <div className="mb-4 flex">
          <ColorPicker
            id="baseColor"
            label="Base Color"
            baseColor={baseColor}
            setBaseColor={setBaseColor}
            focusOnLoad={true}
          />
        </div>
        <div className="flex gap-4">
          <ColorSwatch
            label="20% Lighter"
            color={validColor ? convertHSLToHex(lighterColor) : ""}
          />
          <ColorSwatch
            label="20% Darker"
            color={validColor ? convertHSLToHex(darkerColor) : ""}
          />
          <ColorSwatch
            label="20% Darker RGB"
            color={validColor ? rgbToCSS(darkerAsRGB) : ""}
          />
        </div>
        <div className="flex gap-4">
          <ColorSwatch
            label="Verified Color"
            color={validColor ? convertHSLToHex(hslColor) : ""}
          />
          <ColorSwatch
            label="RGB Color"
            color={validColor ? rgbToCSS(rgbColor) : ""}
          />
          <ColorSwatch
            label="HSL Color"
            color={validColor ? hslToCSS(hslColor) : ""}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
