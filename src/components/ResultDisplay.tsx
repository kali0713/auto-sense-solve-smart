
import { Result } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Info, AlertCircle, FileText, Share, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface ResultDisplayProps {
  result: Result;
  onRestart: () => void;
}

export function ResultDisplay({ result, onRestart }: ResultDisplayProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "text-red-500 bg-red-50";
      case "high":
        return "text-orange-500 bg-orange-50";
      case "medium":
        return "text-amber-500 bg-amber-50";
      case "low":
        return "text-green-500 bg-green-50";
      default:
        return "text-blue-500 bg-blue-50";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <AlertCircle className="h-5 w-5" />;
      case "high":
        return <AlertTriangle className="h-5 w-5" />;
      case "medium":
        return <Info className="h-5 w-5" />;
      case "low":
        return <CheckCircle className="h-5 w-5" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };

  const severityClass = getSeverityColor(result.severityLevel);
  const severityIcon = getSeverityIcon(result.severityLevel);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-2xl">{result.title}</CardTitle>
            <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${severityClass}`}>
              {severityIcon}
              <span className="capitalize">{result.severityLevel} Severity</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg">{result.description}</p>
          
          <div>
            <h3 className="font-medium text-lg mb-3">Possible Causes</h3>
            <ul className="space-y-2 pl-5 list-disc">
              {result.possibleCauses.map((cause, index) => (
                <li key={index}>{cause}</li>
              ))}
            </ul>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="font-medium text-lg mb-3">Recommended Solutions</h3>
            <ul className="space-y-3">
              {result.recommendedSolutions.map((solution, index) => (
                <li key={index} className="flex gap-2 items-start">
                  <span className="flex-shrink-0 mt-1 bg-primary text-white text-xs font-medium h-5 w-5 flex items-center justify-center rounded-full">
                    {index + 1}
                  </span>
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pt-4 flex flex-wrap gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Save as PDF
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Share className="h-4 w-4" />
              Share Results
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Printer className="h-4 w-4" />
              Print
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-center">
        <Button onClick={onRestart} variant="secondary">Start New Diagnosis</Button>
      </div>
    </div>
  );
}
