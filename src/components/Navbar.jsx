
import { useState } from "react";

function Navbar({ bookingsCount, wishlistCount, onOpenTrips, onScrollTo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Tripnest home">
        <span className="brand-mark" aria-hidden="true">t</span>
        <span>tripnest<span className="brand-period">.</span></span>
      </a>

      <button
        aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={mobileMenuOpen}
        className="menu-toggle"
        onClick={() => setMobileMenuOpen(open => !open)}
        type="button"
      >
        <span />
        <span />
      </button>

      <nav className={`main-nav${mobileMenuOpen ? " is-open" : ""}`}>
        <a href="#destinations" onClick={closeMenu}>Explore</a>
        <a href="#about" onClick={closeMenu}>Our story</a>

        <button
          className="nav-link"
          onClick={() => {
            onOpenTrips();
            closeMenu();
          }}
          type="button"
        >
          My trips <span className="nav-count">{bookingsCount}</span>
        </button>

        <button
          className="nav-wishlist"
          onClick={() => {
            onScrollTo("wishlist");
            closeMenu();
          }}
          type="button"
        >
          <span aria-hidden="true">♡</span>
          Saved <span className="nav-count">{wishlistCount}</span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
