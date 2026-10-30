
function Newsletter({
  newsletterEmail,
  setNewsletterEmail,
  newsletterMessage,
  submitNewsletter,
}) {
  return (
    <section className="relative overflow-hidden bg-[#355d4d] px-6 py-20 text-white sm:px-12 lg:px-20">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-between gap-12 md:flex-row md:items-center">
        <div>
          <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            <span className="h-px w-8 bg-white/70" />
            A postcard, now and then
          </div>

          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
            A little daydream
            <br />
            for your <em>inbox.</em>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
            Lovely places, local favorites, and tiny nudges to take that trip.
          </p>
        </div>

        <form
          onSubmit={submitNewsletter}
          className="flex w-full max-w-md flex-col gap-3"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Your email address
          </label>

          <div className="flex flex-col gap-2 border-b border-white/40 pb-3 sm:flex-row">
            <input
              id="newsletter-email"
              type="email"
              required
              value={newsletterEmail}
              onChange={(event) => setNewsletterEmail(event.target.value)}
              placeholder="Your email address"
              className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/60"
            />

            <button
              type="submit"
              className="shrink-0 bg-[#fffefa] px-6 py-3 text-sm font-semibold text-[#355d4d] transition hover:bg-[#e7e5dc]"
            >
              Count me in ↗
            </button>
          </div>

          <span className="text-xs text-white/70">
            {newsletterMessage || "Just the good stuff. Unsubscribe whenever."}
          </span>
        </form>
      </div>

      <span
        aria-hidden="true"
        className="absolute -right-5 -top-16 font-serif text-[240px] text-white/[0.06]"
      >
        ✳
      </span>
    </section>
  );
}

export default Newsletter;
