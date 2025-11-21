import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, BookOpen, Users, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Leaf className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
            <h1 className="text-5xl font-bold mb-4 text-foreground">
              About PharmacoDB
            </h1>
            <p className="text-xl text-muted-foreground">
              Your comprehensive resource for pharmacognostic plant knowledge
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                PharmacoDB is dedicated to preserving and sharing knowledge about medicinal
                plants used in traditional and modern pharmacognosy. We aim to bridge the
                gap between ancient wisdom and contemporary scientific understanding of
                plant-based medicine.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our database provides detailed information about the botanical characteristics,
                chemical constituents, therapeutic uses, and traditional applications of
                medicinal plants from around the world.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <BookOpen className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Educational Focus
                </h3>
                <p className="text-muted-foreground">
                  We provide scientifically accurate, comprehensive information for
                  students, researchers, and healthcare professionals studying
                  pharmacognosy and herbal medicine.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Community Resource
                </h3>
                <p className="text-muted-foreground">
                  Our platform serves as a valuable resource for the global community
                  interested in traditional medicine, ethnobotany, and natural healing.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                What is Pharmacognosy?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pharmacognosy is the branch of pharmaceutical science that deals with the
                study of medicinal drugs derived from plants and other natural sources.
                The term comes from the Greek words "pharmakon" (drug) and "gnosis"
                (knowledge).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                It encompasses the identification, authentication, isolation, and
                standardization of bioactive compounds from natural sources, as well as
                the study of their pharmacological properties and therapeutic applications.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    Important Disclaimer
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    The information provided in this database is for educational and
                    informational purposes only. It is not intended to be a substitute
                    for professional medical advice, diagnosis, or treatment.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Always seek the advice of qualified healthcare professionals before
                    using any medicinal plants or making any changes to your healthcare
                    regimen. Never disregard professional medical advice or delay seeking
                    it because of information found on this website.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Pharmacognosy Database. Educational purposes only.</p>
          <p className="text-sm mt-2">
            Always consult healthcare professionals before using medicinal plants.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
