import { CheckCircle } from "lucide-react";
import whyImg from "@/assets/why-choose-img.jpg";

const points = [
  "Experienced Team",
  "Genuine OEM Parts",
  "Fast & Reliable Service",
  "Cost-Effective Solutions",
];

const WhyChooseUs = () => (
  <section id="whychooseus" className="py-16">
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Why Choose Us</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <ul className="space-y-4 md:flex-1">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-primary shrink-0" />
              <span className="font-medium text-foreground">{p}</span>
            </li>
          ))}
        </ul>
        <img
          src={whyImg}
          alt="Elevator maintenance professional"
          className="w-full md:w-64 lg:w-80 rounded-lg shadow-md object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
