import Clipboard from "@components/Images/Clipboard";

interface CopyToClipboardProps {
  value: string;
}

function CopyToClipboard({ value }: CopyToClipboardProps) {
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(
      function () {
        // eventually, add logic to temp change the UI to indicate copy was successful
      },
      function (e) {
        console.log({ e });
      }
    );
  }

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        copyToClipboard(value);
      }}
      className="group h-8 w-8 rounded p-1 transition-all hover:bg-zinc-100 active:shadow-inner"
    >
      <span className="sr-only">Copy {value} to clipbaord</span>
      <Clipboard
        title={`Copy ${value} to clipbaord}`}
        className="h-6 w-6 fill-zinc-400 transition-all group-hover:fill-blue-400"
      />
    </button>
  );
}

export default CopyToClipboard;
