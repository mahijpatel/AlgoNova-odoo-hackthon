import { useState } from "react";
import { Search, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

export default function Tags() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const allTags = [
    { name: "javascript", count: 2456, description: "For questions about the JavaScript programming language" },
    { name: "react", count: 1834, description: "A JavaScript library for building user interfaces" },
    { name: "typescript", count: 1245, description: "A superset of JavaScript that adds static typing" },
    { name: "node.js", count: 987, description: "JavaScript runtime built on Chrome's V8 JavaScript engine" },
    { name: "css", count: 876, description: "Cascading Style Sheets for styling web pages" },
    { name: "html", count: 654, description: "HyperText Markup Language for structuring web content" },
    { name: "python", count: 543, description: "A high-level programming language" },
    { name: "vue.js", count: 432, description: "A progressive JavaScript framework" },
    { name: "angular", count: 321, description: "A TypeScript-based web application framework" },
    { name: "mongodb", count: 298, description: "A NoSQL document database" },
    { name: "express", count: 245, description: "Fast, unopinionated web framework for Node.js" },
    { name: "git", count: 234, description: "Distributed version control system" },
    { name: "api", count: 223, description: "Application Programming Interface" },
    { name: "database", count: 198, description: "Systems for storing and retrieving data" },
    { name: "authentication", count: 167, description: "User identity verification and authorization" },
    { name: "redux", count: 145, description: "Predictable state container for JavaScript apps" }
  ];

  const filteredTags = allTags.filter(tag =>
    tag.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tag.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-2xl font-bold text-foreground">Tags</h1>
            <p className="text-muted-foreground mt-1">
              A tag is a keyword or label that categorizes your question with other, similar questions.
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Stats */}
          <div className="text-sm text-muted-foreground">
            {filteredTags.length} tag{filteredTags.length !== 1 ? 's' : ''} found
          </div>

          {/* Tags grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTags.map((tag) => (
              <Card 
                key={tag.name} 
                className="hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => navigate(`/questions?tag=${tag.name}`)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-sm">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag.name}
                    </Badge>
                    <span className="text-sm font-medium text-muted-foreground">
                      {tag.count} questions
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {tag.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTags.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No tags found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}