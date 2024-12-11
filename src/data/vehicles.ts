export interface Vehicle {
  id: string;
  title: string;
  price: number;
  year: number;
  mileage: number;
  image: string;
  category: string;
  description: string;
  features: string[];
  specs: {
    engine: string;
    power: string;
    transmission: string;
    fuelType: string;
    consumption: string;
  };
}

export const vehicles: Vehicle[] = [
  {
    id: "tesla-model-3",
    title: "Tesla Model 3",
    price: 41900,
    year: 2022,
    mileage: 15000,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800",
    category: "Électrique",
    description: "La Tesla Model 3 redéfinit la mobilité électrique avec son design épuré et ses performances exceptionnelles. Une berline innovante qui allie technologie de pointe et autonomie impressionnante.",
    features: [
      "Autopilot avancé",
      "Écran tactile 15 pouces",
      "Toit en verre panoramique",
      "Système audio premium",
      "Supercharge rapide",
      "Mode Performance"
    ],
    specs: {
      engine: "Moteur électrique",
      power: "325ch",
      transmission: "Automatique",
      fuelType: "Électrique",
      consumption: "16 kWh/100km"
    }
  },
  {
    id: "peugeot-3008",
    title: "Peugeot 3008",
    price: 28500,
    year: 2021,
    mileage: 40000,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800",
    category: "Essence",
    description: "Le Peugeot 3008 allie style et fonctionnalité dans un SUV compact moderne. Son design distinctif et son intérieur high-tech en font un choix parfait pour les familles.",
    features: [
      "i-Cockpit nouvelle génération",
      "Grip Control",
      "Toit ouvrant panoramique",
      "Aide au stationnement 360°",
      "Navigation 3D connectée",
      "Sièges massants"
    ],
    specs: {
      engine: "1.6 PureTech",
      power: "180ch",
      transmission: "EAT8",
      fuelType: "Essence",
      consumption: "6.5L/100km"
    }
  },
  {
    id: "volkswagen-id4",
    title: "Volkswagen ID.4",
    price: 44900,
    year: 2023,
    mileage: 5000,
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800",
    category: "Électrique",
    description: "Le Volkswagen ID.4 représente l'avenir de la mobilité électrique avec son design moderne et ses technologies innovantes. Un SUV électrique qui ne fait aucun compromis.",
    features: [
      "ID.Light interactive",
      "Affichage tête haute AR",
      "Assistance au conducteur IQ.Drive",
      "Climatisation 3 zones",
      "Charge rapide 125 kW",
      "Système audio premium"
    ],
    specs: {
      engine: "Moteur électrique",
      power: "204ch",
      transmission: "Automatique",
      fuelType: "Électrique",
      consumption: "18 kWh/100km"
    }
  },
  {
    id: "toyota-rav4",
    title: "Toyota RAV4",
    price: 36900,
    year: 2022,
    mileage: 25000,
    image: "https://images.unsplash.com/photo-1549927681-0b673b8243ab?auto=format&fit=crop&w=800",
    category: "Hybride",
    description: "Le Toyota RAV4 Hybride combine puissance et efficience dans un SUV familial robuste. Une référence en matière de fiabilité et d'économie.",
    features: [
      "Toyota Safety Sense 2.0",
      "Système multimédia Toyota Touch",
      "Caméra 360°",
      "Toit ouvrant panoramique",
      "Sièges chauffants",
      "Mode Trail"
    ],
    specs: {
      engine: "2.5 Hybrid Dynamic Force",
      power: "218ch",
      transmission: "e-CVT",
      fuelType: "Hybride",
      consumption: "4.5L/100km"
    }
  },
  {
    id: "renault-megane-etech",
    title: "Renault Mégane E-Tech",
    price: 38900,
    year: 2023,
    mileage: 8000,
    image: "https://images.unsplash.com/photo-1558425924-f8a26f439537?auto=format&fit=crop&w=800",
    category: "Électrique",
    description: "La Renault Mégane E-Tech incarne l'innovation électrique à la française. Une berline compacte qui combine style, technologie et performance.",
    features: [
      "OpenR Link avec Google",
      "Multi-Sense personnalisable",
      "Charge rapide 130 kW",
      "Son Harman Kardon",
      "Conduite semi-autonome",
      "Planificateur de trajets"
    ],
    specs: {
      engine: "Moteur électrique",
      power: "220ch",
      transmission: "Automatique",
      fuelType: "Électrique",
      consumption: "16.5 kWh/100km"
    }
  },
  {
    id: "citroen-c5x",
    title: "Citroën C5 X",
    price: 33900,
    year: 2022,
    mileage: 20000,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800",
    category: "Essence",
    description: "Le Citroën C5 X redéfinit le confort à la française avec son style unique. Une berline innovante qui allie élégance et technologie.",
    features: [
      "Suspension Active Advanced Comfort",
      "Extended Head Up Display",
      "Highway Driver Assist",
      "Sièges Advanced Comfort",
      "Système audio Focal Electra",
      "Climatisation bi-zone"
    ],
    specs: {
      engine: "PureTech",
      power: "180ch",
      transmission: "EAT8",
      fuelType: "Essence",
      consumption: "6.8L/100km"
    }
  },
  {
    id: "bmw-serie3",
    title: "BMW Série 3 320d",
    price: 29900,
    year: 2020,
    mileage: 45000,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800",
    category: "Diesel",
    description: "La BMW Série 3 320d offre le parfait équilibre entre performance et efficience. Une berline premium qui incarne l'esprit sportif de la marque.",
    features: [
      "BMW Live Cockpit Professional",
      "Driving Assistant Professional",
      "Parking Assistant Plus",
      "Système Hi-Fi Harman Kardon",
      "Sièges sport électriques",
      "Mode Sport+"
    ],
    specs: {
      engine: "2.0L TwinPower Turbo",
      power: "190ch",
      transmission: "Automatique 8 rapports",
      fuelType: "Diesel",
      consumption: "4.8L/100km"
    }
  },
  {
    id: "audi-a4",
    title: "Audi A4 Avant",
    price: 32500,
    year: 2021,
    mileage: 35000,
    image: "/lovable-uploads/59d8ac8a-b2bd-4f4a-9e5b-7bc0a5d8e5e7.png",
    category: "Essence",
    description: "L'Audi A4 Avant combine élégance et praticité dans un break premium. Un véhicule polyvalent qui ne fait aucun compromis sur le luxe.",
    features: [
      "Virtual Cockpit Plus",
      "MMI Navigation plus",
      "Bang & Olufsen Sound System",
      "Matrix LED",
      "Adaptive Cruise Control",
      "Audi Drive Select"
    ],
    specs: {
      engine: "2.0 TFSI",
      power: "204ch",
      transmission: "S tronic 7",
      fuelType: "Essence",
      consumption: "6.2L/100km"
    }
  },
  {
    id: "mercedes-classe-c",
    title: "Mercedes Classe C",
    price: 34900,
    year: 2021,
    mileage: 30000,
    image: "/lovable-uploads/d15525f5-82bc-4335-ab44-5fab478e6c2c.png",
    category: "Hybride",
    description: "La Mercedes Classe C incarne le luxe moderne avec son design élégant et ses technologies avancées. Une berline premium qui définit de nouveaux standards.",
    features: [
      "MBUX avec écran 11.9 pouces",
      "Digital Light LED",
      "Burmester® 3D Surround",
      "Pack Assistance à la conduite",
      "Sièges multicontours",
      "Ambient Light 64 couleurs"
    ],
    specs: {
      engine: "2.0L + Électrique",
      power: "204ch + 129ch",
      transmission: "9G-TRONIC",
      fuelType: "Hybride rechargeable",
      consumption: "1.5L/100km"
    }
  }
];