import { useState } from "react";
import cat3 from "@/assets/cat3.png";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.message) {
      setStatus({ ok: false, text: "Please provide at least your email and a short message." });
      return;
    }
    const subject = encodeURIComponent("Service inquiry from website");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    const mailto = `mailto:hamizahnaurah@gmail.com?subject=${subject}&body=${body}`;
    // open mailto in a new window/tab to avoid replacing the single page app state
    window.location.href = mailto;
    setStatus({ ok: true, text: "Opening your email client — please send the message to complete." });
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col bg-gradient-to-br from-primary to-secondary"
      aria-labelledby="contact-heading"
    >
      {/* TOP WAVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none">
        <svg
          className="relative block w-full h-20 md:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,50 C100,0 200,100 300,50 C400,0 500,100 600,50 C700,0 800,100 900,50 C1000,0 1100,100 1200,50 L1200,120 L0,120 Z"
            className="fill-white"
          />
        </svg>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <img src={cat3} alt="cute cat illustration" className="w-full max-w-md mx-auto" />

          <div>
            <h1 id="contact-heading" className="font-fun text-3xl md:text-5xl font-semibold text-white mb-5 leading-tight">
              Making pets feel at home even when you're not
            </h1>

            <p className="text-white/90 mb-6">
              We sit, feed, play, and keep your furry friends happy while you're away. Get in touch to book or ask a question.
            </p>

            {/* Contact details */}
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start mb-6">
              <div className="text-left">
                <p className="text-white font-semibold">Phone</p>
                <a href="tel:+60123456789" className="text-white/90 hover:underline">+60 12-345 6789</a>
              </div>

              <div className="text-left">
                <p className="text-white font-semibold">Email</p>
                <a href="mailto:hamizahnaurah@gmail.com" className="text-white/90 hover:underline">hamizahnaurah@gmail.com</a>
              </div>
            </div>

            {/* Simple contact form (opens mail client) */}
            <form onSubmit={handleSubmit} className="bg-white/10 p-4 rounded-xl max-w-xl">
              <label className="sr-only" htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name (optional)"
                className="w-full px-3 py-2 rounded-md mb-3 bg-white/90 text-slate-900 focus:outline-none"
              />

              <label className="sr-only" htmlFor="email">Your email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full px-3 py-2 rounded-md mb-3 bg-white/90 text-slate-900 focus:outline-none"
              />

              <label className="sr-only" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help? (date, service, special instructions)"
                required
                rows={4}
                className="w-full px-3 py-2 rounded-md mb-3 bg-white/90 text-slate-900 focus:outline-none"
              />

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="inline-block bg-white text-secondary px-5 py-2 rounded-full font-semibold shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Send enquiry
                </button>

                <a
                  href="#pricing"
                  className="text-white/90 hover:underline text-sm"
                >
                  View pricing
                </a>
              </div>

              {status && (
                <p className={`mt-3 text-sm ${status.ok ? "text-green-200" : "text-yellow-100"}`}>
                  {status.text}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* FOOTER (BOTTOM OF PAGE) */}
      <div className="mt-auto text-center py-6">
        <p className="text-white text-lg">
          by{" "}
          <a
            href="https://naurahhamizah.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold hover:underline transition"
          >
            Nrhhmzh
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;