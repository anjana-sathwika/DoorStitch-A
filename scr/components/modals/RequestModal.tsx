import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

interface RequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  design: {
    name: string;
    tailorName: string;
  } | null;
}

const RequestModal = ({ open, onOpenChange, design }: RequestModalProps) => {
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    email: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Request sent! The tailor will review and we'll contact you soon.");
    onOpenChange(false);
    setFormData({ customerName: "", phone: "", email: "", notes: "" });
  };

  if (!design) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">Request Design</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <Label>Design Details</Label>
            <p className="text-sm text-muted-foreground mt-1">Design: {design.name}</p>
            <p className="text-sm text-muted-foreground">Tailor: {design.tailorName}</p>
          </div>
          <div>
            <Label htmlFor="notes">Additional Notes / Customizations</Label>
            <Textarea
              id="notes"
              placeholder="Any specific requirements or modifications..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />
          </div>
          <Button type="submit" className="w-full">
            Submit Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RequestModal;
