
function Wishlist({
  wishlist,
  getDestination,
  setModal,
  toggleWishlist,
  scrollTo,
}) {
  return (
    <section
      id="wishlist"
      className="bg-[#f8f7f2] px-5 py-20 sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#78817b]">
              <span className="h-px w-8 bg-[#355d4d]" />
              Keep the feeling
            </div>

            <h2 className="font-serif text-4xl text-[#23332d] sm:text-5xl">
              Your little <em>shortlist.</em>
            </h2>
          </div>

          <span className="text-sm text-[#78817b]">
            {wishlist.length} {wishlist.length === 1 ? "place" : "places"} saved
          </span>
        </div>

        {wishlist.length > 0 ? (
          <div className="divide-y divide-[#e7e5dc] border-y border-[#e7e5dc]">
            {wishlist.map((id) => {
              const destination = getDestination(id);

              if (!destination) return null;

              return (
                <div
                  key={destination.id}
                  className="flex items-center gap-4 py-5 sm:gap-6"
                >
                  <img
                    src={destination.image}
                    alt=""
                    loading="lazy"
                    className="h-20 w-24 rounded-lg object-cover sm:h-24 sm:w-32"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-serif text-xl text-[#23332d] sm:text-2xl">
                      {destination.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#78817b]">
                      {destination.region}
                    </p>
                  </div>

                  <button
                    aria-label={`View ${destination.name}`}
                    onClick={() =>
                      setModal({ type: "details", destination })
                    }
                    className="rounded-full border border-[#e7e5dc] px-4 py-2 text-sm text-[#355d4d] transition hover:bg-[#355d4d] hover:text-white"
                  >
                    View
                  </button>

                  <button
                    aria-label={`Remove ${destination.name} from wishlist`}
                    onClick={() => toggleWishlist(destination)}
                    className="rounded-full px-3 py-2 text-xl text-[#78817b] transition hover:bg-[#eeeae0] hover:text-[#23332d]"
                  >
                    ×
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-14 text-center">
            <div className="mb-4 font-serif text-5xl text-[#355d4d]">♡</div>
            <p className="text-sm text-[#78817b]">
              The places you save will find a home here.
            </p>

            <button
              onClick={() => scrollTo("destinations")}
              className="mt-5 border-b border-[#355d4d] pb-1 text-sm font-semibold text-[#355d4d]"
            >
              Find a place to love ↗
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Wishlist;
