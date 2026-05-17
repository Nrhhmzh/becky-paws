import service1 from "@/assets/service1.png";
import service2 from "@/assets/service2.png";
import service3 from "@/assets/service3.png";
import service4 from "@/assets/service4.png";
import service5 from "@/assets/service5.png";

function Services() {
  const services = [
    {
      title: "Top up cat food & drink",
      description:
        "Refill the cat's bowl with the food and water you provide, following your feeding schedule so your pet never goes hungry.",
    },
    {
      title: "Clean poop & cages (owner's tool)",
      description:
        "Remove waste and tidy litter boxes or cages using the owner's tools and supplies to keep the area clean and hygienic.",
    },
    {
      title: "Play with your cat (with love)",
      description:
        "Interactive play sessions tailored to your cat's energy level — toys, gentle chasing, and cuddles to reduce stress.",
    },
    {
      title: "Update to owner unlimited photos & videos",
      description:
        "Regular photo and short video updates during each visit so you can check in and see your pet doing well.",
    },
    {
      title: "Additional service with extra RM10",
      description:
        "Small add-ons like medication administration, extra playtime, or plant watering. Custom requests handled carefully.",
    },
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary to-primary"
    >
      {/* TOP WAVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-20 md:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 
              C100,0 200,100 300,50 
              C400,0 500,100 600,50 
              C700,0 800,100 900,50 
              C1000,0 1100,100 1200,50 
              L1200,120 L0,120 Z"
            className="fill-white"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-32 text-center relative z-10">
        <h2 className="section-title">Services We Offer</h2>

        <p className="section-subtitle">
          Browse the cat sitting solutions we offer to ensure your peace of mind
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition"
            >
              <img
                src={
                  index === 0
                    ? service1
                    : index === 1
                    ? service2
                    : index === 2
                    ? service3
                    : index === 3
                    ? service4
                    : service5
                }
                alt="service"
                className="h-20 mx-auto mb-4"
              />
              <p className="font-medium">{service.title}</p>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM WAVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20 md:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 
              C100,0 200,100 300,50 
              C400,0 500,100 600,50 
              C700,0 800,100 900,50 
              C1000,0 1100,100 1200,50 
              L1200,120 L0,120 Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}

export default Services;