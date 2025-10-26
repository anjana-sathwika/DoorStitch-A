import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

interface ReviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tailorName: string;
}

const ReviewModal = ({ open, onOpenChange, tailorName }: ReviewModalProps) => {
  const [formData, setFormData] = useState({
    customerName: "",
    rating: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your review! It helps others find great tailors.");
    onOpenChange(false);
    setFormData({ customerName: "", rating: "", comment: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">Write a Review</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Tailor</Label>
            <p className="text-muted-foreground mt-1">{tailorName}</p>
          </div>
          <div>
            <Label htmlFor="customerName">Your Name</Label>
            <Input
              id="customerName"
              value={formData.customerName}
              onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="rating">Rating</Label>
            <Select
              value={formData.rating}
              onValueChange={(value) => setFormData({ ...formData, rating: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">★★★★★ (5 stars - Excellent)</SelectItem>
                <SelectItem value="4">★★★★☆ (4 stars - Very Good)</SelectItem>
                <SelectItem value="3">★★★☆☆ (3 stars - Good)</SelectItem>
                <SelectItem value="2">★★☆☆☆ (2 stars - Fair)</SelectItem>
                <SelectItem value="1">★☆☆☆☆ (1 star - Poor)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="comment">Your Review</Label>
            <Textarea
              id="comment"
              placeholder="Share your experience with this tailor..."
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Submit Review
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewModal;
