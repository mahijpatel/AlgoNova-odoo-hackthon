import { useState } from "react";
import { ArrowLeft, ArrowUp, ArrowDown, MessageSquare, Share2, Bookmark, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

export default function QuestionDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const [newAnswer, setNewAnswer] = useState("");
  const [questionVote, setQuestionVote] = useState(0);
  const [answerVotes, setAnswerVotes] = useState<{[key: string]: number}>({});

  // Mock question data
  const question = {
    id: id || "1",
    title: "How to implement React hooks effectively in a large application?",
    content: `I'm working on a large React application and I'm wondering about the best practices for implementing hooks. Should I create custom hooks for shared logic?

Here's what I'm currently doing:

\`\`\`jsx
function useUserData(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchUser(userId).then(userData => {
      setUser(userData);
      setLoading(false);
    });
  }, [userId]);
  
  return { user, loading };
}
\`\`\`

Is this the right approach? What are the performance implications?`,
    author: {
      name: "John Developer",
      avatar: "/placeholder.svg",
      reputation: 1250
    },
    votes: 15,
    views: 234,
    tags: ["react", "hooks", "javascript", "performance"],
    createdAt: "2 hours ago",
    answers: [
      {
        id: "1",
        content: `Yes, creating custom hooks for shared logic is definitely a good practice! Your approach looks solid. Here are some additional considerations:

1. **Memoization**: Consider using \`useMemo\` and \`useCallback\` for expensive operations
2. **Error handling**: Add proper error boundaries
3. **Testing**: Custom hooks are easier to test in isolation

\`\`\`jsx
function useUserData(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchUserData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const userData = await fetchUser(userId);
      setUser(userData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [userId]);
  
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);
  
  return { user, loading, error, refetch: fetchUserData };
}
\`\`\``,
        author: {
          name: "Sarah Expert",
          avatar: "/placeholder.svg",
          reputation: 5420
        },
        votes: 8,
        createdAt: "1 hour ago",
        isAccepted: true
      },
      {
        id: "2",
        content: `Custom hooks are great, but be careful about over-abstracting. Sometimes a simple \`useEffect\` in the component is more readable.

Also consider using libraries like SWR or React Query for data fetching - they handle caching, revalidation, and error states automatically.`,
        author: {
          name: "Mike React",
          avatar: "/placeholder.svg",
          reputation: 3100
        },
        votes: 3,
        createdAt: "30 minutes ago",
        isAccepted: false
      }
    ]
  };

  const handleVote = (type: 'up' | 'down', target: 'question' | string) => {
    if (target === 'question') {
      setQuestionVote(prev => type === 'up' ? prev + 1 : prev - 1);
    } else {
      setAnswerVotes(prev => ({
        ...prev,
        [target]: (prev[target] || 0) + (type === 'up' ? 1 : -1)
      }));
    }
    toast({
      description: `Vote ${type === 'up' ? 'up' : 'down'} recorded!`
    });
  };

  const handleSubmitAnswer = () => {
    if (newAnswer.trim()) {
      toast({
        description: "Answer posted successfully!"
      });
      setNewAnswer("");
      // Here you would normally submit to backend
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="space-y-6">
          {/* Back button */}
          <Button variant="ghost" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Questions
          </Button>

          {/* Question */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-foreground mb-2">{question.title}</h1>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>Asked {question.createdAt}</span>
                    <span>Viewed {question.views} times</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                {/* Vote controls */}
                <div className="flex flex-col items-center space-y-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleVote('up', 'question')}
                  >
                    <ArrowUp className="h-5 w-5" />
                  </Button>
                  <span className="font-bold text-lg">{question.votes + questionVote}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleVote('down', 'question')}
                  >
                    <ArrowDown className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="h-5 w-5" />
                  </Button>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="prose max-w-none">
                    <pre className="whitespace-pre-wrap text-sm">{question.content}</pre>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {question.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>

                  {/* Author info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4 mr-1" />
                        Share
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Flag className="h-4 w-4 mr-1" />
                        Flag
                      </Button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={question.author.avatar} />
                        <AvatarFallback>{question.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="text-sm">
                        <div className="font-medium">{question.author.name}</div>
                        <div className="text-muted-foreground">{question.author.reputation} reputation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Answers */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">{question.answers.length} Answer{question.answers.length !== 1 ? 's' : ''}</h2>
            
            {question.answers.map((answer) => (
              <Card key={answer.id} className={answer.isAccepted ? 'border-success' : ''}>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    {/* Vote controls */}
                    <div className="flex flex-col items-center space-y-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleVote('up', answer.id)}
                      >
                        <ArrowUp className="h-5 w-5" />
                      </Button>
                      <span className="font-bold text-lg">{answer.votes + (answerVotes[answer.id] || 0)}</span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleVote('down', answer.id)}
                      >
                        <ArrowDown className="h-5 w-5" />
                      </Button>
                      {answer.isAccepted && (
                        <div className="bg-success text-success-foreground rounded-full p-1">
                          ✓
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div className="prose max-w-none">
                        <pre className="whitespace-pre-wrap text-sm">{answer.content}</pre>
                      </div>

                      {/* Author info */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4 mr-1" />
                            Share
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Flag className="h-4 w-4 mr-1" />
                            Flag
                          </Button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={answer.author.avatar} />
                            <AvatarFallback>{answer.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="text-sm">
                            <div className="font-medium">{answer.author.name}</div>
                            <div className="text-muted-foreground">{answer.author.reputation} reputation • {answer.createdAt}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Answer form */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Your Answer</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Write your answer here..."
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                className="min-h-32"
              />
              <div className="flex justify-end">
                <Button onClick={handleSubmitAnswer} disabled={!newAnswer.trim()}>
                  Post Your Answer
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}