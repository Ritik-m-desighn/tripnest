
function Modal({
  modal,
  setModal,
  formatPrice,
  openBooking,
  submitBooking,
  travelDate,
  setTravelDate,
  travellers,
  setTravellers,
  bookings,
  getDestination,
  removeBooking,
  scrollTo,
  today,
}) {
  if (!modal) return null;

  const destination = modal.destination;

  return (
    <div
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setModal(null);
      }}
      className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-black/50 p-4 backdrop-blur-sm"
    >
      <section
        aria-labelledby="modal-title"
        aria-modal="true"
        role="dialog"
        className="relative my-auto max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-[#fffefa] shadow-2xl"
      >
        <button
          aria-label="Close dialog"
          onClick={() => setModal(null)}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl text-[#23332d] shadow"
        >
          ×
        </button>

        {modal.type === "details" && (
          <>
            <img
              alt={`${destination.name}, ${destination.region}`}
              src={destination.image}
              className="h-64 w-full object-cover"
            />

            <div className="p-7 sm:p-9">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#78817b]">
                {destination.category} · {destination.duration}
              </p>

              <h2
                id="modal-title"
                className="font-serif text-4xl text-[#23332d]"
              >
                {destination.name}.
              </h2>

              <p className="mt-2 text-sm text-[#78817b]">
                {destination.region} · ★ {destination.rating}
              </p>

              <p className="mt-6 text-sm leading-7 text-[#78817b]">
                {destination.description}
              </p>

              <div className="mt-8 flex flex-col justify-between gap-5 border-t border-[#e7e5dc] pt-6 sm:flex-row sm:items-center">
                <p className="text-sm text-[#78817b]">
                  <strong className="text-xl text-[#23332d]">
                    {formatPrice(destination.price)}
                  </strong>{" "}
                  / person
                </p>

                <button
                  onClick={() => openBooking(destination)}
                  className="rounded-full bg-[#355d4d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#294b3d]"
                >
                  Plan this getaway ↗
                </button>
              </div>
            </div>
          </>
        )}

        {modal.type === "booking" && (
          <div className="p-7 pt-14 sm:p-9">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#78817b]">
              Your next little adventure
            </p>

            <h2 id="modal-title" className="font-serif text-4xl text-[#23332d]">
              Let’s go to
              <br />
              <em>{destination.name}.</em>
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#78817b]">
              A lovely {destination.duration.toLowerCase()} escape, from{" "}
              {formatPrice(destination.price)} per person.
            </p>

            <form onSubmit={submitBooking} className="mt-8 space-y-6">
              <label className="block text-sm font-medium text-[#23332d]">
                When would you like to go?
                <input
                  min={today}
                  required
                  type="date"
                  value={travelDate}
                  onChange={(event) => setTravelDate(event.target.value)}
                  className="mt-2 w-full rounded-lg border border-[#e7e5dc] bg-white px-4 py-3 text-sm outline-none focus:border-[#355d4d]"
                />
              </label>

              <label className="block text-sm font-medium text-[#23332d]">
                How many travelers?
                <select
                  value={travellers}
                  onChange={(event) => setTravellers(event.target.value)}
                  className="mt-2 w-full rounded-lg border border-[#e7e5dc] bg-white px-4 py-3 text-sm outline-none focus:border-[#355d4d]"
                >
                  {[1, 2, 3, 4, 5, 6].map((number) => (
                    <option key={number} value={number}>
                      {number} {number === 1 ? "traveler" : "travelers"}
                    </option>
                  ))}
                </select>
              </label>

              <button
                type="submit"
                className="w-full rounded-full bg-[#355d4d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#294b3d]"
              >
                Save this trip ↗
              </button>

              <p className="text-center text-xs text-[#78817b]">
                A frontend demo, so no payment or personal details are needed.
              </p>
            </form>
          </div>
        )}

        {modal.type === "confirmation" && (
          <div className="p-7 pt-14 text-center sm:p-9">
            <span className="text-5xl text-[#355d4d]">✳</span>

            <p className="mb-4 mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#78817b]">
              It’s happening
            </p>

            <h2 id="modal-title" className="font-serif text-4xl text-[#23332d]">
              A trip to
              <br />
              <em>{destination.name}.</em>
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#78817b]">
              Your getaway is saved on this device. We hope it’s a lovely one.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 rounded-xl bg-[#f8f7f2] p-5 text-left text-sm">
              <span className="text-[#78817b]">Trip reference</span>
              <strong className="text-right text-[#23332d]">
                {modal.booking.id}
              </strong>

              <span className="text-[#78817b]">Travel date</span>
              <strong className="text-right text-[#23332d]">
                {new Date(`${modal.booking.date}T00:00:00`).toLocaleDateString(
                  "en-IN",
                  { day: "numeric", month: "long", year: "numeric" }
                )}
              </strong>

              <span className="text-[#78817b]">Travelers</span>
              <strong className="text-right text-[#23332d]">
                {modal.booking.travellers}
              </strong>
            </div>

            <button
              onClick={() => setModal({ type: "trips" })}
              className="mt-7 w-full rounded-full bg-[#355d4d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#294b3d]"
            >
              See my trips ↗
            </button>
          </div>
        )}

        {modal.type === "trips" && (
          <div className="p-7 pt-14 sm:p-9">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#78817b]">
              Little adventures, in one place
            </p>

            <h2 id="modal-title" className="font-serif text-4xl text-[#23332d]">
              Your <em>trips.</em>
            </h2>

            {bookings.length > 0 ? (
              <div className="mt-8 divide-y divide-[#e7e5dc]">
                {bookings.map((booking) => {
                  const tripDestination = getDestination(
                    booking.destinationId
                  );

                  if (!tripDestination) return null;

                  return (
                    <article
                      key={booking.id}
                      className="flex gap-4 py-5"
                    >
                      <img
                        alt=""
                        src={tripDestination.image}
                        className="h-20 w-20 rounded-lg object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <strong className="block text-[#23332d]">
                          {tripDestination.name}
                        </strong>

                        <span className="mt-1 block text-xs text-[#78817b]">
                          {new Date(
                            `${booking.date}T00:00:00`
                          ).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}{" "}
                          · {booking.travellers}{" "}
                          {booking.travellers === 1 ? "traveler" : "travelers"}
                        </span>

                        <small className="mt-1 block text-xs text-[#78817b]">
                          Trip reference: {booking.id}
                        </small>

                        <button
                          onClick={() => removeBooking(booking.id)}
                          className="mt-2 text-xs font-semibold text-red-700 underline underline-offset-2"
                        >
                          Remove trip
                        </button>
                      </div>

                      <span className="text-xs text-[#355d4d]">Saved</span>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="font-serif text-4xl text-[#355d4d]">↗</p>
                <p className="mt-4 text-sm text-[#78817b]">
                  No trips just yet. Your next story is out there.
                </p>

                <button
                  onClick={() => {
                    setModal(null);
                    scrollTo("destinations");
                  }}
                  className="mt-5 text-sm font-semibold text-[#355d4d] underline underline-offset-4"
                >
                  Find your somewhere ↗
                </button>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}

export default Modal;
