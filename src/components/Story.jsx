
function Story({ scrollTo }) {
  return (
    <section
      id="about"
      className="grid bg-[#fffefa] md:grid-cols-2"
    >
      <div className="relative min-h-[420px] md:min-h-[600px]">
        <img
          alt="A sunny, winding road through a lush hillside"
          loading="lazy"
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute bottom-6 left-6 bg-[#fffefa] px-5 py-3 text-sm text-[#23332d]">
          The long way is the lovely way.
        </span>
      </div>

      <div className="flex flex-col justify-center px-8 py-20 sm:px-14 lg:px-20">
        <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#78817b]">
          <span className="h-px w-8 bg-[#355d4d]" />
          A note from us
        </div>

        <h2 className="font-serif text-4xl leading-tight text-[#23332d] sm:text-5xl">
          Less itinerary.
          <br />
          More <em>“remember when?”</em>
        </h2>

        <p className="mt-7 text-sm leading-8 text-[#78817b]">
          We think the best trips leave a little room for the unexpected. A
          chai with a local. A road you didn’t plan to take. One more sunset.
        </p>

        <p className="mt-3 text-sm leading-8 text-[#78817b]">
          Tripnest helps you find the place. The rest is yours.
        </p>

        <button
          onClick={() => scrollTo("destinations")}
          className="mt-8 w-fit border-b border-[#355d4d] pb-2 text-sm font-semibold text-[#355d4d] transition hover:text-[#294b3d]"
        >
          Find your somewhere ↗
        </button>

        <p className="mt-14 font-serif text-lg italic text-[#78817b]">
          Here’s to going places <span className="not-italic">✳</span>
        </p>
      </div>
    </section>
  );
}

export default Story;
