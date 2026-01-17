import { LucideIcon, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaMessage: string;
  id?: string;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  ctaText,
  ctaMessage,
  id,
}: ServiceCardProps) => {
  const whatsappLink = `https://wa.me/2349027284784?text=${encodeURIComponent(ctaMessage)}`;

  return (
    <div
      id={id}
      className="group bg-card rounded-2xl shadow-lg p-8 border border-border card-hover"
    >
      {/* Icon */}
      <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
        <Icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-bold text-foreground mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <Button variant="whatsapp" className="w-full">
          <MessageCircle className="w-4 h-4" />
          {ctaText}
        </Button>
      </a>
    </div>
  );
};

export default ServiceCard;
