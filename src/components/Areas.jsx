import { useState } from "react";
import cat2 from "../assets/cat2.png";
import paw from "../assets/paw.png";
import paws2 from "../assets/paws2.png";

function Areas() {
  const coveredAreas = [
    "Kuala Lumpur",
    "Petaling Jaya",
    "Subang Jaya",
    "Shah Alam",
    "Bangsar",
    "Cheras",
    "Selangor",
  ];

  const [query, setQuery] = useState("");
  const [checkResult, setCheckResult] = useState(null);

  function checkCoverage(e) {
    e.preventDefault();
    if (!query.trim()) {
      setCheckResult({ ok: false, message: "Please enter an area name or postcode." });
      return;
    }
    const found = coveredAreas.some((a) => a.toLowerCase() === query.trim().toLowerCase());
    setCheckResult(
      found
        ? { ok: true, message: `Good news — we cover ${query.trim()}!` }
        : { ok: false, message: `We don't list ${query.trim()} yet. Please contact us and we'll try to help.` }
    );
  }

  return (
    <section
      id="areas"
      className="relative py-20 bg-white text-center overflow-visible"
      aria-labelledby="areas-heading"
    >
      {/* Decorative paw (top-left) */}
      <img
        src={paw}
        alt=""
        aria-hidden="true"
        className="absolute top-10 left-10 w-16 md:w-40 opacity-10 -rotate-12 z-20 pointer-events-none"
      />

      {/* Decorative paws (bottom-left) */}
      <img
        src={paws2}
        alt=""
        aria-hidden="true"
        className="absolute bottom-[-30px] left-10 md:left-20 w-12 sm:w-16 md:w-24 opacity-10 -rotate-12 z-10 pointer-events-none"
      />

      {/* Cat illustration overlapping lower area */}
      <img
        src={cat2}
        alt=""
        aria-hidden="true"
        className="absolute bottom-[-60px] md:bottom-[-120px] right-0 md:right-5 w-28 sm:w-36 md:w-52 lg:w-64 h-auto z-20 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 id="areas-heading" className="section-title">
          Areas Covered
        </h2>

        <p className="section-subtitle">
          Our cat sitters operate across the following regions — enter your area below to check coverage.
        </p>

        {/* Area chips (centered) */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {coveredAreas.map((area) => (
            <span
              key={area}
              className="bg-primary/30 text-secondary px-6 py-2 rounded-full shadow-sm text-sm md:text-base"
            >
              {area}
            </span>
          ))}
        </div>

        {/* Quick coverage check */}
        <form
          onSubmit={checkCoverage}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          role="search"
          aria-label="Check coverage"
        >
          <label htmlFor="area-check" className="sr-only">
            Enter your area or postcode
          </label>
          <input
            id="area-check"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter area name or postcode (e.g. Petaling Jaya)"
            className="w-full sm:w-80 px-4 py-2 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Enter your area or postcode"
          />
          <button
            type="submit"
            className="inline-block bg-secondary text-white px-5 py-2 rounded-full font-semibold shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
            aria-label="Check coverage"
          >
            Check
          </button>
        </form>

        {checkResult && (
          <p
            role="status"
            className={`mt-4 text-sm ${checkResult.ok ? "text-green-600" : "text-red-600"}`}
          >
            {checkResult.message}
          </p>
        )}

        {/* Fallback CTA */}
        <p className="mt-6 text-sm text-gray-600 max-w-xl mx-auto">
          Don't see your area listed? We often expand — please
          <a href="#contact" className="text-secondary font-semibold ml-1 hover:underline">
            contact us
          </a>
          , and we'll let you know how we can help.
        </p>
      </div>
    </section>
  );
}

export default Areas;