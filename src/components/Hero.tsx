import { Search, Leaf } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-botanical.jpg";

interface HeroProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

const Hero = ({ onSearch, searchQuery }: HeroProps) => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="flex justify-center mb-6">
          <Leaf className="w-16 h-16 text-primary animate-float" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Pharmacognosy
          <span className="block text-primary mt-2">Plant Database</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Explore the medicinal properties and traditional uses of nature's healing plants
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            type="text"
            placeholder="Search medicinal plants..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="pl-12 pr-4 py-6 text-lg rounded-full border-2 border-border bg-card/80 backdrop-blur-sm focus:border-primary transition-colors"
          />
        </div>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <Button
            onClick={() => {
              const element = document.getElementById('plants-section');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            size="lg"
            className="rounded-full"
          >
            Browse All Plants
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full"
            onClick={() => {
              const element = document.getElementById('plant-of-day');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Leaf className="w-4 h-4 mr-2" />
            Plant of the Day
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
