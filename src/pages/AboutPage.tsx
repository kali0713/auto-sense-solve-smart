
import { Layout } from "@/components/Layout";
import { Car, Wrench, Shield, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-16 px-4 md:px-6">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About AutoSense</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Your expert companion for car troubleshooting, providing accurate diagnostics
            and solutions for vehicle problems.
          </p>
        </div>

        <div className="grid gap-12 mb-12">
          <section>
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg mb-4">
              AutoSense was founded with a clear mission: to empower vehicle owners with professional-grade 
              diagnostic tools and knowledge, making car maintenance and troubleshooting accessible to everyone.
            </p>
            <p className="text-lg">
              We believe that understanding your vehicle shouldn't require years of mechanical training or 
              expensive equipment. By combining expert automotive knowledge with intuitive technology, 
              we help you identify problems quickly and make informed decisions about repairs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">How AutoSense Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Symptom Analysis</h3>
                <p>
                  Identify your car's symptoms through our interactive diagnostic tool that guides you through 
                  the troubleshooting process step by step.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Knowledge</h3>
                <p>
                  Access our comprehensive database of vehicle problems and solutions, vetted by professional 
                  mechanics and automotive engineers.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                <p>
                  Connect with other vehicle owners and mechanics who have experienced similar issues and 
                  learn from their solutions.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Our Commitment to Accuracy</h2>
            <p className="text-lg mb-4">
              At AutoSense, we understand that vehicle diagnostics require precision. Every troubleshooting 
              path in our system has been developed based on manufacturer service manuals, professional 
              mechanic input, and real-world testing.
            </p>
            <p className="text-lg">
              Our diagnostic algorithms are continuously refined based on user feedback and new vehicle 
              information, ensuring you receive the most accurate advice possible for your specific situation.
            </p>
          </section>
        </div>

        <section className="bg-muted/50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Ready to diagnose your car?</h2>
          <p className="text-center text-lg mb-8">
            Begin troubleshooting your vehicle issues today with our expert system.
          </p>
          <div className="flex justify-center">
            <a href="/symptoms" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
              Start Troubleshooting
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
