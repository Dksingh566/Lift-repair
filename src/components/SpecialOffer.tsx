const SpecialOffer = () => (
  <section id="pricing" className="py-16 bg-offer">
    <div className="container mx-auto text-center">
      <span className="inline-block bg-accent text-accent-foreground font-bold px-6 py-1 rounded-full text-sm mb-4 italic">
        Special Offer
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        Maintain Your Elevator at Just{" "}
        <span className="text-accent">Rs 2190/-</span>*
      </h2>
      <p className="mt-2 font-semibold text-foreground">Affordable Maintenance Plans</p>
      <p className="mt-1 text-muted-foreground italic">
        Includes Inspection, Lubrication & Safety Checks.
      </p>
      <p className="mt-4 text-xs text-muted-foreground">* Terms & Conditions Apply</p>
    </div>
  </section>
);

export default SpecialOffer;
