
import { Link } from "react-router-dom";
import { Car } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-background mt-auto">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Car className="h-5 w-5 text-automotive-blue" />
              <span className="font-bold text-lg">AutoSense</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your expert car troubleshooting companion, providing accurate diagnostics and solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/symptoms" className="text-muted-foreground hover:text-foreground">
                  Troubleshoot
                </Link>
              </li>
              <li>
                <Link to="/knowledge-base" className="text-muted-foreground hover:text-foreground">
                  Knowledge Base
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Account</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/login" className="text-muted-foreground hover:text-foreground">
                  Log In
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-muted-foreground hover:text-foreground">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-foreground">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-4 flex flex-col md:flex-row gap-4 justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} AutoSense. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            This is a demonstration application. Not for actual vehicle repairs.
          </p>
        </div>
      </div>
    </footer>
  );
}
