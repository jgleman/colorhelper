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

  const lighterColorA: HSLColor = { ...hslColor };
  const lighterColorB: HSLColor = { ...hslColor };
  const darkerColorA: HSLColor = { ...hslColor };
  const darkerColorB: HSLColor = { ...hslColor };

  if (validColor) {
    lighterColorA.l += 20 / 100;
    lighterColorB.l += 10 / 100;
    let darker = darkerColorA.l;
    darker -= 20 / 100;
    darkerColorA.l = Math.min(1, Math.max(0, darker));
    darker = darkerColorB.l;
    darker -= 10 / 100;
    darkerColorB.l = Math.min(1, Math.max(0, darker));
  }

  return (
    <div className="container flex h-screen max-w-none flex-col">
      <Header />
      <main className="flex-grow p-4 text-slate-700">
        <div className="mb-6 mt-2 flex">
          <ColorPicker
            id="baseColor"
            label="Enter a Color"
            baseColor={baseColor}
            setBaseColor={setBaseColor}
            focusOnLoad={true}
          />
        </div>
        <div className="flex justify-center gap-4">
          <ColorSwatch
            label="20% Lighter"
            color={validColor ? convertHSLToHex(lighterColorA) : ""}
          />
          <ColorSwatch
            label="10% Lighter"
            color={validColor ? convertHSLToHex(lighterColorB) : ""}
          />
          <ColorSwatch label="Base Color" color={validColor ? baseColor : ""} />
          <ColorSwatch
            label="10% Darker"
            color={validColor ? convertHSLToHex(lighterColorB) : ""}
          />
          <ColorSwatch
            label="20% Darker"
            color={validColor ? convertHSLToHex(lighterColorA) : ""}
          />
        </div>
        {/* <div className="flex gap-4">
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
        </div> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
