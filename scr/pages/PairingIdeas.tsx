import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PairingIdeas = () => {
  const ideas = [
    {
      id: 1,
      title: "Old Saree to Modern Dress",
      from: "Traditional Silk Saree",
      to: "Contemporary A-line Dress",
      description: "Transform your cherished silk saree into a stunning modern dress with intricate embroidery preserved as statement pieces."
    },
    {
      id: 2,
      title: "Vintage Saree to Crop Top & Skirt",
      from: "Vintage Banarasi Saree",
      to: "Crop Top with Lehenga Skirt",
      description: "Repurpose your beautiful Banarasi saree into a trendy crop top and flared skirt set perfect for festivities."
    },
    {
      id: 3,
      title: "Silk Saree to Jacket & Palazzo",
      from: "Designer Silk Saree",
      to: "Indo-Western Jacket with Palazzo",
      description: "Convert your elegant silk saree into a chic jacket paired with comfortable palazzo pants."
    },
    {
      id: 4,
      title: "Wedding Saree to Anarkali",
      from: "Heavy Wedding Saree",
      to: "Designer Anarkali Suit",
      description: "Transform your wedding saree into a gorgeous Anarkali suit that preserves the intricate work."
    },
    {
      id: 5,
      title: "Old Saree to Kids' Lehenga",
      from: "Traditional Saree",
      to: "Kids' Lehenga Choli",
      description: "Turn your old saree into a beautiful lehenga for your little one, keeping family traditions alive."
    },
    {
      id: 6,
      title: "Saree to Gown",
      from: "Embroidered Saree",
      to: "Floor-Length Gown",
      description: "Transform your embroidered saree into an elegant floor-length gown perfect for special occasions."
    },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Pairing Ideas</h1>
          <p className="text-muted-foreground">
            Creative ways to transform your old garments into stunning new designs
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ideas.map((idea) => (
            <Card key={idea.id} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-4">{idea.title}</h3>
              
              <div className="space-y-4 mb-4">
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">From:</p>
                  <p className="font-medium">{idea.from}</p>
                </div>
                
                <div className="flex justify-center">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
                
                <div className="p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">To:</p>
                  <p className="font-medium text-primary">{idea.to}</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                {idea.description}
              </p>
              
              <Button className="w-full">Find Tailors for This</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PairingIdeas;
