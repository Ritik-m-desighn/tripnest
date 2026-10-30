
import { useEffect, useMemo, useState } from "react";

import { destinations, categories } from "./data/destinations";
import { formatPrice, today, readStorage } from "./utils/helpers";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Story from "./components/Story";
import Wishlist from "./components/Wishlist";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Modal from "./components/Modal";

function App() {
  const [wishlist, setWishlist] = useState(() =>
    readStorage("tripnest-wishlist")
  );

  const [bookings, setBookings] = useState(() =>
    readStorage("tripnest-bookings")
  );

  const [query, setQuery] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [category, setCategory] = useState("All places");

  const [modal, setModal] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toast, setToast] = useState("");

  const [travelDate, setTravelDate] = useState("");
  const [travellers, setTravellers] = useState("2");

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const filteredDestinations = useMemo(() => {
    const normalizedQuery = activeQuery.trim().toLowerCase();

    return destinations.filter((destination) => {
      const matchesCategory =
        category === "All places" ||
        destination.category === category;

      const matchesSearch =
        !normalizedQuery ||
        `${destination.name} ${destination.region} ${destination.category}`
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [activeQuery, category]);

  useEffect(() => {
    if (!toast) return;

    const timeout = window.setTimeout(() => {
      setToast("");
    }, 3000);

    return () => window.clearTimeout(timeout);
  }, [toast]);

  useEffect(() => {
    if (!modal) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setModal(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [modal]);

  const saveToStorage = (key, value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Could not save ${key} to local storage.`, error);
      setToast("Your browser couldn't save this change.");
      return false;
    }
  };

  const toggleWishlist = (destination) => {
    const alreadySaved = wishlist.includes(destination.id);

    const nextWishlist = alreadySaved
      ? wishlist.filter((id) => id !== destination.id)
      : [...wishlist, destination.id];

    setWishlist(nextWishlist);

    if (saveToStorage("tripnest-wishlist", nextWishlist)) {
      setToast(
        alreadySaved
          ? `${destination.name} removed from your wishlist`
          : `${destination.name} saved to your wishlist`
      );
    }
  };

  const openBooking = (destination) => {
    setTravelDate("");
    setTravellers("2");
    setModal({ type: "booking", destination });
  };

  const submitBooking = (event) => {
    event.preventDefault();

    if (!modal?.destination) return;

    const booking = {
      id: `TN${Date.now().toString().slice(-8)}`,
      destinationId: modal.destination.id,
      date: travelDate,
      travellers: Number(travellers),
      createdAt: new Date().toISOString(),
    };

    const nextBookings = [booking, ...bookings];

    setBookings(nextBookings);
    saveToStorage("tripnest-bookings", nextBookings);

    setModal({
      type: "confirmation",
      booking,
      destination: modal.destination,
    });
  };

  const removeBooking = (bookingId) => {
    const nextBookings = bookings.filter(
      (booking) => booking.id !== bookingId
    );

    setBookings(nextBookings);

    if (saveToStorage("tripnest-bookings", nextBookings)) {
      setToast("Trip removed from your list");
    }
  };

  const submitSearch = (event) => {
    event.preventDefault();
    setActiveQuery(query);

    document
      .getElementById("destinations")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const submitNewsletter = (event) => {
    event.preventDefault();

    setNewsletterMessage(
      "Thanks! This frontend demo doesn't send emails."
    );

    setNewsletterEmail("");
  };

  const scrollTo = (id) => {
    setMobileMenuOpen(false);

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const getDestination = (id) =>
    destinations.find((destination) => destination.id === id);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f8f7f2] text-[#23332d]">
      <Header
        wishlist={wishlist}
        bookings={bookings}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setModal={setModal}
        scrollTo={scrollTo}
      />

      <Hero
        query={query}
        setQuery={setQuery}
        submitSearch={submitSearch}
      />

      <Destinations
        destinations={filteredDestinations}
        categories={categories}
        category={category}
        setCategory={setCategory}
        activeQuery={activeQuery}
        setActiveQuery={(value) => {
          setActiveQuery(value);
          if (!value) setQuery("");
        }}
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
        setModal={setModal}
      />

      <Story scrollTo={scrollTo} />

      <Wishlist
        wishlist={wishlist}
        getDestination={getDestination}
        setModal={setModal}
        toggleWishlist={toggleWishlist}
        scrollTo={scrollTo}
      />

      <Newsletter
        newsletterEmail={newsletterEmail}
        setNewsletterEmail={setNewsletterEmail}
        newsletterMessage={newsletterMessage}
        submitNewsletter={submitNewsletter}
      />

      <Footer />

      <Toast message={toast} />

      <Modal
        modal={modal}
        setModal={setModal}
        formatPrice={formatPrice}
        openBooking={openBooking}
        submitBooking={submitBooking}
        travelDate={travelDate}
        setTravelDate={setTravelDate}
        travellers={travellers}
        setTravellers={setTravellers}
        bookings={bookings}
        getDestination={getDestination}
        removeBooking={removeBooking}
        scrollTo={scrollTo}
        today={today}
      />
    </div>
  );
}

export default App;
