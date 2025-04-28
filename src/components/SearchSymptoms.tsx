
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { symptoms } from "@/data/mockData";
import { Symptom } from "@/types";
import { useNavigate } from "react-router-dom";

export function SearchSymptoms() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Symptom[]>([]);
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm.length > 2) {
      const results = symptoms.filter(
        symptom =>
          symptom.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (symptom.description?.toLowerCase().includes(searchTerm.toLowerCase()) || false)
      );
      setSearchResults(results);
      setIsResultsVisible(true);
    } else {
      setSearchResults([]);
      setIsResultsVisible(false);
    }
  }, [searchTerm]);

  const handleResultClick = (symptomId: string) => {
    setIsResultsVisible(false);
    navigate(`/troubleshoot/${symptomId}`);
  };

  return (
    <div className="relative w-full max-w-3xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for symptoms (e.g., 'engine not starting', 'brake noise')..."
          className="pl-10 h-12 text-base bg-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => searchResults.length > 0 && setIsResultsVisible(true)}
          onBlur={() => setTimeout(() => setIsResultsVisible(false), 200)}
        />
      </div>
      
      {isResultsVisible && searchResults.length > 0 && (
        <div className="absolute mt-1 w-full bg-white rounded-md border shadow-lg z-10 max-h-80 overflow-y-auto">
          <ul>
            {searchResults.map((result) => (
              <li
                key={result.id}
                className="px-4 py-3 hover:bg-muted cursor-pointer border-b last:border-0"
                onClick={() => handleResultClick(result.id)}
              >
                <div className="font-medium">{result.name}</div>
                <div className="text-sm text-muted-foreground">{result.description}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {isResultsVisible && searchTerm.length > 2 && searchResults.length === 0 && (
        <div className="absolute mt-1 w-full bg-white rounded-md border shadow-lg z-10 p-4 text-center">
          <p className="text-muted-foreground">No symptoms found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
}
