import { Phone, MessageSquare } from "lucide-react";

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-stretch">
        <a
          href="tel:01418805656"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[#1A1A1A] border-r border-border active:bg-[#F0EDEA] transition-colors"
          style={{ fontSize: "0.875rem", fontWeight: 600 }}
        >
          <Phone className="w-4 h-4 text-[#C8102E]" />
          Call Now
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#C8102E] text-white active:bg-[#A30D25] transition-colors"
          style={{ fontSize: "0.875rem", fontWeight: 600 }}
        >
          <MessageSquare className="w-4 h-4" />
          Free Quote
        </a>
      </div>
    </div>
  );
}