import { useState } from "react";
import { Search, User, Trophy, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

export default function Users() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    {
      id: "1",
      name: "Sarah Expert",
      username: "sarah_expert",
      avatar: "/placeholder.svg",
      reputation: 5420,
      questionsCount: 45,
      answersCount: 234,
      badges: { gold: 3, silver: 12, bronze: 28 },
      joinedAt: "Jan 2022",
      bio: "Senior Frontend Developer with 8+ years experience in React and TypeScript"
    },
    {
      id: "2",
      name: "Mike React",
      username: "mike_react",
      avatar: "/placeholder.svg",
      reputation: 3100,
      questionsCount: 23,
      answersCount: 156,
      badges: { gold: 1, silver: 8, bronze: 19 },
      joinedAt: "Mar 2022",
      bio: "React enthusiast and open source contributor"
    },
    {
      id: "3",
      name: "John Developer",
      username: "john_dev",
      avatar: "/placeholder.svg",
      reputation: 1250,
      questionsCount: 67,
      answersCount: 89,
      badges: { gold: 0, silver: 3, bronze: 15 },
      joinedAt: "Jul 2023",
      bio: "Full stack developer learning new technologies"
    },
    {
      id: "4",
      name: "Alice TypeScript",
      username: "alice_ts",
      avatar: "/placeholder.svg",
      reputation: 4200,
      questionsCount: 34,
      answersCount: 198,
      badges: { gold: 2, silver: 9, bronze: 22 },
      joinedAt: "Oct 2021",
      bio: "TypeScript expert and Angular developer"
    },
    {
      id: "5",
      name: "Bob Node",
      username: "bob_node",
      avatar: "/placeholder.svg",
      reputation: 2800,
      questionsCount: 19,
      answersCount: 134,
      badges: { gold: 1, silver: 6, bronze: 17 },
      joinedAt: "Feb 2023",
      bio: "Backend developer specializing in Node.js and databases"
    },
    {
      id: "6",
      name: "Emma Vue",
      username: "emma_vue",
      avatar: "/placeholder.svg",
      reputation: 1890,
      questionsCount: 28,
      answersCount: 92,
      badges: { gold: 0, silver: 4, bronze: 12 },
      joinedAt: "May 2023",
      bio: "Vue.js developer and UI/UX enthusiast"
    }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.bio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-2xl font-bold text-foreground">Users</h1>
            <p className="text-muted-foreground mt-1">
              Discover and connect with the community members
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Stats */}
          <div className="text-sm text-muted-foreground">
            {filteredUsers.length} user{filteredUsers.length !== 1 ? 's' : ''} found
          </div>

          {/* Users grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map((user) => (
              <Card 
                key={user.id} 
                className="hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => navigate(`/users/${user.username}`)}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback className="text-lg">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg text-foreground truncate">
                        {user.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">@{user.username}</p>
                      
                      <div className="flex items-center space-x-2 mt-2">
                        <Trophy className="h-4 w-4 text-warning" />
                        <span className="text-sm font-medium">{user.reputation.toLocaleString()}</span>
                        <span className="text-xs text-muted-foreground">reputation</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 mt-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Joined {user.joinedAt}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
                    {user.bio}
                  </p>

                  {/* Stats */}
                  <div className="flex justify-between mt-4 text-sm">
                    <div className="text-center">
                      <div className="font-medium">{user.questionsCount}</div>
                      <div className="text-muted-foreground text-xs">Questions</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">{user.answersCount}</div>
                      <div className="text-muted-foreground text-xs">Answers</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center space-x-1">
                        <Badge variant="secondary" className="h-5 w-5 p-0 text-xs bg-yellow-500 text-white">
                          {user.badges.gold}
                        </Badge>
                        <Badge variant="secondary" className="h-5 w-5 p-0 text-xs bg-gray-400 text-white">
                          {user.badges.silver}
                        </Badge>
                        <Badge variant="secondary" className="h-5 w-5 p-0 text-xs bg-orange-600 text-white">
                          {user.badges.bronze}
                        </Badge>
                      </div>
                      <div className="text-muted-foreground text-xs">Badges</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No users found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}