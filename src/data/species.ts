// Species data for the RPG character creator
export interface SpeciesData {
  id: string;
  translationKey: string;
  movement: number;
  attributeBonus: { attribute: string; value: number };
  passive: string;
  passivePtBr: string;
  hasSubtypes?: boolean;
  subtypes?: { id: string; translationKey: string; passive: string; passivePtBr: string; attributeBonus: { attribute: string; value: number } }[];
}

export const speciesData: SpeciesData[] = [
  {
    id: "dwarf",
    translationKey: "dwarf",
    movement: 5,
    attributeBonus: { attribute: "RES", value: 1 },
    passive: "Stone Resilience: +1 to resist poison and knockback.",
    passivePtBr: "Resiliência Pétrea: +1 para resistir veneno e empurrão.",
    hasSubtypes: false,
    subtypes: []
  },
  {
    id: "auneke",
    translationKey: "auneke",
    movement: 6,
    attributeBonus: { attribute: "PER", value: 1 },
    passive: "Spirit Sight: Can sense supernatural presences within 10m.",
    passivePtBr: "Visão Espiritual: Pode sentir presenças sobrenaturais em 10m.",
    hasSubtypes: false,
    subtypes: []
  },
  {
    id: "draconian",
    translationKey: "draconian",
    movement: 6,
    attributeBonus: { attribute: "STR", value: 1 },
    passive: "Dragon Breath: Once per rest, deal 1d6 fire damage in a cone.",
    passivePtBr: "Sopro de Dragão: Uma vez por descanso, causa 1d6 de dano de fogo em cone.",
    hasSubtypes: false,
    subtypes: []
  },
  {
    id: "elf",
    translationKey: "elf",
    movement: 7,
    attributeBonus: { attribute: "DEX", value: 1 },
    passive: "Choose a elf subtype to get your passive.",
    passivePtBr: "Escolha um subtipo para ter sua passiva.",
    hasSubtypes: true,
    subtypes: [
      { id: "mountainElf", translationKey: "mountainElf", passive: "Mountain Endurance: Immune to altitude sickness, +1 to climbing.", passivePtBr: "Resistência Montanhesa: Imune a mal de altitude, +1 para escalada.", attributeBonus: { attribute: "RES", value: 1 } },
      { id: "forestElf", translationKey: "forestElf", passive: "Woodland Stride: Move through difficult forest terrain freely.", passivePtBr: "Passo Florestal: Move-se livremente por terreno difícil de floresta.", attributeBonus: { attribute: "DEX", value: 1 } },
      { id: "seaElf", translationKey: "seaElf", passive: "Aquatic Breathing: Can breathe underwater for up to 1 hour.", passivePtBr: "Respiração Aquática: Pode respirar debaixo d'água por até 1 hora.", attributeBonus: { attribute: "PER", value: 1 } },
      { id: "nobleElf", translationKey: "nobleElf", passive: "Arcane Heritage: +1 to all magical skill checks.", passivePtBr: "Herança Arcana: +1 em todos os testes de habilidades mágicas.", attributeBonus: { attribute: "CHA", value: 1 } },
    ],
  },
  {
    id: "gnome",
    translationKey: "gnome",
    movement: 5,
    attributeBonus: { attribute: "INT", value: 1 },
    passive: "Tinker's Insight: Advantage on crafting and mechanism checks.",
    passivePtBr: "Perspicácia do Inventor: Vantagem em testes de fabricação e mecanismos.",
    hasSubtypes: false,
    subtypes: []
  },
  {
    id: "human",
    translationKey: "human",
    movement: 6,
    attributeBonus: { attribute: "CHA", value: 1 },
    passive: "Adaptable: Gain +1 to any one skill check per rest.",
    passivePtBr: "Adaptável: Ganha +1 em qualquer teste de habilidade uma vez por descanso.",
    hasSubtypes: false,
    subtypes: []
  },
  {
    id: "kweedo",
    translationKey: "kweedo",
    movement: 6,
    attributeBonus: { attribute: "DEX", value: 1 },
    passive: "Amphibious: Can breathe underwater and swim at full speed.",
    passivePtBr: "Anfíbio: Pode respirar debaixo d'água e nadar em velocidade total.",
    hasSubtypes: false,
    subtypes: []
  },
  {
    id: "liten",
    translationKey: "liten",
    movement: 5,
    attributeBonus: { attribute: "DEX", value: 1 },
    passive: "Lucky: Once per session, reroll a failed check.",
    passivePtBr: "Sortudo: Uma vez por sessão, repita um teste falho.",
    hasSubtypes: false,
    subtypes: []
  },
  {
    id: "minotaur",
    translationKey: "minotaur",
    movement: 6,
    attributeBonus: { attribute: "STR", value: 1 },
    passive: "Charge: After moving 4+ meters in a straight line, deal +1d6 melee damage.",
    passivePtBr: "Investida: Após mover 4+ metros em linha reta, causa +1d6 de dano corpo a corpo.",
    hasSubtypes: false,
    subtypes: []
  },
  {
    id: "thamuz",
    translationKey: "thamuz",
    movement: 6,
    attributeBonus: { attribute: "CHA", value: 1 },
    passive: "Infernal Resistance: Resist fire damage and intimidation effects.",
    passivePtBr: "Resistência Infernal: Resiste dano de fogo e efeitos de intimidação.",
    hasSubtypes: false,
    subtypes: []
  },
];
