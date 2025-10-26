import { useState } from "react";
import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { tailorsData } from "@/data/tailors";

const MostLikedDesigns = () => {
  const navigate = useNavigate();

  // Flatten all designs from all tailors and sort by likes
  const allDesigns = tailorsData.flatMap((tailor) =>
    tailor.portfolio.map((design) => ({
      ...design,
      tailorName: tailor.name,
      tailorId: tailor.id,
    }))
  ).sort((a, b) => b.likes - a.likes);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-bold text-primary">Most Liked Designs</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allDesigns.map((design) => (
            <Card
              key={`${design.tailorId}-${design.id}`}
              className="overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg border-2 hover:border-primary"
              onClick={() => navigate(`/tailor/${design.tailorId}`, { state: { designId: design.id } })}
            >
              <div className="aspect-square bg-gradient-to-br from-secondary to-muted flex items-center justify-center p-4">
                <p className="text-center font-medium text-sm text-muted-foreground">
                  {design.name}
                </p>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-primary">{design.tailorName}</p>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Heart className="h-3 w-3 fill-primary text-primary" />
                    {design.likes}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{design.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostLikedDesigns;
