import { Home, HelpCircle, Tag, Users, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const popularTags = [
    { name: "react", count: 1234 },
    { name: "javascript", count: 2456 },
    { name: "typescript", count: 987 },
    { name: "node.js", count: 654 },
    { name: "css", count: 432 },
  ];

  return (
    <aside className="w-64 space-y-4">
      {/* Navigation */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Navigation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          <Button variant="ghost" className="w-full justify-start" size="sm" onClick={() => navigate("/")}>
            <Home className="h-4 w-4 mr-2" />
            Home
          </Button>
          <Button variant="ghost" className="w-full justify-start" size="sm" onClick={() => navigate("/")}>
            <HelpCircle className="h-4 w-4 mr-2" />
            Questions
          </Button>
          <Button variant="ghost" className="w-full justify-start" size="sm" onClick={() => navigate("/tags")}>
            <Tag className="h-4 w-4 mr-2" />
            Tags
          </Button>
          <Button variant="ghost" className="w-full justify-start" size="sm" onClick={() => navigate("/users")}>
            <Users className="h-4 w-4 mr-2" />
            Users
          </Button>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium flex items-center">
            <TrendingUp className="h-4 w-4 mr-2" />
            Popular Tags
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {popularTags.map((tag) => (
            <div key={tag.name} className="flex items-center justify-between cursor-pointer hover:bg-accent rounded p-1" onClick={() => navigate(`/tags`)}>
              <Badge variant="outline" className="text-xs">
                {tag.name}
              </Badge>
              <span className="text-xs text-muted-foreground">{tag.count}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium flex items-center">
            <Star className="h-4 w-4 mr-2" />
            Community Stats
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Questions</span>
            <span className="font-medium">12,345</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Answers</span>
            <span className="font-medium">23,456</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Users</span>
            <span className="font-medium">3,456</span>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}