import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Star, Heart } from "lucide-react";
import { useState } from "react";
import { Card } from "../ui/card";
import { toast } from "sonner";

interface ProfileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tailor: any;
  onWriteReview: () => void;
  onRequestDesign: (design: any) => void;
}

const ProfileModal = ({ open, onOpenChange, tailor, onWriteReview, onRequestDesign }: ProfileModalProps) => {
  const [likedDesigns, setLikedDesigns] = useState<number[]>([]);

  if (!tailor) return null;

  const toggleLike = (designId: number) => {
    setLikedDesigns(prev =>
      prev.includes(designId)
        ? prev.filter(id => id !== designId)
        : [...prev, designId]
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">{tailor.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
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
                      badge === "Expert" ? "bg-primary/10 text-primary" :
                      badge === "Verified" ? "bg-green-500/10 text-green-600" :
                      "bg-orange-500/10 text-orange-600"
                    }
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
            <p className="text-muted-foreground">{tailor.info}</p>
            <div className="mt-3 p-3 bg-secondary/50 rounded-lg text-center">
              <p className="font-semibold text-primary">{tailor.availability}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Portfolio</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {tailor.portfolio?.map((item: any) => (
                <Card key={item.id} className="p-4 bg-secondary/30">
                  <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                    <p className="text-xs text-muted-foreground text-center px-2">{item.name}</p>
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
                    <span className="text-sm text-muted-foreground">{item.likes} likes</span>
                  </div>
                  <Button
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      onRequestDesign({ ...item, tailorName: tailor.name });
                      onOpenChange(false);
                    }}
                  >
                    Request
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-primary">Customer Reviews</h3>
              <Button variant="outline" onClick={() => {
                onWriteReview();
                onOpenChange(false);
              }}>
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
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
