import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Leaf, FlaskConical, Heart, MapPin, Info } from "lucide-react";
import { getPlantById } from "@/data/plantsData";

const PlantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const plant = id ? getPlantById(id) : null;

  if (!plant) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-32 px-4">
          <h1 className="text-4xl font-bold mb-4">Plant Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The plant you're looking for doesn't exist in our database.
          </p>
          <Link to="/plants">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Database
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getImagePath = (imageName: string) => {
    try {
      return new URL(`../assets/plants/${imageName}.jpg`, import.meta.url).href;
    } catch {
      return "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/plants">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Database
            </Button>
          </Link>

          {/* Header with Image */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={getImagePath(plant.image)}
                alt={plant.commonName}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <Badge variant="outline" className="w-fit mb-4">
                <Leaf className="w-3 h-3 mr-1" />
                {plant.family}
              </Badge>
              
              <h1 className="text-5xl font-bold mb-4 text-foreground">
                {plant.commonName}
              </h1>
              <p className="text-2xl italic text-muted-foreground mb-6">
                {plant.botanicalName}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Distribution</h3>
                    <p className="text-muted-foreground">{plant.geographicalDistribution}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Parts Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {plant.partsUsed.map((part, index) => (
                        <Badge key={index} variant="secondary">
                          {part}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Morphology */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="w-6 h-6 text-primary" />
                Morphological Characteristics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Habit</h4>
                <p className="text-muted-foreground">{plant.morphology.habit}</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Leaves</h4>
                <p className="text-muted-foreground">{plant.morphology.leaves}</p>
              </div>
              {plant.morphology.flowers && (
                <>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Flowers</h4>
                    <p className="text-muted-foreground">{plant.morphology.flowers}</p>
                  </div>
                </>
              )}
              {plant.morphology.fruits && (
                <>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Fruits</h4>
                    <p className="text-muted-foreground">{plant.morphology.fruits}</p>
                  </div>
                </>
              )}
              {plant.morphology.roots && (
                <>
                  <Separator />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Roots/Rhizome</h4>
                    <p className="text-muted-foreground">{plant.morphology.roots}</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Chemical Constituents */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FlaskConical className="w-6 h-6 text-primary" />
                Active Chemical Constituents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {plant.constituents.map((constituent, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-muted rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground">{constituent}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Therapeutic Uses */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-6 h-6 text-primary" />
                Therapeutic Uses & Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Medical Applications</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {plant.therapeuticUses.map((use, index) => (
                    <Badge key={index} variant="outline" className="justify-start py-2">
                      {use}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">Pharmacological Actions</h4>
                <div className="flex flex-wrap gap-2">
                  {plant.pharmacologicalActions.map((action, index) => (
                    <Badge key={index} variant="secondary">
                      {action}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Traditional Uses */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Traditional & Historical Uses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {plant.traditionalUses}
              </p>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <div className="bg-muted/50 border border-border rounded-lg p-6 mb-8">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Disclaimer:</strong> This information is for educational purposes only.
              Always consult qualified healthcare professionals before using any medicinal plants.
              Do not use this information as a substitute for professional medical advice.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Pharmacognosy Database. Educational purposes only.</p>
        </div>
      </footer>
    </div>
  );
};

export default PlantDetail;
