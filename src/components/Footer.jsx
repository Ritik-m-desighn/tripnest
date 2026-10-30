
function Footer() {
  return (
    <footer className="bg-[#23332d] px-5 pb-8 pt-12 text-white sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <a
          href="#home"
          className="inline-flex items-center gap-2 font-serif text-3xl font-bold"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#355d4d] text-xl">
            t
          </span>
          <span>
            tripnest<span className="text-[#c6a77a]">.</span>
          </span>
        </a>

        <p className="mt-4 text-sm text-white/60">
          Made for the places that make you feel something.
        </p>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Tripnest. Made for daydreamers.
          </span>

          <span>
            Frontend demo · Trips and favorites stay on this device.
          </span>

          <a
            href="#home"
            className="transition hover:text-white"
          >
            Back to the top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
