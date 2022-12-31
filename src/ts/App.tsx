const YEAR = new Date().getFullYear();
function App() {
  return (
    <div className="container flex h-screen max-w-none flex-col">
      <header className="flex h-16 items-center bg-slate-500 px-4 ">
        <h1 className="text-lg text-slate-50">Color Helper</h1>
      </header>
      <main className="flex-grow p-4 text-slate-700">Hello.</main>
      <footer className="flex h-16 items-center bg-slate-100  px-4">
        <p className="w-full text-right text-slate-600">
          &copy; {YEAR} Jason Gleman
        </p>
      </footer>
    </div>
  );
}

export default App;
