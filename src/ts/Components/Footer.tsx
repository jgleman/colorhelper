const YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="flex h-16 items-center bg-slate-100  px-4">
      <p className="w-full text-right text-slate-600">
        &copy; {YEAR} Jason Gleman
      </p>
    </footer>
  );
}
export default Footer;
