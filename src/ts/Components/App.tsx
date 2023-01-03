import { useState } from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import ColorPicker from "@components/ColorPicker";
import ColorSwatch from "@components/ColorSwatch";

import UColor from "@util/UColor";

import { lighten, darken } from "@util";

function App() {
  const [baseColor, setBaseColor] = useState<string>("#336699");
  const color = new UColor(baseColor);

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
            color={lighten(color, 20).hexToCSS()}
          />
          <ColorSwatch
            label="10% Lighter"
            color={lighten(color, 10).hexToCSS()}
          />
          <ColorSwatch label="Base Color" color={color.hexToCSS()} />
          <ColorSwatch
            label="10% Darker"
            color={darken(color, 10).hexToCSS()}
          />
          <ColorSwatch
            label="20% Darker"
            color={darken(color, 20).hexToCSS()}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
