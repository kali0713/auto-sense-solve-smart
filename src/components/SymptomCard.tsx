
import { Symptom } from "@/types";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SymptomCardProps {
  symptom: Symptom;
}

export function SymptomCard({ symptom }: SymptomCardProps) {
  return (
    <Card className="h-full flex flex-col hover:border-automotive-blue transition-all">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-automotive-blue" />
          {symptom.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">
          {symptom.description}
        </p>
      </CardContent>
      <CardFooter>
        <Link to={`/troubleshoot/${symptom.id}`} className="w-full">
          <Button variant="outline" className="w-full flex items-center justify-between">
            Diagnose Problem
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
