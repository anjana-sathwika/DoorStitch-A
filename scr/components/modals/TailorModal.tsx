import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

interface TailorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TailorModal = ({ open, onOpenChange }: TailorModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    experience: "",
    expertise: "",
    introduction: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted! We'll review and contact you within 24 hours.");
    onOpenChange(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      experience: "",
      expertise: "",
      introduction: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">Tailor Registration</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="experience">Years of Experience</Label>
            <Input
              id="experience"
              type="number"
              min="0"
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="expertise">Expertise Level</Label>
            <Select
              value={formData.expertise}
              onValueChange={(value) => setFormData({ ...formData, expertise: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="expert">Expert</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="introduction">Tell us about your specializations</Label>
            <Textarea
              id="introduction"
              value={formData.introduction}
              onChange={(e) => setFormData({ ...formData, introduction: e.target.value })}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Submit Application
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TailorModal;
