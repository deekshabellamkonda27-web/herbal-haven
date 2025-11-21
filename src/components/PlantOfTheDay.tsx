import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Plant } from "@/data/plantsData";

interface PlantOfTheDayProps {
  plant: Plant;
}

const PlantOfTheDay = ({ plant }: PlantOfTheDayProps) => {
  const getImagePath = (imageName: string) => {
    try {
      return new URL(`../assets/plants/${imageName}.jpg`, import.meta.url).href;
    } catch {
      return "";
    }
  };

  return (
    <section id="plant-of-day" className="py-16 px-4 bg-gradient-to-br from-sage-light/20 to-botanical-cream/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          <h2 className="text-4xl font-bold text-center text-foreground">
            Plant of the Day
          </h2>
          <Sparkles className="w-8 h-8 text-primary animate-pulse" />
        </div>

        <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96 md:h-full overflow-hidden">
              <img
                src={getImagePath(plant.image)}
                alt={plant.commonName}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="text-sm py-2 px-4 bg-primary">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Featured Today
                </Badge>
              </div>
            </div>

            <CardContent className="p-8 flex flex-col justify-center">
              <Badge variant="outline" className="w-fit mb-4">
                {plant.family}
              </Badge>
              
              <h3 className="text-4xl font-bold mb-3 text-foreground">
                {plant.commonName}
              </h3>
              <p className="text-lg italic text-muted-foreground mb-6">
                {plant.botanicalName}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Traditional Uses:</h4>
                  <p className="text-muted-foreground line-clamp-3">
                    {plant.traditionalUses}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {plant.therapeuticUses.slice(0, 4).map((use, index) => (
                      <Badge key={index} variant="secondary">
                        {use}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Link to={`/plant/${plant.id}`}>
                <Button size="lg" className="w-full md:w-auto">
                  Explore Full Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PlantOfTheDay;
