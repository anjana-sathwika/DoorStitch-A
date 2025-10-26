import { useState } from "react";
import TailorCard from "@/components/TailorCard";
import CustomerModal from "@/components/modals/CustomerModal";
import TailorModal from "@/components/modals/TailorModal";
import ProfileModal from "@/components/modals/ProfileModal";
import ReviewModal from "@/components/modals/ReviewModal";
import RequestModal from "@/components/modals/RequestModal";
import { Button } from "@/components/ui/button";
import { tailorsData } from "@/data/tailors";

const Index = () => {
  const [customerModalOpen, setCustomerModalOpen] = useState(false);
  const [tailorModalOpen, setTailorModalOpen] = useState(false);
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

  const scrollToTailors = () => {
    document.getElementById("tailors")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-20 text-center container mx-auto px-4">
          <h1 className="mb-6 text-4xl md:text-6xl font-bold text-primary">
            Your Dream Outfit is Just a Few Clicks Away
          </h1>
          <p className="mb-8 text-xl md:text-2xl text-muted-foreground">
            Trusted tailors, delivered to your doorstep
          </p>
          <Button
            size="lg"
            onClick={scrollToTailors}
            className="hover:-translate-y-1 transition-transform shadow-lg hover:shadow-xl text-lg px-8"
          >
            Browse Tailors
          </Button>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold text-primary">
              How It Works
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Find a Tailor",
                  description: "Browse verified tailors in your area with ratings and reviews",
                },
                {
                  step: "2",
                  title: "Select Design",
                  description: "Choose from their portfolio or send your own design",
                },
                {
                  step: "3",
                  title: "Track Progress",
                  description: "Real-time updates on your order status",
                },
                {
                  step: "4",
                  title: "Delivery",
                  description: "We handle pickup from you and delivery back to your doorstep",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="text-center p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-md">
                    {item.step}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tailors */}
        <section id="tailors" className="py-16 container mx-auto px-4">
          <h2 className="mb-8 text-center text-4xl font-bold text-primary">
            Featured Tailors
          </h2>
          <div className="mb-8 flex justify-center gap-4 flex-wrap">
            <Button onClick={() => setCustomerModalOpen(true)} size="lg">
              Find a Tailor
            </Button>
            <Button onClick={() => setTailorModalOpen(true)} variant="outline" size="lg">
              Become a Tailor
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tailorsData.map((tailor) => (
              <TailorCard
                key={tailor.id}
                tailor={tailor}
                onViewProfile={handleViewProfile}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Modals */}
      <CustomerModal open={customerModalOpen} onOpenChange={setCustomerModalOpen} />
      <TailorModal open={tailorModalOpen} onOpenChange={setTailorModalOpen} />
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

export default Index;
