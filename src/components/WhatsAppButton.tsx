import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    try {
      const message = encodeURIComponent("Hi, I am interested in your elevator repair and maintenance services. Please share more details.");
      window.location.href = `https://wa.me/917837167164?text=${message}`;
    } catch (error) {
      console.error("Error opening WhatsApp:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleWhatsAppClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,38%)] text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
    >
      <MessageCircle className="w-7 h-7" fill="currentColor" />
    </button>
  );
};

export default WhatsAppButton;
