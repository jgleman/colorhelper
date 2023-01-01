import { useState } from "react";

import ColorPicker from "@components/ColorPicker";
import robotImg from "@assets/robot-alpha-header.png";
import { convertHexToHSL, convertHSLToHex } from "@util";

const YEAR = new Date().getFullYear();

function App() {
  const [baseColor, setBaseColor] = useState<string>("#000000");

  const hslColor = convertHexToHSL(baseColor);
  console.log({ hslColor });
  convertHSLToHex(hslColor);

  return (
    <div className="container flex h-screen max-w-none flex-col">
      <header className="flex h-20 items-center justify-items-center bg-slate-500 pt-1">
        <img
          className="h-full w-auto"
          src={robotImg}
          width="100"
          height="100"
          alt=""
        />
        <h1 className="my-auto ml-3 text-5xl font-normal leading-10 tracking-tight text-slate-50">
          Color Helper
        </h1>
      </header>
      <main className="flex-grow p-4 text-slate-700">
        <h2>Hello.</h2>
        <ColorPicker baseColor={baseColor} setBaseColor={setBaseColor} />
      </main>
      <footer className="flex h-16 items-center bg-slate-100  px-4">
        <p className="w-full text-right text-slate-600">
          &copy; {YEAR} Jason Gleman
        </p>
      </footer>
    </div>
  );
}

export default App;
