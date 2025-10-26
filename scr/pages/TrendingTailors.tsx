import { useState } from "react";
import TailorCard from "@/components/TailorCard";
import ProfileModal from "@/components/modals/ProfileModal";
import ReviewModal from "@/components/modals/ReviewModal";
import RequestModal from "@/components/modals/RequestModal";
import { tailorsData } from "@/data/tailors";

const TrendingTailors = () => {
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

  // Filter tailors with "Trending" badge
  const trendingTailors = tailorsData.filter((tailor) =>
    tailor.badges.includes("Trending")
  );

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-bold text-primary">Trending Tailors</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trendingTailors.map((tailor) => (
            <TailorCard
              key={tailor.id}
              tailor={tailor}
              onViewProfile={handleViewProfile}
            />
          ))}
        </div>

        {trendingTailors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No trending tailors at the moment.</p>
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

export default TrendingTailors;
