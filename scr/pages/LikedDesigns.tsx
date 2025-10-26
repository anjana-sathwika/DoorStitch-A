import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const LikedDesigns = () => {
  const navigate = useNavigate();

  // Demo liked designs
  const likedDesigns = [
    {
      id: 1,
      name: "Designer Blouse",
      tailorName: "D. Nagalaxmi",
      tailorId: 1,
      likes: 45,
    },
    {
      id: 2,
      name: "Party Wear Gown",
      tailorName: "GopiKrishnan",
      tailorId: 2,
      likes: 56,
    },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-bold text-primary">Liked Designs</h1>

        {likedDesigns.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {likedDesigns.map((design) => (
              <Card
                key={design.id}
                className="overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg border-2 hover:border-primary"
                onClick={() =>
                  navigate(`/tailor/${design.tailorId}`, {
                    state: { designId: design.id },
                  })
                }
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
        ) : (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-xl text-muted-foreground">No liked designs yet.</p>
            <p className="text-muted-foreground">
              Start browsing and like your favorite designs!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LikedDesigns;
