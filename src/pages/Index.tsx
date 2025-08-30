import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import ProjectsShowcase from "@/components/ui/projects-showcase";
import DataDashboard from "@/components/ui/data-dashboard";
import TutorialsSection from "@/components/ui/tutorials-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectsShowcase />
      <DataDashboard />
      <TutorialsSection />
      <Footer />
    </div>
  );
};

export default Index;
