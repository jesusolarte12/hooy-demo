import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <button
      className="fixed right-4 bottom-24 z-50 w-14 h-14 rounded-full bg-hooy-green text-primary-foreground shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      onClick={() => window.open("https://wa.me/573001234567", "_blank")}
    >
      <MessageCircle className="w-7 h-7 fill-current" />
    </button>
  );
};

export default WhatsAppButton;
