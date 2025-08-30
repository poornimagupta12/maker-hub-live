import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Book, Clock, Users, ArrowRight } from "lucide-react";

const tutorials = [
  {
    title: "Getting Started with ESP32",
    description: "Complete beginner's guide to ESP32 development, from setup to your first WiFi project.",
    duration: "45 min",
    difficulty: "Beginner",
    readers: "2.3k",
    category: "ESP32"
  },
  {
    title: "Building IoT Dashboard with Arduino",
    description: "Learn to create real-time data visualization dashboards for your Arduino sensors.",
    duration: "60 min",
    difficulty: "Intermediate",
    readers: "1.8k",
    category: "Arduino"
  },
  {
    title: "Home Automation with NodeMCU",
    description: "Step-by-step guide to automate your home using NodeMCU and various sensors.",
    duration: "90 min",
    difficulty: "Intermediate",
    readers: "3.1k",
    category: "NodeMCU"
  },
  {
    title: "Machine Learning on Microcontrollers",
    description: "Advanced tutorial on implementing TinyML models on ESP32 for edge computing.",
    duration: "120 min",
    difficulty: "Advanced",
    readers: "950",
    category: "ML"
  }
];

const TutorialsSection = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-accent text-accent-foreground";
      case "Intermediate":
        return "bg-primary text-primary-foreground";
      case "Advanced":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="tutorials" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Step-by-Step Tutorials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive guides and tutorials to help you master IoT development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {tutorials.map((tutorial, index) => (
            <Card key={index} className="group hover-lift bg-gradient-card border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {tutorial.title}
                  </CardTitle>
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                    {tutorial.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {tutorial.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {tutorial.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {tutorial.readers}
                    </div>
                  </div>
                  <Badge className={getDifficultyColor(tutorial.difficulty)}>
                    {tutorial.difficulty}
                  </Badge>
                </div>
                
                <Button variant="outline" className="w-full group border-primary/30 hover:bg-primary/10">
                  <Book className="mr-2 h-4 w-4" />
                  Read Tutorial
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="tech-glow group"
          >
            Browse All Tutorials
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TutorialsSection;