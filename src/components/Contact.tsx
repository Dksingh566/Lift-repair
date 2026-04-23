import { Phone, Mail, MapPin } from "lucide-react";
import footerBg from "@/assets/footer-bg.jpg";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="absolute inset-0 bg-primary/80" />
      <div className="container mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-8">Get in Touch</h2>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left */}
          <div className="space-y-4 md:flex-1 text-primary-foreground/90">
            <a href="tel:+916283791011" className="flex items-center gap-3 hover:text-accent transition-colors">
              <Phone className="w-5 h-5 text-accent" />
              <span>Call Us : +91 6283791011</span>
            </a>
            <a href="mailto:info@liftrepair.in" className="flex items-center gap-3 hover:text-accent transition-colors">
              <Mail className="w-5 h-5 text-accent" />
              <span>Email : info@liftrepair.in</span>
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent" />
              <span>Service Area : [Your City/Region]</span>
            </p>
          </div>

          {/* Right form */}
          <div className="bg-card rounded-lg p-6 shadow-lg md:flex-1">
            <h3 className="font-bold text-foreground text-lg mb-4">Call Now</h3>
            <form className="space-y-3" onSubmit={(e) => {
              e.preventDefault();
              try {
                const fullMessage = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nMessage: ${form.message}`;
                const encodedMessage = encodeURIComponent(fullMessage);
                window.location.href = `https://wa.me/916283791011?text=${encodedMessage}`;
              } catch (error) {
                console.error("Error sending message on WhatsApp:", error);
              }
            }}>
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-border rounded px-4 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-border rounded px-4 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                name="phone"
                placeholder="Your Phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-border rounded px-4 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className="w-full border border-border rounded px-4 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-semibold py-2.5 rounded hover:brightness-110 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
