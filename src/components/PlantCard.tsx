import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Plant } from "@/data/plantsData";

interface PlantCardProps {
  plant: Plant;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const getImagePath = (imageName: string) => {
    try {
      return new URL(`../assets/plants/${imageName}.jpg`, import.meta.url).href;
    } catch {
      return "";
    }
  };

  return (
    <Link to={`/plant/${plant.id}`}>
      <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-border hover:border-primary cursor-pointer">
        <div className="relative h-64 overflow-hidden bg-muted">
          <img
            src={getImagePath(plant.image)}
            alt={plant.commonName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="backdrop-blur-sm bg-card/80">
              <Leaf className="w-3 h-3 mr-1" />
              {plant.family}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
            {plant.commonName}
          </h3>
          <p className="text-sm italic text-muted-foreground mb-4">
            {plant.botanicalName}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {plant.therapeuticUses.slice(0, 2).map((use, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {use}
              </Badge>
            ))}
            {plant.therapeuticUses.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{plant.therapeuticUses.length - 2} more
              </Badge>
            )}
          </div>

          <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
            Learn more
            <ArrowRight className="w-4 h-4 ml-2" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PlantCard;
