import React from "react";
import cat1 from "../assets/cat1.png";

function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative min-h-screen flex items-center pt-6 bg-gradient-to-br from-primary to-secondary"
    >
      {/* Decorative soft shapes */}
      <div
        aria-hidden="true"
        className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-white/6 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -right-10 w-96 h-96 rounded-full bg-white/4 blur-2xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        {/* Left: copy */}
        <div className="text-left md:text-left">
          <p className="inline-block bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm mb-4">
            Trusted cat sitters • KL & Selangor
          </p>

          <h1
            id="home-heading"
            className="font-fun text-3xl md:text-5xl font-semibold text-white mb-5 leading-tight"
          >
            We’re Cat-ching Feelings for your{" "}
            <span className="inline-block bg-white/10 px-2 py-0.5 rounded-md">
              cats
            </span>
          </h1>

          <p className="text-white/90 mb-6 max-w-xl">
            We sit, feed, play, and cuddle your furry friends while you're away —
            reliable visits, photo updates, and lots of love.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href="#contact"
              className="inline-block bg-white text-secondary px-6 py-3 rounded-full font-semibold shadow hover:opacity-95 transition"
              aria-label="Book now"
            >
              Book Now
            </a>

            <a
              href="#services"
              className="inline-block mt-0 sm:mt-0 bg-white/10 text-white border border-white/20 px-5 py-3 rounded-full hover:bg-white/12 transition"
              aria-label="See services"
            >
              See Services
            </a>
          </div>

          {/* Small feature row */}
          <ul className="mt-6 flex flex-wrap gap-4 text-sm text-white/90">
            <li className="flex items-center gap-2">
              <span aria-hidden className="text-lg">🐾</span>
              Experienced sitters
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden className="text-lg">📸</span>
              Photo updates
            </li>
          </ul>
        </div>

        {/* Right: image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={cat1}
            alt="Friendly cat illustration"
            className="w-full max-w-md mx-auto transform transition duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-20 md:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,50 C150,0 300,100 450,50 C600,0 750,100 900,50 C1050,0 1200,100 1200,50 L1200,120 L0,120 Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;