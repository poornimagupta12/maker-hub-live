import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, CircuitBoard } from "lucide-react";
import heroImage from "@/assets/hero-iot.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="IoT Development Setup"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />
      </div>

      {/* Animated circuit lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-primary/20 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border-2 border-accent/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border-2 border-primary/30 rounded-full animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-8 border border-primary/20">
            <CircuitBoard className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              IoT Development & Innovation
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building the{" "}
            <span className="gradient-text">Connected Future</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore cutting-edge IoT projects, real-time data visualizations, 
            and comprehensive tutorials. From Arduino to advanced robotics.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">IoT Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">100k+</div>
              <div className="text-sm text-muted-foreground">Data Points</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Tutorials</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="tech-glow hover-lift group"
            >
              Explore Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-primary/10"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="flex justify-center items-center gap-8 mt-16 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent" />
              <span className="text-sm">Real-time Data</span>
            </div>
            <div className="flex items-center gap-2">
              <CircuitBoard className="h-5 w-5 text-primary" />
              <span className="text-sm">Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;