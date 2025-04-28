
import { Layout } from "@/components/Layout";
import { SearchSymptoms } from "@/components/SearchSymptoms";
import { SymptomCard } from "@/components/SymptomCard";
import { symptoms, systemCategories } from "@/data/mockData";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Symptom } from "@/types";
import { Separator } from "@/components/ui/separator";

const SymptomsPage = () => {
  const location = useLocation();
  const [filteredSymptoms, setFilteredSymptoms] = useState<Symptom[]>(symptoms);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  
  // Extract category from URL query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    
    if (category) {
      setSelectedCategory(category);
      setFilteredSymptoms(
        symptoms.filter(symptom => symptom.systemCategory === category)
      );
    } else {
      setSelectedCategory("");
      setFilteredSymptoms(symptoms);
    }
  }, [location.search]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === "") {
      setFilteredSymptoms(symptoms);
    } else {
      setFilteredSymptoms(
        symptoms.filter(symptom => symptom.systemCategory === categoryId)
      );
    }
  };

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Find Your Car Symptoms
          </h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Search for specific symptoms or browse by vehicle system to start troubleshooting.
          </p>
          
          <div className="w-full max-w-3xl mt-2 mb-8">
            <SearchSymptoms />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mt-8">
          {/* Desktop Filter */}
          <div className="w-full md:w-64 lg:w-72 hidden md:block">
            <div className="sticky top-24 bg-white p-5 rounded-lg border">
              <h3 className="font-semibold mb-4">Filter by System</h3>
              <RadioGroup 
                value={selectedCategory} 
                onValueChange={handleCategoryChange}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="" id="all" />
                  <Label htmlFor="all" className="cursor-pointer">All Systems</Label>
                </div>
                <Separator className="my-2" />
                {systemCategories.map(category => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={category.id} id={category.id} />
                    <Label htmlFor={category.id} className="cursor-pointer">{category.name}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>

          {/* Mobile Filter Button */}
          <div className="w-full flex md:hidden mb-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter Symptoms
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filter Symptoms</SheetTitle>
                  <SheetDescription>
                    Filter the symptoms by vehicle system
                  </SheetDescription>
                </SheetHeader>
                <div className="py-6">
                  <RadioGroup 
                    value={selectedCategory} 
                    onValueChange={handleCategoryChange}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="" id="mobile-all" />
                      <Label htmlFor="mobile-all" className="cursor-pointer">All Systems</Label>
                    </div>
                    <Separator className="my-2" />
                    {systemCategories.map(category => (
                      <div key={`mobile-${category.id}`} className="flex items-center space-x-2">
                        <RadioGroupItem value={category.id} id={`mobile-${category.id}`} />
                        <Label htmlFor={`mobile-${category.id}`} className="cursor-pointer">{category.name}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Apply Filters</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          {/* Symptoms Grid */}
          <div className="w-full md:flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSymptoms.map(symptom => (
                <SymptomCard key={symptom.id} symptom={symptom} />
              ))}
            </div>

            {filteredSymptoms.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-muted-foreground mb-4">No symptoms found for this system category.</p>
                <Button variant="outline" onClick={() => handleCategoryChange("")}>
                  Show All Symptoms
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SymptomsPage;
