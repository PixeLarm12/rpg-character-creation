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
      { name: "Spellbook", namePtBr: "Grimório" },
      { name: "Staff or Wand (1d6, 8m)", namePtBr: "Cajado ou Varinha (1d6, 8m)" },
      { name: "Magic Ink and Quill", namePtBr: "Tinta Mágica e Pena" },
    ],
  },
  {
    id: "explorer",
    translationKey: "explorer",
    items: [
      { name: "2x Health Potion (M)", namePtBr: "2x Poção de Vida (M)" },
      { name: "World Map (marked region)", namePtBr: "Mapa do Mundo (região marcada)" },
      { name: "Short Sword or Longbow", namePtBr: "Espada Curta ou Arco Longo" },
      { name: "Compass", namePtBr: "Bússola" },
      { name: "Climbing Kit", namePtBr: "Kit de Escalada" },
    ],
  },
  {
    id: "warrior",
    translationKey: "warrior",
    items: [
      { name: "2x Health Potion (P)", namePtBr: "2x Poção de Vida (P)" },
      { name: "Leather chestplate (+2 defense)", namePtBr: "Peitoral de Couro (+2 defesa)" },
      { name: "Shield (+1 defense)", namePtBr: "Escudo (+1 defesa)" },
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
      { name: "Smoke Bomb", namePtBr: "Bomba de Fumaça" },
      { name: "Lockpick Set", namePtBr: "Kit de Gazuas" },
    ],
  },
  {
    id: "cleric",
    translationKey: "cleric",
    items: [
      { name: "Holy Symbol", namePtBr: "Símbolo Sagrado" },
      { name: "Mace (1d6)", namePtBr: "Maça (1d6)" },
      { name: "2x Minor Healing Scrolls", namePtBr: "2x Pergaminhos de Cura Menor" },
      { name: "Sacred book", namePtBr: "Livro sagrado" },
    ],
  },
  {
    id: "pyromancer",
    translationKey: "pyromancer",
    items: [
      { name: "Fire Catalyst", namePtBr: "Catalisador de Fogo" },
      { name: "2x Fire Bombs", namePtBr: "2x Bombas de Fogo" },
      { name: "Breathing protection mask", namePtBr: "Máscara de proteção respiratória" },
      { name: "Cloth Robe", namePtBr: "Túnica de Pano" },
    ],
  },
  {
    id: "ranger",
    translationKey: "ranger",
    items: [
      { name: "Longbow (1d8)", namePtBr: "Arco Longo (1d8)" },
      { name: "20x Arrows", namePtBr: "20x Flechas" },
      { name: "Hunting Knife", namePtBr: "Faca de Caça" },
      { name: "Trap Kit", namePtBr: "Kit de Armadilhas" },
    ],
  },
  {
    id: "alchemist",
    translationKey: "alchemist",
    items: [
      { name: "Alchemy Kit", namePtBr: "Kit de Alquimia" },
      { name: "2x Random Potions", namePtBr: "2x Poções Aleatórias" },
      { name: "Acid Flask", namePtBr: "Frasco de Ácido" },
      { name: "Glass Bottles", namePtBr: "Frascos de Vidro" },
    ],
  },
  {
    id: "bard",
    translationKey: "bard",
    items: [
      { name: "Musical Instrument", namePtBr: "Instrumento Musical" },
      { name: "Light Dagger", namePtBr: "Adaga Leve" },
      { name: "Charm Scroll", namePtBr: "Pergaminho de Encantamento" },
      { name: "Fancy Clothes", namePtBr: "Roupas Elegantes" },
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
