import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import PlantCard from "@/components/PlantCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { plantsDatabase, searchPlants, filterByFamily, getAllFamilies } from "@/data/plantsData";

const PlantDatabase = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFamily, setSelectedFamily] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"name" | "family">("name");

  const families = getAllFamilies();

  const filteredAndSortedPlants = useMemo(() => {
    let plants = [...plantsDatabase];

    // Apply search
    if (searchQuery.trim()) {
      plants = searchPlants(searchQuery);
    }

    // Apply family filter
    if (selectedFamily !== "all") {
      plants = plants.filter(plant => plant.family === selectedFamily);
    }

    // Apply sorting
    plants.sort((a, b) => {
      if (sortBy === "name") {
        return a.commonName.localeCompare(b.commonName);
      } else {
        return a.family.localeCompare(b.family);
      }
    });

    return plants;
  }, [searchQuery, selectedFamily, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">
              Plant Database
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our comprehensive collection of medicinal plants with detailed
              pharmacognostic information
            </p>
          </div>

          {/* Filters */}
          <div className="bg-card p-6 rounded-lg border border-border shadow-sm mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search plants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={selectedFamily} onValueChange={setSelectedFamily}>
                <SelectTrigger>
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by family" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Families</SelectItem>
                  {families.map((family) => (
                    <SelectItem key={family} value={family}>
                      {family}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={(value: "name" | "family") => setSortBy(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Sort by Name</SelectItem>
                  <SelectItem value="family">Sort by Family</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {(searchQuery || selectedFamily !== "all") && (
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Found {filteredAndSortedPlants.length} plant(s)
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedFamily("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          {/* Plants Grid */}
          {filteredAndSortedPlants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedPlants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No plants found matching your criteria.
              </p>
            </div>
          )}
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

export default PlantDatabase;
