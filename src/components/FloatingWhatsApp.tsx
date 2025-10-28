import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingWhatsAppProps {
  phoneNumber: string;
}

const FloatingWhatsApp = ({ phoneNumber }: FloatingWhatsAppProps) => {
  const handleClick = () => {
    const message = encodeURIComponent("hello royal ponmo, i want to make an order for ponmo");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 h-14 rounded-full shadow-hover bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 animate-float"
      aria-label="Chat with us on WhatsApp"
    >
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("hello royal ponmo, i want to make an order for ponmo")}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        <span className="hidden sm:inline">Chat with us</span>
      </a>
    </Button>
  );
};

export default FloatingWhatsApp;
