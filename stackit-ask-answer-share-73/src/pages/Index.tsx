import { Plus, Filter, SortAsc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import QuestionCard from "@/components/QuestionCard";

const Index = () => {
  // Mock data for demonstration
  const sampleQuestions = [
    {
      id: "1",
      title: "How to implement React hooks effectively in a large application?",
      content: "I'm working on a large React application and I'm wondering about the best practices for implementing hooks. Should I create custom hooks for shared logic?",
      author: {
        name: "John Developer",
        avatar: "/placeholder.svg"
      },
      votes: 15,
      answers: 3,
      views: 234,
      tags: ["react", "hooks", "javascript"],
      createdAt: "2 hours ago",
      hasAcceptedAnswer: true
    },
    {
      id: "2", 
      title: "TypeScript generic constraints not working as expected",
      content: "I'm trying to create a generic function with constraints but TypeScript is throwing errors. Here's my code...",
      author: {
        name: "Sarah TypeScript",
        avatar: "/placeholder.svg"
      },
      votes: 8,
      answers: 1,
      views: 156,
      tags: ["typescript", "generics", "constraints"],
      createdAt: "4 hours ago"
    },
    {
      id: "3",
      title: "Best practices for handling JWT authentication in Node.js",
      content: "What are the security considerations when implementing JWT authentication? Should I store tokens in localStorage or httpOnly cookies?",
      author: {
        name: "Mike Security",
        avatar: "/placeholder.svg"
      },
      votes: 22,
      answers: 5,
      views: 445,
      tags: ["node.js", "jwt", "authentication", "security"],
      createdAt: "6 hours ago",
      hasAcceptedAnswer: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          <Sidebar />
          
          <main className="flex-1 space-y-6">
            {/* Page header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">All Questions</h1>
                <p className="text-muted-foreground mt-1">{sampleQuestions.length} questions</p>
              </div>
              
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Ask Question
              </Button>
            </div>

            {/* Filters and sorting */}
            <div className="flex items-center justify-between bg-card p-4 rounded-lg border">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                
                <Select defaultValue="newest">
                  <SelectTrigger className="w-40">
                    <SortAsc className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="votes">Most Votes</SelectItem>
                    <SelectItem value="active">Most Active</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="text-sm text-muted-foreground">
                Showing all questions
              </div>
            </div>

            {/* Questions list */}
            <div className="space-y-4">
              {sampleQuestions.map((question) => (
                <QuestionCard key={question.id} question={question} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
