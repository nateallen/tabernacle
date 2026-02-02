export interface ModelVariant {
  id: string;
  name: string;
  modelSrc: string;
  arScale?: number;
}

export interface TabernacleFurniture {
  id: string;
  name: string;
  hebrewName?: string;
  description: string;
  biblicalReference: string;
  modelSrc: string;
  posterSrc?: string;
  available: boolean;
  /** Scale multiplier for AR display (adjusts real-world size) */
  arScale?: number;
  /** Alternative model versions */
  variants?: ModelVariant[];
  details: {
    materials: string[];
    dimensions?: string;
    location: string;
    symbolism: string;
  };
}

export const tabernacleItems: TabernacleFurniture[] = [
  {
    id: "ark-of-the-covenant",
    name: "Ark of the Covenant",
    hebrewName: "אָרוֹן הָעֵדוּת",
    description:
      "A gold-covered wooden chest containing the two stone tablets of the Ten Commandments, Aaron's rod, and a golden pot of manna.",
    biblicalReference: "Exodus 25:10-22",
    modelSrc: "/models/ark-of-the-covenant-2.glb",
    posterSrc: "/models/ark-of-the-covenant-poster.webp",
    available: true,
    arScale: 0.85,
    variants: [
      { id: "v1", name: "Version 1", modelSrc: "/models/ark-of-the-covenant-2.glb", arScale: 0.85 },
      { id: "v2", name: "Version 2", modelSrc: "/models/ark-of-the-covenant.glb", arScale: 0.0064 },
      { id: "v3", name: "Version 3", modelSrc: "/models/ark-of-the-covenant-3.glb", arScale: 1.4 },
    ],
    details: {
      materials: ["Acacia wood", "Pure gold overlay", "Gold rings", "Carrying poles"],
      dimensions: "2.5 cubits long × 1.5 cubits wide × 1.5 cubits high (~3.75 × 2.25 × 2.25 feet)",
      location: "Holy of Holies (Most Holy Place)",
      symbolism:
        "God's presence among His people, His covenant faithfulness, and the mercy seat where atonement was made.",
    },
  },
  {
    id: "brazen-altar",
    name: "Brazen Altar",
    hebrewName: "מִזְבֵּחַ הַנְּחֹשֶׁת",
    description:
      "The bronze altar of burnt offering where sacrifices were made. It was the first item encountered in the tabernacle courtyard.",
    biblicalReference: "Exodus 27:1-8",
    modelSrc: "/models/brazen-altar.glb",
    available: false,
    details: {
      materials: ["Acacia wood", "Bronze overlay", "Bronze grating", "Carrying poles"],
      dimensions: "5 cubits long × 5 cubits wide × 3 cubits high (~7.5 × 7.5 × 4.5 feet)",
      location: "Outer Courtyard",
      symbolism:
        "The necessity of sacrifice for sin and approaching God through blood atonement.",
    },
  },
  {
    id: "bronze-laver",
    name: "Bronze Laver",
    hebrewName: "כִּיּוֹר הַנְּחֹשֶׁת",
    description:
      "A bronze basin for ceremonial washing, placed between the altar and the tabernacle entrance.",
    biblicalReference: "Exodus 30:17-21",
    modelSrc: "/models/bronze-laver.glb",
    available: false,
    details: {
      materials: ["Bronze (from mirrors of the women who served at the entrance)"],
      dimensions: "Not specified in Scripture",
      location: "Outer Courtyard, between altar and tabernacle",
      symbolism: "Purification and cleansing before serving God.",
    },
  },
  {
    id: "golden-lampstand",
    name: "Golden Lampstand",
    hebrewName: "מְנוֹרָה",
    description:
      "The seven-branched menorah that provided light in the Holy Place, beaten from a single piece of gold.",
    biblicalReference: "Exodus 25:31-40",
    modelSrc: "/models/golden-candlestick-2.glb",
    available: true,
    arScale: 0.85,
    variants: [
      { id: "v1", name: "Version 1", modelSrc: "/models/golden-candlestick-2.glb", arScale: 0.77 },
      { id: "v2", name: "Version 2", modelSrc: "/models/golden-candlestick.glb", arScale: 0.77 },
    ],
    details: {
      materials: ["Pure gold (one talent, ~75 pounds)"],
      dimensions: "Not specified; decorated with almond blossoms, buds, and flowers",
      location: "Holy Place (south side)",
      symbolism: "God's light, the Spirit's illumination, and Christ as the Light of the World.",
    },
  },
  {
    id: "table-of-showbread",
    name: "Table of Showbread",
    hebrewName: "שֻׁלְחָן לֶחֶם הַפָּנִים",
    description:
      "A gold-covered table holding twelve loaves of bread representing the twelve tribes of Israel.",
    biblicalReference: "Exodus 25:23-30",
    modelSrc: "/models/table-of-showbread.glb",
    available: true,
    arScale: 0.85,
    details: {
      materials: ["Acacia wood", "Pure gold overlay", "Gold molding", "Carrying poles"],
      dimensions: "2 cubits long × 1 cubit wide × 1.5 cubits high (~3 × 1.5 × 2.25 feet)",
      location: "Holy Place (north side)",
      symbolism: "God's provision and fellowship, Christ as the Bread of Life.",
    },
  },
  {
    id: "altar-of-incense",
    name: "Altar of Incense",
    hebrewName: "מִזְבֵּחַ הַקְּטֹרֶת",
    description:
      "A small golden altar where incense was burned morning and evening before the Lord.",
    biblicalReference: "Exodus 30:1-10",
    modelSrc: "/models/altar-of-incense.glb",
    available: false,
    details: {
      materials: ["Acacia wood", "Pure gold overlay", "Gold horns", "Gold molding"],
      dimensions: "1 cubit long × 1 cubit wide × 2 cubits high (~1.5 × 1.5 × 3 feet)",
      location: "Holy Place (before the veil)",
      symbolism: "Prayer rising to God, intercession, and worship.",
    },
  },
];

export function getAvailableItems(): TabernacleFurniture[] {
  return tabernacleItems.filter((item) => item.available);
}

export function getItemById(id: string): TabernacleFurniture | undefined {
  return tabernacleItems.find((item) => item.id === id);
}
