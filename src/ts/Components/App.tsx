import { useState } from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import ColorPicker from "@components/ColorPicker";
import ColorSwatch from "@components/ColorSwatch";
import ColorSwatchMini from "@components/ColorSwatchMini";

import JColor from "@util/JColor";

import { lighten, darken, contrast } from "@util";

function generateMinis(color: JColor): { color: JColor; percent: number }[] {
  const minis = [];
  for (let i = 50; i > 0; i -= 5) {
    minis.push({ color: lighten(color, i), percent: i });
  }
  minis.push({ color: color, percent: 0 });
  for (let i = 5; i <= 50; i += 5) {
    minis.push({ color: darken(color, i), percent: i * -1 });
  }
  return minis;
}

function getLabel(percent: number): string {
  if (percent > 0) {
    return Math.abs(percent).toString() + "% Darker";
  } else if (percent < 0) {
    return Math.abs(percent).toString() + "% Lighter";
  }
  return "Base Color";
}

function App() {
  const [baseColor, setBaseColor] = useState<string>("336699");

  const color = new JColor(baseColor);

  const miniSelections = generateMinis(color);

  const [backgroundColor, setBackgroundColor] = useState<number>(0);
  const [foregroundColor, setForegroundColor] = useState<number>(
    miniSelections.length - 1
  );

  const backgroundColorValue =
    typeof backgroundColor === "number"
      ? miniSelections[backgroundColor]
      : undefined;
  const foregroundColorValue =
    typeof foregroundColor === "number"
      ? miniSelections[foregroundColor]
      : undefined;

  let contrastRatio = "";
  let passing = false;
  if (backgroundColorValue?.color && foregroundColorValue?.color) {
    contrastRatio = contrast(
      backgroundColorValue.color,
      foregroundColorValue.color
    );
    const part = parseFloat(contrastRatio.split(":")[0]);
    passing = part < 4.5 ? false : true;
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
        <div className="mx-auto mb-6 flex w-fit gap-2">
          <table className="border">
            <tbody>
              <tr>
                <td className="border p-1"></td>
                {miniSelections.map((m, i) => (
                  <td className="border p-1" key={i}>
                    <ColorSwatchMini
                      color={m.color}
                      label={m.percent.toString()}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border p-1 px-2">Background Color</td>
                {miniSelections.map((m, i) => (
                  <td className="border text-center" key={i}>
                    <label className="sr-only">
                      Select {m.color.hexToCSS()}
                    </label>
                    <input
                      type="checkbox"
                      value={i}
                      checked={backgroundColor === i}
                      onChange={() => {
                        setBackgroundColor(i);
                      }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border p-1 px-2">Foreground Color</td>
                {miniSelections.map((m, i) => (
                  <td className="border text-center" key={i}>
                    <label className="sr-only">
                      Select {m.color.hexToCSS()}
                    </label>
                    <input
                      type="checkbox"
                      value={i}
                      checked={foregroundColor === i}
                      onChange={() => {
                        setForegroundColor(i);
                      }}
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-center">
          <div
            className="flex h-20 w-1/2 items-center justify-center"
            style={{
              background: color.hexToCSS(),
            }}
          >
            <input
              type="text"
              className="h-8 rounded px-2 py-1.5 text-sm shadow-inner"
              value="Placeholder text..."
              readOnly
              style={{
                background: backgroundColorValue
                  ? backgroundColorValue.color.hexToCSS()
                  : "#dddddd  ",
                color: foregroundColorValue
                  ? foregroundColorValue.color.hexToCSS()
                  : "#111111  ",
              }}
            />
          </div>
        </div>
        <p className="my-4 text-center">
          Contrast Ratio between placeholder text and input background:{" "}
          {passing ? (
            <strong className="text-green-600">{contrastRatio}</strong>
          ) : (
            <strong className="text-red-600">{contrastRatio}</strong>
          )}
        </p>

        <div className="flex justify-center gap-2">
          {backgroundColorValue?.color ? (
            <ColorSwatch
              label={getLabel(backgroundColorValue.percent)}
              color={backgroundColorValue?.color}
            />
          ) : (
            <ColorSwatch label="Base Color" color={color} />
          )}

          <ColorSwatch label="Base Color" color={color} />
          {foregroundColorValue?.color ? (
            <ColorSwatch
              label={getLabel(foregroundColorValue.percent)}
              color={foregroundColorValue?.color}
            />
          ) : (
            <ColorSwatch label="Base Color" color={color} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
//&& foregroundColorValue?.color
