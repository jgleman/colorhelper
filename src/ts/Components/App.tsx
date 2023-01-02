import { useState } from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import ColorPicker from "@components/ColorPicker";
import ColorSwatch from "@components/ColorSwatch";

import {
  convertHexToHSL,
  convertHSLToHex,
  hslToCSS,
  isHexColorValid,
} from "@util";

function App() {
  const [baseColor, setBaseColor] = useState<string>("#336699");

  const validColor = isHexColorValid(baseColor);

  const hslColor = convertHexToHSL(baseColor);
  const hslAsString = hslToCSS(hslColor);
  const backToHex = convertHSLToHex(hslColor);

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
          <ColorPicker
            id="convertedColor"
            baseColor={validColor ? backToHex : ""}
          />
          <ColorSwatch color={validColor ? hslAsString : ""} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
