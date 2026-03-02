import aboutImg from "@/assets/about-img.jpg";

const About = () => (
  <section id="about" className="py-16">
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">About Us</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <p className="text-muted-foreground leading-relaxed md:flex-1">
          Experienced elevator professionals specializing in repair, maintenance, and modernization. Trusted across residential, <strong>commercial & industrial buildings</strong>.
        </p>
        <img
          src={aboutImg}
          alt="Elevator technician at work"
          className="w-full md:w-64 lg:w-80 rounded-lg shadow-md object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default About;
