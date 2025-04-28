
import { useState } from "react";
import { Question, Answer } from "@/types";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

interface QuestionStepProps {
  question: Question;
  onAnswer: (answer: Answer) => void;
  previousAnswers?: Answer[];
  onBack?: () => void;
  currentStep?: number;
  totalSteps?: number;
}

export function QuestionStep({
  question,
  onAnswer,
  previousAnswers,
  onBack,
  currentStep,
  totalSteps,
}: QuestionStepProps) {
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);

  const handleAnswerSelect = (id: string) => {
    setSelectedAnswerId(id);
  };

  const handleSubmit = () => {
    if (selectedAnswerId) {
      const selectedAnswer = question.answers.find(a => a.id === selectedAnswerId);
      if (selectedAnswer) {
        onAnswer(selectedAnswer);
      }
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-automotive-blue" />
          {question.text}
        </CardTitle>
        {currentStep !== undefined && totalSteps !== undefined && (
          <div className="text-sm text-muted-foreground">
            Step {currentStep} of {totalSteps || '?'}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedAnswerId || ""}
          onValueChange={handleAnswerSelect}
          className="space-y-3"
        >
          {question.answers.map((answer) => (
            <div
              key={answer.id}
              className="flex items-center space-x-2 p-3 border rounded-md cursor-pointer hover:bg-secondary/50"
              onClick={() => handleAnswerSelect(answer.id)}
            >
              <RadioGroupItem value={answer.id} id={answer.id} />
              <Label htmlFor={answer.id} className="flex-1 cursor-pointer">
                {answer.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex gap-2 justify-between">
        {onBack && (
          <Button variant="outline" onClick={onBack}>
            Back
          </Button>
        )}
        <Button 
          onClick={handleSubmit} 
          disabled={!selectedAnswerId}
          className={onBack ? "" : "ml-auto"}
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
