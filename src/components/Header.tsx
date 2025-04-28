
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, UserCircle, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Car className="h-6 w-6 text-automotive-blue" />
            <span className="font-bold text-xl hidden sm:inline">AutoSense</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm">
            <Link to="/symptoms" className="font-medium transition-colors hover:text-automotive-blue">
              Troubleshoot
            </Link>
            <Link to="/knowledge-base" className="font-medium transition-colors hover:text-automotive-blue">
              Knowledge Base
            </Link>
            <Link to="/vehicles" className="font-medium transition-colors hover:text-automotive-blue">
              My Garage
            </Link>
            <Link to="/community" className="font-medium transition-colors hover:text-automotive-blue">
              Community
            </Link>
            <Link to="/about" className="font-medium transition-colors hover:text-automotive-blue">
              About
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <Link to="/dashboard">
              <Button variant="ghost" size="icon" className="rounded-full">
                <UserCircle className="h-6 w-6" />
              </Button>
            </Link>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Link to="/login">
                <Button variant="ghost">Log In</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                <Link to="/symptoms" className="px-4 py-2 text-sm font-medium rounded-md hover:bg-muted">
                  Troubleshoot
                </Link>
                <Link to="/knowledge-base" className="px-4 py-2 text-sm font-medium rounded-md hover:bg-muted">
                  Knowledge Base
                </Link>
                <Link to="/vehicles" className="px-4 py-2 text-sm font-medium rounded-md hover:bg-muted">
                  My Garage
                </Link>
                <Link to="/community" className="px-4 py-2 text-sm font-medium rounded-md hover:bg-muted">
                  Community
                </Link>
                <Link to="/about" className="px-4 py-2 text-sm font-medium rounded-md hover:bg-muted">
                  About
                </Link>
                {!isLoggedIn && (
                  <>
                    <Link to="/login" className="mt-4">
                      <Button variant="outline" className="w-full">Log In</Button>
                    </Link>
                    <Link to="/signup">
                      <Button className="w-full">Sign Up</Button>
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
