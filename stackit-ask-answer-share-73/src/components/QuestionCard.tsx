import { ArrowUp, ArrowDown, MessageSquare, Eye, Tag } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

interface QuestionCardProps {
  question: {
    id: string;
    title: string;
    content: string;
    author: {
      name: string;
      avatar?: string;
    };
    votes: number;
    answers: number;
    views: number;
    tags: string[];
    createdAt: string;
    hasAcceptedAnswer?: boolean;
  };
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const navigate = useNavigate();
  return (
    <Card className="w-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 
              className="text-lg font-semibold text-foreground hover:text-primary cursor-pointer line-clamp-2"
              onClick={() => navigate(`/question/${question.id}`)}
            >
              {question.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
              {question.content}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {question.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          {/* Stats */}
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <ArrowUp className="h-4 w-4" />
              <span>{question.votes}</span>
            </div>
            <div className={`flex items-center space-x-1 ${
              question.hasAcceptedAnswer ? 'text-success' : ''
            }`}>
              <MessageSquare className="h-4 w-4" />
              <span>{question.answers}</span>
              {question.hasAcceptedAnswer && (
                <span className="text-success">✓</span>
              )}
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{question.views}</span>
            </div>
          </div>

          {/* Author and time */}
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={question.author.avatar} />
              <AvatarFallback className="text-xs">
                {question.author.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="text-xs text-muted-foreground">
              <span className="font-medium">{question.author.name}</span>
              <span className="ml-1">{question.createdAt}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}