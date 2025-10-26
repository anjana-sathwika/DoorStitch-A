import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Star, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ReviewModal from "@/components/modals/ReviewModal";
import RequestModal from "@/components/modals/RequestModal";
import { tailorsData } from "@/data/tailors";
import { toast } from "sonner";

const TailorProfile = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<any>(null);
  const [likedDesigns, setLikedDesigns] = useState<number[]>([]);

  const tailor = tailorsData.find((t) => t.id === Number(id));
  const highlightedDesignId = location.state?.designId;

  useEffect(() => {
    if (highlightedDesignId) {
      const element = document.getElementById(`design-${highlightedDesignId}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [highlightedDesignId]);

  if (!tailor) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Tailor not found</h1>
          <Button onClick={() => navigate("/")}>Go Home</Button>
        </div>
      </div>
    );
  }

  const toggleLike = (designId: number) => {
    setLikedDesigns((prev) =>
      prev.includes(designId)
        ? prev.filter((id) => id !== designId)
        : [...prev, designId]
    );
  };

  const handleRequestDesign = (design: any) => {
    setSelectedDesign({ ...design, tailorName: tailor.name });
    setRequestModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-3">{tailor.name}</h1>
          <div className="flex items-center gap-3 mb-3">
            <div className="flex text-yellow-500">
              {[...Array(tailor.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {tailor.badges?.map((badge: string, idx: number) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className={
                    badge === "Expert"
                      ? "bg-primary/10 text-primary"
                      : badge === "Verified"
                      ? "bg-green-500/10 text-green-600"
                      : "bg-orange-500/10 text-orange-600"
                  }
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
          <p className="text-muted-foreground mb-3">{tailor.info}</p>
          <div className="p-3 bg-secondary/50 rounded-lg inline-block">
            <p className="font-semibold text-primary">{tailor.availability}</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Portfolio</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tailor.portfolio?.map((item: any) => (
              <Card
                key={item.id}
                id={`design-${item.id}`}
                className={`p-4 transition-all ${
                  highlightedDesignId === item.id
                    ? "bg-primary/10 ring-2 ring-primary"
                    : "bg-secondary/30"
                }`}
              >
                <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                  <p className="text-xs text-muted-foreground text-center px-2">
                    {item.name}
                  </p>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <button
                    onClick={() => toggleLike(item.id)}
                    className="transition-transform hover:scale-110"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        likedDesigns.includes(item.id)
                          ? "fill-primary text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  </button>
                  <span className="text-sm text-muted-foreground">
                    {item.likes} likes
                  </span>
                </div>
                <Button
                  size="sm"
                  className="w-full"
                  onClick={() => handleRequestDesign(item)}
                >
                  Request
                </Button>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-primary">Customer Reviews</h2>
            <Button variant="outline" onClick={() => setReviewModalOpen(true)}>
              Write a Review
            </Button>
          </div>
          <div className="space-y-3">
            {tailor.reviews?.map((review: any, idx: number) => (
              <div key={idx} className="bg-secondary/30 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <p className="font-semibold text-primary">{review.name}</p>
                  <div className="flex text-yellow-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ReviewModal
        open={reviewModalOpen}
        onOpenChange={setReviewModalOpen}
        tailorName={tailor.name}
      />
      <RequestModal
        open={requestModalOpen}
        onOpenChange={setRequestModalOpen}
        design={selectedDesign}
      />
    </div>
  );
};

export default TailorProfile;
