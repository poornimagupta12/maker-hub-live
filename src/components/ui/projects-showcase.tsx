import ProjectCard from "./project-card";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";
import weatherProject from "@/assets/project-weather.jpg";
import homeProject from "@/assets/project-home.jpg";
import robotProject from "@/assets/project-robot.jpg";

const projects = [
  {
    title: "Smart Weather Station",
    description: "ESP32-based weather monitoring system with DHT22 sensor, displaying real-time temperature, humidity, and pressure data on a web dashboard.",
    image: weatherProject,
    tags: ["ESP32", "DHT22", "Web Dashboard", "WiFi"],
    status: "completed" as const,
    githubUrl: "https://github.com/example/weather-station",
    liveUrl: "https://weather-demo.example.com"
  },
  {
    title: "Home Automation Hub",
    description: "NodeMCU-powered smart home system controlling lights, fans, and appliances via mobile app with voice control integration.",
    image: homeProject,
    tags: ["NodeMCU", "Relay Module", "Blynk", "Voice Control"],
    status: "completed" as const,
    githubUrl: "https://github.com/example/home-automation"
  },
  {
    title: "Robotic Arm Controller",
    description: "Arduino-controlled 6-DOF robotic arm with servo motors, computer vision tracking, and pick-and-place functionality.",
    image: robotProject,
    tags: ["Arduino Mega", "Servo Motors", "Computer Vision", "Python"],
    status: "in-progress" as const,
    githubUrl: "https://github.com/example/robot-arm"
  }
];

const ProjectsShowcase = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Featured IoT Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my latest Arduino, ESP32, and NodeMCU projects with detailed documentation and source code
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:bg-primary/10 group"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;