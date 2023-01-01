import robotImg from "@assets/robot-alpha-header.png";

function Header() {
  return (
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
  );
}
export default Header;
