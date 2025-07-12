import { Bell, Search, User, Plus, LogIn, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  
  const notifications = [
    { id: 1, message: "Sarah Expert answered your question", time: "2 hours ago", unread: true },
    { id: 2, message: "Mike React upvoted your answer", time: "4 hours ago", unread: true },
    { id: 3, message: "New answer on 'React Hooks Best Practices'", time: "6 hours ago", unread: false }
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-xl text-foreground">StackIt</span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search questions..."
              className="pl-10 w-full"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
            Questions
          </Button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/tags")}>
            Tags
          </Button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/users")}>
            Users
          </Button>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-2">
          <Button variant="default" size="sm" className="hidden sm:flex" onClick={() => navigate("/ask")}>
            <Plus className="h-4 w-4 mr-2" />
            Ask Question
          </Button>

          {/* Notifications */}
          <DropdownMenu open={showNotifications} onOpenChange={setShowNotifications}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                  {notifications.filter(n => n.unread).length}
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80">
              {notifications.map((notification) => (
                <DropdownMenuItem key={notification.id} className={`p-3 ${notification.unread ? 'bg-accent/50' : ''}`}>
                  <div className="flex-1">
                    <p className="text-sm">{notification.message}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                  {notification.unread && (
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => navigate("/login")}>
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/register")}>
                <User className="h-4 w-4 mr-2" />
                Sign Up
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => navigate("/")}>Questions</DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/tags")}>Tags</DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/users")}>Users</DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/ask")}>Ask Question</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}