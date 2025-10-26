import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import MostLikedDesigns from "./pages/MostLikedDesigns";
import TrendingTailors from "./pages/TrendingTailors";
import UrgentTailors from "./pages/UrgentTailors";
import PairingIdeas from "./pages/PairingIdeas";
import CategoryDesigns from "./pages/CategoryDesigns";
import TailorProfile from "./pages/TailorProfile";
import Profile from "./pages/Profile";
import Measurements from "./pages/Measurements";
import LikedDesigns from "./pages/LikedDesigns";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import { toast } from "sonner";

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    avatar?: string;
  } | null>(null);

  const handleLogin = () => {
    setUser({
      name: "John Doe",
      email: "john@example.com",
    });
    toast.success("Logged in successfully!");
  };

  const handleSignup = () => {
    setUser({
      name: "John Doe",
      email: "john@example.com",
    });
    toast.success("Account created successfully!");
  };

  const handleLogout = () => {
    setUser(null);
    toast.info("Logged out successfully");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation
            user={user}
            onLogin={handleLogin}
            onSignup={handleSignup}
            onLogout={handleLogout}
          />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/most-liked" element={<MostLikedDesigns />} />
            <Route path="/trending-tailors" element={<TrendingTailors />} />
            <Route path="/urgent-tailors" element={<UrgentTailors />} />
            <Route path="/pairing-ideas" element={<PairingIdeas />} />
            <Route path="/category/:category" element={<CategoryDesigns />} />
            <Route path="/tailor/:id" element={<TailorProfile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/measurements" element={<Measurements />} />
            <Route path="/liked-designs" element={<LikedDesigns />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/settings" element={<Settings />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
