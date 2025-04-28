import { Layout } from "@/components/Layout";
import { QuestionStep } from "@/components/QuestionStep";
import { ResultDisplay } from "@/components/ResultDisplay";
import { Answer, Question, Result } from "@/types";
import { questions, symptoms, results } from "@/data/mockData";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TroubleshootPage = () => {
  const { symptomId } = useParams<{ symptomId: string }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [previousQuestions, setPreviousQuestions] = useState<Question[]>([]);
  const [previousAnswers, setPreviousAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (symptomId) {
      const symptom = symptoms.find(s => s.id === symptomId);
      
      if (symptom) {
        // Find the first question in the troubleshooting flow
        const firstQuestion = questions.find(q => q.id === symptom.firstQuestionId);
        
        if (firstQuestion) {
          setCurrentQuestion(firstQuestion);
        } else {
          setError("Could not find the first question for this symptom.");
        }
      } else {
        setError("Symptom not found.");
      }
      
      setLoading(false);
    }
  }, [symptomId]);

  const handleAnswer = (answer: Answer) => {
    // Store the current question and this answer in history
    if (currentQuestion) {
      setPreviousQuestions(prev => [...prev, currentQuestion]);
      setPreviousAnswers(prev => [...prev, answer]);
    }
    
    if (answer.isTerminal) {
      // If this is a terminal answer, show the result
      const resultData = results.find(r => r.id === answer.resultId);
      if (resultData) {
        setResult(resultData);
        setCurrentQuestion(null);
      } else {
        setError("Could not find the result for this diagnosis.");
      }
    } else if (answer.nextQuestionId) {
      // Otherwise, find the next question
      const nextQuestion = questions.find(q => q.id === answer.nextQuestionId);
      if (nextQuestion) {
        setCurrentQuestion(nextQuestion);
      } else {
        setError("Could not find the next question in the troubleshooting flow.");
      }
    }
  };

  const handleBack = () => {
    if (previousQuestions.length > 0) {
      // Pop the last question from history and make it the current question
      const newPreviousQuestions = [...previousQuestions];
      const lastQuestion = newPreviousQuestions.pop();
      
      // Also remove the last answer
      const newPreviousAnswers = [...previousAnswers];
      newPreviousAnswers.pop();
      
      setCurrentQuestion(lastQuestion || null);
      setPreviousQuestions(newPreviousQuestions);
      setPreviousAnswers(newPreviousAnswers);
    }
  };

  const handleRestart = () => {
    // Reset everything and start over
    if (symptomId) {
      const symptom = symptoms.find(s => s.id === symptomId);
      
      if (symptom) {
        const firstQuestion = questions.find(q => q.id === symptom.firstQuestionId);
        
        if (firstQuestion) {
          setCurrentQuestion(firstQuestion);
          setPreviousQuestions([]);
          setPreviousAnswers([]);
          setResult(null);
          setError(null);
        }
      }
    }
  };

  const symptom = symptomId ? symptoms.find(s => s.id === symptomId) : null;

  if (loading) {
    return (
      <Layout>
        <div className="container py-12 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-pulse-slow h-6 w-36 bg-muted rounded mx-auto mb-4"></div>
            <div className="animate-pulse-slow h-8 w-64 bg-muted rounded mx-auto"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="container py-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold">Oops! Something went wrong</h2>
            <p className="text-muted-foreground">{error}</p>
            <Button onClick={() => navigate('/symptoms')}>
              Return to Symptoms
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        <Button 
          variant="ghost" 
          className="flex items-center gap-2 mb-6"
          onClick={() => navigate('/symptoms')}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Symptoms
        </Button>
        
        <div className="flex flex-col items-center gap-6 text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold">
            {symptom ? symptom.name : 'Troubleshooting'}
          </h1>
          <p className="text-muted-foreground max-w-[700px]">
            {symptom?.description || 'Answer the following questions to diagnose your car issue.'}
          </p>
        </div>
        
        <div className="py-6">
          {currentQuestion && (
            <QuestionStep
              question={currentQuestion}
              onAnswer={handleAnswer}
              previousAnswers={previousAnswers}
              onBack={previousQuestions.length > 0 ? handleBack : undefined}
              currentStep={previousQuestions.length + 1}
              totalSteps={previousQuestions.length + (result ? 0 : 1)}
            />
          )}
          
          {result && (
            <ResultDisplay result={result} onRestart={handleRestart} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default TroubleshootPage;
