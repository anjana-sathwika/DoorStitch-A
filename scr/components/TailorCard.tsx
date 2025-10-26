import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface TailorCardProps {
  tailor: {
    id: number;
    name: string;
    rating: number;
    badges: string[];
    info: string;
    availability: string;
  };
  onViewProfile: (tailor: any) => void;
}

const TailorCard = ({ tailor, onViewProfile }: TailorCardProps) => {
  return (
    <Card 
      className="cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg border-2 hover:border-primary"
      onClick={() => onViewProfile(tailor)}
    >
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-primary">{tailor.name}</h3>
            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(tailor.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {tailor.badges.map((badge, idx) => (
            <Badge 
              key={idx} 
              variant={badge === "Expert" ? "default" : badge === "Verified" ? "secondary" : "outline"}
              className={
                badge === "Expert" ? "bg-primary/10 text-primary" :
                badge === "Verified" ? "bg-green-500/10 text-green-600" :
                "bg-orange-500/10 text-orange-600"
              }
            >
              {badge}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {tailor.info}
        </p>
        <div className="bg-secondary/50 rounded-lg p-3 text-center">
          <p className="text-sm font-semibold text-primary">{tailor.availability}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TailorCard;
