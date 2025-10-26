import { useParams, useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { tailorsData } from "@/data/tailors";

const CategoryDesigns = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Map category to design keywords
  const categoryKeywords: Record<string, string[]> = {
    "dresses": ["dress", "frock", "gown"],
    "blouses": ["blouse"],
    "embroidery": ["embroidered", "embroidery"],
    "party-wear": ["party", "bridal", "wedding"],
    "readymade": ["kurta", "kurti", "shirt"],
  };

  const keywords = categoryKeywords[category || ""] || [];

  // Filter designs by category
  const categoryDesigns = tailorsData
    .flatMap((tailor) =>
      tailor.portfolio
        .filter((design) =>
          keywords.some((keyword) =>
            design.name.toLowerCase().includes(keyword)
          )
        )
        .map((design) => ({
          ...design,
          tailorName: tailor.name,
          tailorId: tailor.id,
        }))
    )
    .sort((a, b) => b.likes - a.likes);

  const categoryTitle = category
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-bold text-primary">{categoryTitle}</h1>

        {categoryDesigns.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categoryDesigns.map((design) => (
              <Card
                key={`${design.tailorId}-${design.id}`}
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
            <p className="text-xl text-muted-foreground">
              No designs found in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryDesigns;
