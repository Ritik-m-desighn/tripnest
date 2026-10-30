
function Hero({ query, setQuery, submitSearch }) {
  return (
    <main id="home">
      <section className="relative mx-auto grid min-h-[637px] max-w-[1440px] grid-cols-[0.92fr_1.08fr] items-center gap-[5.3%] px-[7.1%] py-[45px] pb-[68px] max-md:grid-cols-1 max-md:gap-9 max-md:px-[6%] max-md:py-[50px] max-md:pb-[75px]">

        {/* Hero content */}
        <div className="relative z-10 pb-[13px] max-md:pb-0">
          <div className="flex items-center gap-[10px] text-[10px] font-bold uppercase tracking-[1.5px] text-[#8a8072]">
            <span className="h-px w-6 bg-[#bb8161]" />
            A little closer to somewhere new
          </div>

          <h1 className="my-6 text-[clamp(54px,6.1vw,82px)] font-medium leading-[0.99] tracking-[-3.2px] [font-family:Georgia,serif] max-md:mt-[21px] max-md:text-[clamp(58px,12vw,78px)]">
            Find your
            <br />
            kind of <em className="font-medium text-[#577562]">away.</em>
          </h1>

          <p className="max-w-[420px] text-sm leading-[1.85] text-[#757b73] max-md:max-w-[460px] max-md:text-[13px]">
            Thoughtful little getaways, handpicked for the way you love to travel.
            Your next favorite place is closer than you think.
          </p>

          {/* Search */}
          <form
            onSubmit={submitSearch}
            className="mt-7 flex min-h-[80px] max-w-[575px] items-center gap-3 rounded-[7px] border border-[#ebe8de] bg-[#fffefa] p-[11px] pl-[18px] shadow-sm max-sm:flex-wrap"
          >
            <label className="flex min-w-0 flex-1 items-center gap-[10px]">
              <span className="font-serif text-[27px] leading-none text-[#b9805b]">
                ⌕
              </span>

              <span className="flex min-w-0 flex-col gap-1">
                <span className="text-[11px] font-bold text-[#353c36]">
                  Where to?
                </span>

                <input
                  aria-label="Search destinations"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Try Goa, mountains..."
                  className="w-full min-w-0 border-0 bg-transparent text-[11px] text-[#23332d] outline-none placeholder:text-[#a4a69e]"
                />
              </span>
            </label>

            <span className="h-[38px] w-px bg-[#ece9e1] max-sm:hidden" />

            <div className="flex shrink-0 items-center gap-2 max-[1050px]:hidden">
              <span className="font-serif text-[21px] text-[#b9805b]">⌖</span>
              <span>
                <strong className="block text-[10px]">Made for you</strong>
                <small className="mt-1 block text-[9px] text-[#969a91]">
                  Little trips, big memories
                </small>
              </span>
            </div>

            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[#355d4d] px-[19px] text-[11px] font-semibold text-white transition hover:-translate-y-px hover:bg-[#294b3d] max-sm:w-full"
            >
              <span className="text-[19px]">⌕</span>
              Find a trip
            </button>
          </form>

          {/* Social proof */}
          <div className="mt-[23px] flex flex-wrap items-center gap-[9px] text-[10px] text-[#8b8e86]">
            <div className="flex pl-[2px]" aria-hidden="true">
              {["R", "A", "M", "S"].map((letter, index) => (
                <span
                  key={letter}
                  className={`-ml-[3px] grid h-[23px] w-[23px] place-items-center rounded-full border-2 border-[#f8f7f2] text-[8px] text-white ${
                    [
                      "bg-[#8a9479]",
                      "bg-[#be8b6a]",
                      "bg-[#6d8790]",
                      "bg-[#9c777d]",
                    ][index]
                  }`}
                >
                  {letter}
                </span>
              ))}
            </div>

            <span>
              <strong className="text-[#51594f]">2,400+</strong> happy little getaways
            </span>

            <span className="ml-3 text-[13px] text-[#cd935f]">★</span>

            <span>
              <strong className="text-[#51594f]">4.9/5</strong> traveler rating
            </span>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative h-[480px] rounded-tr-[95px] max-md:mr-2 max-md:h-[clamp(300px,75vw,430px)] max-md:rounded-tr-[72px]">
          <img
            alt="A peaceful mountain valley opening up to a winding river"
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1500&q=90"
            className="h-full w-full rounded-tr-[95px] object-cover max-md:rounded-tr-[72px]"
          />

          <div className="absolute inset-0 rounded-tr-[95px] bg-gradient-to-t from-[#111b1b]/55 via-transparent to-transparent max-md:rounded-tr-[72px]" />

          <div className="absolute bottom-[30px] left-[31px] flex flex-col gap-[5px] text-white">
            <span className="text-[9px] uppercase tracking-[1.2px] text-white/75">
              A place to exhale
            </span>
            <strong className="font-serif text-[25px] font-medium">
              Somewhere in the Himalayas
            </strong>
            <span className="text-[10px] text-white/80">
              Himachal Pradesh, India ↗
            </span>
          </div>

          {/* Floating note */}
          <div className="absolute -right-[25px] top-[54px] flex items-center gap-[11px] rounded-[5px] border border-[#ece9e1] bg-[#fffefa] px-[17px] py-[14px] shadow-lg max-md:-right-2 max-md:top-7">
            <span className="font-serif text-2xl text-[#b87959]">✳</span>
            <span>
              <strong className="block text-[10px] text-[#374139]">
                Made with love
              </strong>
              <small className="mt-1 block text-[9px] text-[#989a92]">
                Every trip, a little different
              </small>
            </span>
          </div>

          <span className="absolute -bottom-[30px] right-0 flex items-center gap-[9px] text-[9px] text-[#888b83]">
            01 <span className="h-px w-[29px] bg-[#c9c6bb]" /> 06
          </span>
        </div>

        {/* Scroll cue */}
        <a
          href="#destinations"
          className="absolute bottom-[25px] left-[7.1%] flex items-center gap-[10px] text-[9px] tracking-[0.5px] text-[#8a8b82] max-md:left-[6%]"
        >
          <span className="h-px w-6 bg-[#b88a69]" />
          Scroll to wander
        </a>
      </section>
    </main>
  );
}

export default Hero;
