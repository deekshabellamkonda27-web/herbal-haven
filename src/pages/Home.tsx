import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlantCard from "@/components/PlantCard";
import PlantOfTheDay from "@/components/PlantOfTheDay";
import { plantsDatabase, searchPlants } from "@/data/plantsData";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlants = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchPlants(searchQuery);
  }, [searchQuery]);

  // Get a random plant for "Plant of the Day"
  const plantOfTheDay = useMemo(() => {
    const dayOfYear = Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
    );
    return plantsDatabase[dayOfYear % plantsDatabase.length];
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero onSearch={setSearchQuery} searchQuery={searchQuery} />
      
      <PlantOfTheDay plant={plantOfTheDay} />

      {/* Search Results */}
      {searchQuery && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Search Results for "{searchQuery}"
            </h2>
            {filteredPlants.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPlants.map((plant) => (
                  <PlantCard key={plant.id} plant={plant} />
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground text-lg">
                No plants found matching your search.
              </p>
            )}
          </div>
        </section>
      )}

      {/* Featured Plants Preview */}
      {!searchQuery && (
        <section id="plants-section" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-foreground">
              Featured Medicinal Plants
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Discover the healing power of nature through our comprehensive database
              of pharmacognosy plants
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plantsDatabase.slice(0, 3).map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </div>
        </section>
      )}

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

export default Home;
