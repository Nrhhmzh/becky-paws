import React from "react";

function Pricing() {
  const plans = [
    {
      id: "one-visit",
      title: "1 Visit",
      price: "RM35",
      subtitle: "Per visit",
      features: [
        "Feed & refresh water (use owner's food)",
        "Quick litter/cage tidy",
        "1 x photo update",
        "Up to 3 cats included",
      ],
    },
    {
      id: "two-visits",
      title: "2 Visits",
      price: "RM60",
      subtitle: "Per day (2 visits)",
      features: [
        "Morning + evening visit for consistent routine",
        "Food, water & litter maintenance",
        "Playtime & brief check-in (health/behavior)",
        "Unlimited photo updates during service",
      ],
      recommended: true,
      note: "Save RM10 vs two single visits",
    },
    {
      id: "three-visits",
      title: "3 Visits",
      price: "RM90",
      subtitle: "Per day (3 visits)",
      features: [
        "Morning, afternoon & evening visits",
        "Ideal for high-energy or elderly cats",
        "Litter cleaning, feeding, play & medication handling (if requested)",
        "Multiple updates and short videos",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white text-center" aria-labelledby="pricing-heading">
      <h2 id="pricing-heading" className="section-title">
        Services Charge
      </h2>

      <p className="section-subtitle">
        Affordable pricing tailored to your cat care needs
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8 px-4">
        {plans.map((plan) => (
          <article
            key={plan.id}
            aria-labelledby={`${plan.id}-title`}
            className={`relative p-8 rounded-2xl shadow-md ${
              plan.recommended ? "bg-secondary text-white scale-105 shadow-lg" : "bg-primary text-left"
            }`}
          >
            {plan.recommended && (
              <span className="absolute -top-3 right-4 bg-white text-secondary text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                Most popular
              </span>
            )}

            <h3 id={`${plan.id}-title`} className={`text-xl font-semibold mb-4 ${plan.recommended ? "text-white" : ""}`}>
              {plan.title}
            </h3>

            <p className={`text-3xl font-bold ${plan.recommended ? "" : "text-secondary"}`}>
              {plan.price}
            </p>
            <p className={`text-sm mt-1 mb-4 ${plan.recommended ? "text-white/85" : "text-gray-700"}`}>
              {plan.subtitle}
            </p>

            <ul className={`${plan.recommended ? "text-white/95" : "text-gray-700"} text-sm space-y-2 mb-6 text-left`}>
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className={`mt-1 ${plan.recommended ? "text-white" : "text-secondary"} font-bold`}
                  >
                    ✓
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <a
                href="#contact"
                className={`inline-block px-4 py-2 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  plan.recommended
                    ? "bg-white text-secondary hover:opacity-95"
                    : "bg-secondary text-white hover:opacity-95"
                }`}
                aria-label={`Book ${plan.title}`}
              >
                Book now
              </a>

              {plan.note && (
                <p className={`mt-3 text-xs ${plan.recommended ? "text-white/80" : "text-gray-600"}`}>
                  {plan.note}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-gray-600 max-w-2xl mx-auto px-4">
        All prices cover up to 3 cats. An additional RM5 per cat will be charged for more than 3 cats.
        <br />
        Cancellation: please notify at least 12 hours in advance to avoid a RM10 cancellation fee.
      </p>
    </section>
  );
}

export default Pricing;