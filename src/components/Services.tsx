import { Wrench, ShieldCheck, Building2, Package } from "lucide-react";

const services = [
  { icon: Wrench, title: "Lift Repair" },
  { icon: ShieldCheck, title: "Preventive Maintenance" },
  { icon: Building2, title: "Lift Modernization" },
  { icon: Package, title: "Spare Parts Supply" },
];

const Services = () => (
  <section id="services" className="py-16 bg-secondary">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">Our Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {services.map(({ icon: Icon, title }) => (
          <div
            key={title}
            className="bg-card rounded-lg p-6 shadow-sm border border-border flex flex-col items-center gap-4 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default"
          >
            <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
