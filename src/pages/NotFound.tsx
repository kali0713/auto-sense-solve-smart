
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-300px)] flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="flex justify-center">
            <AlertTriangle className="h-16 w-16 text-automotive-red mb-4" />
          </div>
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Oops! We couldn't find the page you're looking for.
          </p>
          <p className="text-muted-foreground mb-8">
            The page might have been moved, deleted, or never existed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/">Return Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/symptoms">Browse Symptoms</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/knowledge-base">Knowledge Base</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
