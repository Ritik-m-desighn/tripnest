
function DestinationCard({
  destination,
  index,
  isSaved,
  toggleWishlist,
  setModal,
}) {
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  const openDetails = () =>
    setModal({ type: "details", destination });

  return (
    <article className="group relative min-w-0 bg-[#fffefa]">
      {/* Wishlist button */}
      <button
        type="button"
        aria-label={`${isSaved ? "Remove" : "Add"} ${destination.name} ${
          isSaved ? "from" : "to"
        } wishlist`}
        aria-pressed={isSaved}
        onClick={() => toggleWishlist(destination)}
        className={`absolute right-3 top-3 z-10 grid h-[34px] w-[34px] place-items-center rounded-full bg-[#fffefaed] text-[17px] transition hover:scale-110 ${
          isSaved ? "text-[#c46f5a]" : "text-[#43544a]"
        }`}
      >
        {isSaved ? "♥" : "♡"}
      </button>

      {/* Destination image */}
      <button
        type="button"
        onClick={openDetails}
        className="relative block h-[228px] w-full overflow-hidden bg-[#e9e9df] text-left max-md:h-[clamp(150px,31vw,230px)] max-sm:h-[235px]"
      >
        <img
          src={destination.image}
          alt={`${destination.name}, ${destination.region}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.045]"
        />

        <span className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#182520]/10 to-transparent" />

        <span className="absolute bottom-[14px] left-[14px] rounded-[2px] bg-[#fffefaed] px-[10px] py-[7px] text-[9px] font-semibold text-[#39423b]">
          {destination.tag}
        </span>
      </button>

      {/* Destination information */}
      <div className="px-[2px] pt-[15px]">
        <div className="flex justify-between gap-[10px]">
          <div>
            <h3 className="font-serif text-[22px] font-medium text-[#23332d] max-md:text-[19px] max-sm:text-[21px]">
              {destination.name}
            </h3>

            <p className="mt-[5px] text-[10px] text-[#92958b]">
              {destination.region}
            </p>
          </div>

          <span className="whitespace-nowrap text-[10px] text-[#70776c]">
            <span className="text-[#c18b50]">★</span> {destination.rating}
          </span>
        </div>

        {/* Metadata and price */}
        <div className="mt-[13px] flex min-h-[39px] items-center gap-2 border-t border-[#efede6] text-[9px] text-[#85887f] max-md:flex-wrap max-md:gap-[6px]">
          <span>{destination.category}</span>

          <span className="h-[3px] w-[3px] rounded-full bg-[#c2b9a9]" />

          <span>{destination.duration}</span>

          <span className="ml-auto whitespace-nowrap">
            <strong className="text-[11px] text-[#35493d]">
              {formatPrice(destination.price)}
            </strong>{" "}
            / person
          </span>
        </div>

        {/* Details link */}
        <button
          type="button"
          onClick={openDetails}
          className="flex w-full items-center justify-between border-t border-[#efede6] pt-[11px] text-[10px] font-semibold text-[#496551]"
        >
          Take a closer look
          <span className="text-[15px] transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
            ↗
          </span>
        </button>
      </div>
    </article>
  );
}

export default DestinationCard;
