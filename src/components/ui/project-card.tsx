import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: "completed" | "in-progress" | "planning";
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  status, 
  githubUrl, 
  liveUrl 
}: ProjectCardProps) => {
  const statusColors = {
    completed: "bg-accent text-accent-foreground",
    "in-progress": "bg-primary text-primary-foreground",
    planning: "bg-muted text-muted-foreground"
  };

  const statusLabels = {
    completed: "Completed",
    "in-progress": "In Progress",
    planning: "Planning"
  };

  return (
    <Card className="group hover-lift bg-gradient-card border-border/50 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <Badge 
          className={`absolute top-3 right-3 ${statusColors[status]}`}
        >
          {statusLabels[status]}
        </Badge>
      </div>

      <CardHeader>
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="text-xs border-primary/30 text-primary hover:bg-primary/10"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        {githubUrl && (
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live
            </a>
          </Button>
        )}
        <Button size="sm" className="flex-1">
          <Eye className="mr-2 h-4 w-4" />
          Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;