import { useState } from "react";
import TailorCard from "@/components/TailorCard";
import ProfileModal from "@/components/modals/ProfileModal";
import ReviewModal from "@/components/modals/ReviewModal";
import RequestModal from "@/components/modals/RequestModal";
import { tailorsData } from "@/data/tailors";

const UrgentTailors = () => {
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [selectedTailor, setSelectedTailor] = useState<any>(null);
  const [selectedDesign, setSelectedDesign] = useState<any>(null);

  const handleViewProfile = (tailor: any) => {
    setSelectedTailor(tailor);
    setProfileModalOpen(true);
  };

  const handleWriteReview = () => {
    setReviewModalOpen(true);
  };

  const handleRequestDesign = (design: any) => {
    setSelectedDesign(design);
    setRequestModalOpen(true);
  };

  // Filter tailors with "Fast Stitching" badge or mention of quick delivery
  const urgentTailors = tailorsData.filter((tailor) =>
    tailor.badges.includes("Fast Stitching") || 
    tailor.info.toLowerCase().includes("hours") ||
    tailor.info.toLowerCase().includes("1-2 days")
  );

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Urgent Tailors</h1>
          <p className="text-muted-foreground">Fast turnaround for your urgent needs</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {urgentTailors.map((tailor) => (
            <TailorCard
              key={tailor.id}
              tailor={tailor}
              onViewProfile={handleViewProfile}
            />
          ))}
        </div>

        {urgentTailors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No urgent tailors available at the moment.</p>
          </div>
        )}
      </div>

      <ProfileModal
        open={profileModalOpen}
        onOpenChange={setProfileModalOpen}
        tailor={selectedTailor}
        onWriteReview={handleWriteReview}
        onRequestDesign={handleRequestDesign}
      />
      <ReviewModal
        open={reviewModalOpen}
        onOpenChange={setReviewModalOpen}
        tailorName={selectedTailor?.name || ""}
      />
      <RequestModal
        open={requestModalOpen}
        onOpenChange={setRequestModalOpen}
        design={selectedDesign}
      />
    </div>
  );
};

export default UrgentTailors;
