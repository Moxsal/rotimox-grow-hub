import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({
  name,
  role,
  company,
  content,
  rating,
  image,
}: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-2xl shadow-lg p-8 border border-border card-hover relative">
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
        <Quote className="w-5 h-5 text-accent" />
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-warning fill-warning" : "text-muted"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-foreground leading-relaxed mb-6">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="font-display font-bold text-accent text-lg">
              {name.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <div className="font-semibold text-foreground">{name}</div>
          <div className="text-sm text-muted-foreground">
            {role} at {company}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
