import DestinationCard from "./DestinationCard";

function Destinations({
  destinations,
  categories,
  category,
  setCategory,
  activeQuery,
  setActiveQuery,
  wishlist,
  toggleWishlist,
  setModal,
}) {
  return (
    <section
      id="destinations"
      className="bg-[#f8f7f2] px-5 py-20 sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#78817b]">
              Find your somewhere
            </p>
            <h2 className="font-serif text-4xl leading-tight text-[#23332d] sm:text-5xl">
              Places that stay
              <br />
              with you.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#78817b]">
            A few places worth slowing down for. Find the one that feels like
            your kind of escape.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full border px-5 py-2.5 text-sm transition ${
                category === item
                  ? "border-[#355d4d] bg-[#355d4d] text-white"
                  : "border-[#e7e5dc] bg-[#fffefa] text-[#78817b] hover:border-[#355d4d] hover:text-[#355d4d]"
              }`}
            >
              {item}
            </button>
          ))}

          {activeQuery && (
            <button
              onClick={() => setActiveQuery("")}
              className="ml-auto text-sm text-[#355d4d] underline underline-offset-4"
            >
              Clear search
            </button>
          )}
        </div>

        {destinations.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                index={index}
                isSaved={wishlist.includes(destination.id)}
                toggleWishlist={toggleWishlist}
                setModal={setModal}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#d8d8ce] bg-[#fffefa] px-6 py-16 text-center">
            <h3 className="font-serif text-2xl text-[#23332d]">
              No places found.
            </h3>
            <p className="mt-2 text-sm text-[#78817b]">
              Try another search or choose a different category.
            </p>
            <button
              onClick={() => {
                setActiveQuery("");
                setCategory("All places");
              }}
              className="mt-6 rounded-full bg-[#355d4d] px-6 py-3 text-sm text-white transition hover:bg-[#294b3d]"
            >
              Show all places
            </button>
          </div>
        )}

        <p className="mt-10 text-center text-xs tracking-wide text-[#78817b]">
          Thoughtfully picked places. No rush, no checklist.
        </p>
      </div>
    </section>
  );
}
export default Destinations;
