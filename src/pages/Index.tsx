
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SearchSymptoms } from "@/components/SearchSymptoms";
import { SystemCategoryCard } from "@/components/SystemCategoryCard";
import { SymptomCard } from "@/components/SymptomCard";
import { Link } from "react-router-dom";
import { Car, ArrowRight, Wrench, Users, Shield } from "lucide-react";
import { systemCategories, symptoms } from "@/data/mockData";

const Index = () => {
  const featuredSymptoms = symptoms.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Car Troubleshooting Expert System
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Diagnose Car Problems with Confidence
              </h1>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get accurate automotive diagnostics with our interactive troubleshooting system. 
                Find solutions to common car problems in minutes.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/symptoms">
                  <Button size="lg" className="gap-2">
                    Start Troubleshooting 
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-automotive-blue via-primary to-blue-500 opacity-30 blur"></div>
                <div className="relative bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center justify-center mb-6">
                    <Car className="h-16 w-16 text-automotive-blue" />
                  </div>
                  <SearchSymptoms />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Categories Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Troubleshoot by System</h2>
            <p className="text-muted-foreground md:text-xl">
              Select a vehicle system to diagnose specific issues
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {systemCategories.map(category => (
              <SystemCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Symptoms Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Common Issues</h2>
            <p className="text-muted-foreground md:text-xl">
              Start diagnosing these frequently encountered problems
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {featuredSymptoms.map(symptom => (
              <SymptomCard key={symptom.id} symptom={symptom} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link to="/symptoms">
              <Button variant="outline">View All Symptoms</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Why Choose AutoSense?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="bg-primary/10 p-3 rounded-full">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Expert Diagnostics</h3>
              <p className="text-muted-foreground">
                Access professional-grade diagnostic flows developed by automotive experts.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="bg-primary/10 p-3 rounded-full">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Community Knowledge</h3>
              <p className="text-muted-foreground">
                Benefit from the collective experience of mechanics and car enthusiasts.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="bg-primary/10 p-3 rounded-full">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Verified Solutions</h3>
              <p className="text-muted-foreground">
                All troubleshooting paths and solutions are verified by certified professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Ready to Troubleshoot Your Car?</h2>
            <p className="md:text-xl max-w-[600px]">
              Create an account to save your vehicle information and troubleshooting history.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Link to="/signup">
                <Button variant="secondary" size="lg">Sign Up Now</Button>
              </Link>
              <Link to="/symptoms">
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                  Start Without Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
