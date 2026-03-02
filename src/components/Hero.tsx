import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section
    id="home"
    className="relative bg-cover bg-center min-h-[500px] flex items-center"
    style={{ backgroundImage: `url(${heroBg})` }}
  >
    <div className="absolute inset-0 bg-primary/70" />
    <div className="container mx-auto relative z-10 py-16 md:py-24">
      <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight max-w-xl">
        Reliable Lift Repair & Modernization by Industry Experts
      </h1>
      <p className="mt-3 text-primary-foreground/80 italic text-lg">
        Maintaining Elevators, Ensuring Safety.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <span className="inline-block bg-accent text-accent-foreground font-bold px-6 py-3 rounded text-lg">
          Maintain Your Elevator at Rs 2199/-*
        </span>
        <a
          href="#contact"
          className="inline-block border-2 border-primary-foreground text-primary-foreground font-semibold px-6 py-3 rounded hover:bg-primary-foreground/10 transition text-center cursor-pointer"
        >
          Get a Free Quote
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
