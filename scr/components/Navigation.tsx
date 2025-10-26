import { User, LogOut, Settings, Ruler, Heart, ShoppingBag, Globe, Package } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useNavigate, NavLink } from "react-router-dom";

interface NavigationProps {
  user?: {
    name: string;
    email: string;
    avatar?: string;
  } | null;
  onLogin?: () => void;
  onSignup?: () => void;
  onLogout?: () => void;
}

const Navigation = ({ user, onLogin, onSignup, onLogout }: NavigationProps) => {
  const navigate = useNavigate();

  const categories = ["Dresses", "Blouses", "Embroidery", "Party Wear", "Readymade"];

  return (
    <header className="sticky top-0 z-50 w-full bg-card shadow-sm">
      {/* Top Navigation Bar */}
      <div className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div 
            className="text-2xl font-bold text-primary cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate("/")}
          >
            DoorStitch
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="relative h-10 w-10 rounded-full ring-2 ring-primary/20 hover:ring-primary/40 transition-all"
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {user.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-card z-[100]" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    <User className="mr-2 h-4 w-4" />
                    <span>My Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/measurements")}>
                    <Ruler className="mr-2 h-4 w-4" />
                    <span>My Measurements</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/liked-designs")}>
                    <Heart className="mr-2 h-4 w-4" />
                    <span>Liked Designs</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/wishlist")}>
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    <span>Wishlist</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/orders")}>
                    <Package className="mr-2 h-4 w-4" />
                    <span>My Orders</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/settings")}>
                    <Globe className="mr-2 h-4 w-4" />
                    <span>Language Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={onLogout} className="text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  onClick={onLogin}
                  className="hover:-translate-y-0.5 transition-transform"
                >
                  Login
                </Button>
                <Button 
                  onClick={onSignup}
                  className="hover:-translate-y-0.5 transition-transform shadow-md hover:shadow-lg"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Secondary Navigation Bar */}
      <div className="border-b bg-background/50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-1 h-12 overflow-x-auto">
            <NavLink
              to="/most-liked"
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`
              }
            >
              Most Liked Designs
            </NavLink>
            <NavLink
              to="/trending-tailors"
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`
              }
            >
              Trending Tailors
            </NavLink>
            <NavLink
              to="/urgent-tailors"
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`
              }
            >
              Urgent Tailors
            </NavLink>
            <NavLink
              to="/pairing-ideas"
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`
              }
            >
              Pairing Ideas
            </NavLink>
            
            {/* Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-4 py-2 text-sm font-medium rounded-md hover:bg-secondary"
                >
                  Categories
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-card z-[100]" align="start">
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category}
                    onClick={() => navigate(`/category/${category.toLowerCase().replace(" ", "-")}`)}
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
