import { ShoppingBag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Wishlist = () => {
  // Demo wishlist items
  const wishlistItems: any[] = [];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-bold text-primary">My Wishlist</h1>

        {wishlistItems.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {wishlistItems.map((item: any) => (
              <Card key={item.id} className="p-4">
                <p>{item.name}</p>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-xl text-muted-foreground mb-4">Your wishlist is empty.</p>
            <Button onClick={() => window.location.href = "/"}>Start Shopping</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
