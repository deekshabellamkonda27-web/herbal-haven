export interface Plant {
  id: string;
  commonName: string;
  botanicalName: string;
  family: string;
  image: string;
  morphology: {
    habit: string;
    leaves: string;
    flowers?: string;
    fruits?: string;
    roots?: string;
  };
  constituents: string[];
  therapeuticUses: string[];
  pharmacologicalActions: string[];
  traditionalUses: string;
  geographicalDistribution: string;
  partsUsed: string[];
}

export const plantsDatabase: Plant[] = [
  {
    id: "aloe-vera",
    commonName: "Aloe Vera",
    botanicalName: "Aloe barbadensis miller",
    family: "Liliaceae",
    image: "aloe-vera",
    morphology: {
      habit: "Succulent perennial herb, stemless or with very short stem",
      leaves: "Thick, fleshy, triangular-lanceolate, 30-60 cm long, gray-green with spiny margins, containing clear gel",
      flowers: "Tubular, yellow to orange, arranged in dense racemes on tall flower spikes",
      roots: "Fibrous root system"
    },
    constituents: [
      "Aloin (barbaloin)",
      "Aloe-emodin",
      "Polysaccharides (acemannan)",
      "Vitamins (A, C, E, B12)",
      "Minerals (calcium, magnesium, zinc)",
      "Amino acids",
      "Enzymes (bradykinase, catalase)"
    ],
    therapeuticUses: [
      "Wound healing and burns",
      "Skin conditions (psoriasis, acne)",
      "Digestive disorders",
      "Anti-inflammatory conditions",
      "Immune system support",
      "Diabetes management"
    ],
    pharmacologicalActions: [
      "Anti-inflammatory",
      "Wound healing",
      "Antimicrobial",
      "Antioxidant",
      "Immunomodulatory",
      "Laxative (leaf latex)",
      "Hypoglycemic"
    ],
    traditionalUses: "Used for centuries in traditional medicine systems including Ayurveda, Traditional Chinese Medicine, and ancient Egyptian medicine for treating wounds, skin diseases, and digestive complaints. Known as the 'plant of immortality' in ancient Egypt.",
    geographicalDistribution: "Native to Arabian Peninsula, now cultivated worldwide in tropical and subtropical regions including India, China, Mexico, and parts of Africa",
    partsUsed: ["Leaf gel", "Leaf latex"]
  },
  {
    id: "neem",
    commonName: "Neem",
    botanicalName: "Azadirachta indica",
    family: "Meliaceae",
    image: "neem",
    morphology: {
      habit: "Medium to large evergreen tree, 15-20 meters tall with spreading crown",
      leaves: "Pinnately compound, 20-40 cm long, with 7-17 leaflets; leaflets lanceolate, serrated margins, dark green",
      flowers: "Small, white, fragrant, in axillary panicles",
      fruits: "Oval drupe, 1-2 cm long, yellow when ripe, containing single seed",
      roots: "Deep taproot system"
    },
    constituents: [
      "Azadirachtin",
      "Nimbin",
      "Nimbidin",
      "Quercetin",
      "Limonoids",
      "Flavonoids",
      "Triterpenes",
      "Beta-sitosterol"
    ],
    therapeuticUses: [
      "Antibacterial and antiviral infections",
      "Skin diseases (eczema, ringworm)",
      "Dental care (gingivitis, plaque)",
      "Malaria",
      "Diabetes",
      "Immune disorders",
      "Contraceptive (spermicidal)"
    ],
    pharmacologicalActions: [
      "Antibacterial",
      "Antiviral",
      "Antifungal",
      "Antiparasitic",
      "Anti-inflammatory",
      "Immunomodulatory",
      "Antidiabetic",
      "Hepatoprotective"
    ],
    traditionalUses: "Extensively used in Ayurvedic medicine for over 5000 years. Every part of the neem tree has medicinal value. Called 'Sarva Roga Nivarini' (curer of all ailments) and 'village pharmacy' in India. Used for treating fever, skin diseases, and as a natural pesticide.",
    geographicalDistribution: "Native to Indian subcontinent, now widely cultivated in tropical and subtropical regions including Southeast Asia, Africa, Central and South America",
    partsUsed: ["Leaves", "Bark", "Seeds", "Fruits", "Roots", "Flowers"]
  },
  {
    id: "tulsi",
    commonName: "Holy Basil (Tulsi)",
    botanicalName: "Ocimum sanctum / Ocimum tenuiflorum",
    family: "Lamiaceae",
    image: "tulsi",
    morphology: {
      habit: "Aromatic perennial herb or small shrub, 30-60 cm tall, much branched",
      leaves: "Simple, opposite, ovate to oblong, 2-5 cm long, green to purple-tinged, aromatic, serrated margins, hairy",
      flowers: "Small, purple to reddish, in elongated racemes, tubular with bilateral symmetry",
      roots: "Fibrous root system"
    },
    constituents: [
      "Eugenol",
      "Ursolic acid",
      "Rosmarinic acid",
      "Carvacrol",
      "Linalool",
      "Beta-caryophyllene",
      "Flavonoids (orientin, vicenin)",
      "Essential oils"
    ],
    therapeuticUses: [
      "Respiratory infections (cold, cough, asthma)",
      "Stress and anxiety",
      "Fever",
      "Digestive disorders",
      "Headaches",
      "Cardiovascular health",
      "Metabolic disorders"
    ],
    pharmacologicalActions: [
      "Adaptogenic",
      "Anti-stress",
      "Antimicrobial",
      "Anti-inflammatory",
      "Antioxidant",
      "Immunomodulatory",
      "Hepatoprotective",
      "Cardioprotective",
      "Antipyretic"
    ],
    traditionalUses: "Sacred plant in Hinduism, considered an earthly manifestation of goddess Tulsi. Central to Ayurvedic medicine as a 'rasayana' (rejuvenating herb). Used for thousands of years in India for treating various ailments and promoting longevity. Known as 'Queen of Herbs' and 'Elixir of Life'.",
    geographicalDistribution: "Native to Indian subcontinent, now cultivated throughout Southeast Asia, Australia, West Africa, and other tropical regions",
    partsUsed: ["Whole plant", "Leaves", "Seeds"]
  },
  {
    id: "ginger",
    commonName: "Ginger",
    botanicalName: "Zingiber officinale",
    family: "Zingiberaceae",
    image: "ginger",
    morphology: {
      habit: "Perennial herbaceous plant with underground rhizome, 60-120 cm tall",
      leaves: "Long, narrow, lanceolate, 15-30 cm long, arranged alternately on pseudo-stem",
      flowers: "Yellow-green with purple lip, rarely produced in cultivation, borne on separate shoots from rhizome",
      roots: "Thick, fleshy, aromatic rhizome (underground stem) with knobby, branched structure, pale yellow to brown"
    },
    constituents: [
      "Gingerols",
      "Shogaols",
      "Zingerone",
      "Paradol",
      "Essential oils (zingiberene, bisabolene)",
      "Polysaccharides",
      "Vitamins (B6, C)",
      "Minerals (magnesium, potassium)"
    ],
    therapeuticUses: [
      "Nausea and vomiting (motion sickness, pregnancy)",
      "Digestive disorders (dyspepsia, bloating)",
      "Inflammatory conditions (arthritis, muscle pain)",
      "Respiratory infections",
      "Menstrual pain",
      "Migraine",
      "Cardiovascular health"
    ],
    pharmacologicalActions: [
      "Antiemetic",
      "Anti-inflammatory",
      "Analgesic",
      "Antioxidant",
      "Antimicrobial",
      "Cardioprotective",
      "Gastroprotective",
      "Thermogenic",
      "Antiplatelet"
    ],
    traditionalUses: "Used in traditional Chinese medicine, Ayurveda, and Arabic medicine for over 2000 years. Mentioned in ancient Sanskrit and Chinese texts. Used as both medicine and spice. Historically traded along spice routes and valued as highly as pepper.",
    geographicalDistribution: "Originated in Southeast Asia (India, China), now cultivated in tropical and subtropical regions worldwide including Jamaica, Nigeria, Australia, and Hawaii",
    partsUsed: ["Rhizome (fresh or dried)"]
  },
  {
    id: "ashwagandha",
    commonName: "Ashwagandha (Indian Ginseng)",
    botanicalName: "Withania somnifera",
    family: "Solanaceae",
    image: "ashwagandha",
    morphology: {
      habit: "Small woody shrub, 35-75 cm tall, tomentose (covered with dense short hairs)",
      leaves: "Simple, alternate, ovate, 5-12 cm long, dull green, covered with stellate hairs",
      flowers: "Small, greenish-yellow, bell-shaped, in axillary umbellate cymes",
      fruits: "Small berry, orange-red when ripe, enclosed in persistent calyx, resembling Chinese lantern",
      roots: "Fleshy, tuberous, stout, 30 cm long, brown externally, white internally with characteristic horse-like odor"
    },
    constituents: [
      "Withanolides (withaferin A, withanolide A)",
      "Alkaloids (withanine, somniferine)",
      "Sitoindosides",
      "Saponins",
      "Flavonoids",
      "Amino acids",
      "Withanosides",
      "Iron"
    ],
    therapeuticUses: [
      "Stress and anxiety disorders",
      "Insomnia",
      "Cognitive decline and memory disorders",
      "Chronic fatigue",
      "Immune deficiency",
      "Inflammatory conditions",
      "Male infertility",
      "Thyroid disorders"
    ],
    pharmacologicalActions: [
      "Adaptogenic",
      "Anxiolytic",
      "Neuroprotective",
      "Anti-inflammatory",
      "Immunomodulatory",
      "Antioxidant",
      "Anti-stress",
      "Cardioprotective",
      "Thyroid modulating",
      "Anabolic"
    ],
    traditionalUses: "One of the most important herbs in Ayurvedic medicine for over 3000 years. Classified as 'Rasayana' (rejuvenator) and 'Balya' (strength promoting). Name means 'smell of horse', referring to root odor and belief it imparts horse-like strength and vitality. Used traditionally for promoting longevity, vitality, and overall wellness.",
    geographicalDistribution: "Native to India, Middle East, and parts of Africa; now cultivated in drier regions of India, Nepal, Pakistan, Sri Lanka, and Mediterranean countries",
    partsUsed: ["Root", "Leaves", "Seeds", "Fruits"]
  }
];

export const getPlantById = (id: string): Plant | undefined => {
  return plantsDatabase.find(plant => plant.id === id);
};

export const searchPlants = (query: string): Plant[] => {
  const lowercaseQuery = query.toLowerCase();
  return plantsDatabase.filter(
    plant =>
      plant.commonName.toLowerCase().includes(lowercaseQuery) ||
      plant.botanicalName.toLowerCase().includes(lowercaseQuery) ||
      plant.family.toLowerCase().includes(lowercaseQuery)
  );
};

export const filterByFamily = (family: string): Plant[] => {
  return plantsDatabase.filter(plant => plant.family === family);
};

export const getAllFamilies = (): string[] => {
  return [...new Set(plantsDatabase.map(plant => plant.family))].sort();
};
