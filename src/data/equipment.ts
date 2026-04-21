// Archetype presets
export interface ArchetypeData {
  id: string;
  translationKey: string;
  attributes: Record<string, number>;
}

export const archetypesData: ArchetypeData[] = [
  {
    id: "knight",
    translationKey: "knight",
    attributes: { STR: 3, DEX: -1, INT: -2, PER: -1, RES: 3, CHA: 0 },
  },
  {
    id: "druid",
    translationKey: "druid",
    attributes: { STR: -2, DEX: -1, INT: 2, PER: 3, RES: 0, CHA: -1 },
  },
  {
    id: "bard",
    translationKey: "bard",
    attributes: { STR: -2, DEX: 0, INT: 1, PER: 1, RES: -2, CHA: 3 },
  },
  {
    id: "paladin",
    translationKey: "paladin",
    attributes: { STR: 2, DEX: -2, INT: -1, PER: 1, RES: 3, CHA: 1 },
  },
  {
    id: "assassin",
    translationKey: "assassin",
    attributes: { STR: -1, DEX: 3, INT: 0, PER: 3, RES: -2, CHA: -2 },
  },
  {
    id: "wizard",
    translationKey: "wizard",
    attributes: { STR: -2, DEX: -1, INT: 3, PER: 2, RES: -2, CHA: -2 },
  },
  {
    id: "monk",
    translationKey: "monk",
    attributes: { STR: 0, DEX: 2, INT: 0, PER: 2, RES: 2, CHA: -2 },
  },
  {
    id: "artificier",
    translationKey: "artificier",
    attributes: { STR: -2, DEX: 0, INT: 3, PER: 1, RES: 0, CHA: -2 },
  },
  {
    id: "cleric",
    translationKey: "cleric",
    attributes: { STR: -1, DEX: -2, INT: 2, PER: 2, RES: 1, CHA: 0 },
  },
  {
    id: "samurai",
    translationKey: "samurai",
    attributes: { STR: 2, DEX: 2, INT: -2, PER: 1, RES: 2, CHA: -1 },
  },
  {
    id: "shaman",
    translationKey: "shaman",
    attributes: { STR: -2, DEX: -1, INT: 2, PER: 3, RES: 0, CHA: -2 },
  },
];

// Equipment packages
export interface EquipmentPackage {
  id: string;
  translationKey: string;
  items: { name: string; namePtBr: string }[];
}

export const equipmentPackages: EquipmentPackage[] = [
  {
    id: "conjurer",
    translationKey: "conjurer",
    items: [
      { name: "2x Mana Potion (M)", namePtBr: "2x Poção de Mana (M)" },
      { name: "Empty Spellbook", namePtBr: "Grimório Vazio" },
      { name: "Staff or Wand (1d6, 8m)", namePtBr: "Cajado ou Varinha (1d6, 8m)" },
    ],
  },
  {
    id: "explorer",
    translationKey: "explorer",
    items: [
      { name: "2x Health Potion (M)", namePtBr: "2x Poção de Vida (M)" },
      { name: "World Map", namePtBr: "Mapa do Mundo" },
      { name: "Short Sword or Longbow", namePtBr: "Espada Curta ou Arco Longo" },
    ],
  },
  {
    id: "warrior",
    translationKey: "warrior",
    items: [
      { name: "2x Health Potion (P)", namePtBr: "2x Poção de Vida (P)" },
      { name: "Leather Chest Armor (+2 defense)", namePtBr: "Armadura de Couro (+2 defesa)" },
      { name: "Long Sword or Axe (2d6)", namePtBr: "Espada Longa ou Machado (2d6)" },
    ],
  },
  {
    id: "assassin",
    translationKey: "assassin",
    items: [
      { name: "2x Health Potion (P)", namePtBr: "2x Poção de Vida (P)" },
      { name: "Dagger or Light Crossbow", namePtBr: "Adaga ou Besta Leve" },
      { name: "2x Poison Flasks", namePtBr: "2x Frascos de Veneno" },
    ],
  },
];

export const defaultEquipment = [
  { name: "Backpack", namePtBr: "Mochila" },
  { name: "Rope (15m)", namePtBr: "Corda (15m)" },
  { name: "Sleeping Bag", namePtBr: "Saco de Dormir" },
  { name: "5x Rations", namePtBr: "5x Rações" },
  { name: "Canteen", namePtBr: "Cantil" },
  { name: "4x Bandages", namePtBr: "4x Bandagens" },
  { name: "Fire Kit", namePtBr: "Kit de Fogo" },
  { name: "Small Lantern", namePtBr: "Lanterna Pequena" },
];
