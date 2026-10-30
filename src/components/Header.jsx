
function Header({
  wishlist,
  bookings,
  mobileMenuOpen,
  setMobileMenuOpen,
  setModal,
  scrollTo,
}) {
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="relative z-50 mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-[7.1%] max-md:h-[70px] max-md:px-[6%]">
      {/* Brand */}
      <a
        href="#home"
        aria-label="Tripnest home"
        onClick={closeMenu}
        className="inline-flex items-center gap-[10px] text-2xl font-bold tracking-[-1.2px] max-md:text-[21px]"
      >
        <span className="grid h-[31px] w-[31px] place-items-center rounded-full bg-[#355d4d] font-serif text-[22px] italic text-white max-md:h-7 max-md:w-7 max-md:text-xl">
          t
        </span>

        <span>
          tripnest<span className="text-[#d78a64]">.</span>
        </span>
      </a>

      {/* Mobile menu button */}
      <button
        type="button"
        aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen((open) => !open)}
        className="hidden h-10 w-10 flex-col items-center justify-center gap-[6px] border-0 bg-transparent max-md:flex"
      >
        <span className="h-[1.5px] w-[23px] bg-[#23332d]" />
        <span className="h-[1.5px] w-[23px] bg-[#23332d]" />
      </button>

      {/* Navigation */}
      <nav
        className={`
          flex items-center gap-[37px] text-[13px] font-medium
          [&>a]:transition-colors [&>a:hover]:text-[#b96f4a]
          max-md:absolute max-md:left-[4%] max-md:right-[4%] max-md:top-[62px]
          max-md:flex-col max-md:items-stretch max-md:gap-1
          max-md:border max-md:border-[#e8e5dc] max-md:bg-[#fffefa]
          max-md:px-5 max-md:py-3 max-md:shadow-xl
          ${mobileMenuOpen ? "max-md:flex" : "max-md:hidden"}
        `}
      >
        <a href="#destinations" onClick={closeMenu} className="max-md:py-3">
          Explore
        </a>

        <a href="#about" onClick={closeMenu} className="max-md:py-3">
          Our story
        </a>

        <button
          type="button"
          onClick={() => {
            setModal({ type: "trips" });
            closeMenu();
          }}
          className="bg-transparent py-2 text-left transition-colors hover:text-[#b96f4a] max-md:py-3"
        >
          My trips
          <span className="ml-1 text-[11px] text-[#78817b]">
            {bookings.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => scrollTo("wishlist")}
          className="bg-transparent py-2 text-left transition-colors hover:text-[#b96f4a] max-md:py-3"
        >
          <span className="mr-1 text-lg text-[#bd785a]">♡</span>
          Saved
          <span className="ml-1 text-[11px] text-[#78817b]">
            {wishlist.length}
          </span>
        </button>
      </nav>
    </header>
  );
}

export default Header;

