export interface TalentData {
  id: string;
  name: string;
  namePtBr: string;
  description: string;
  descriptionPtBr: string;
  category: string;
  type: "positive" | "negative";
}

const baseTalents = [
  {
    id: "brave",
    name: "Brave",
    namePtBr: "Corajoso",
    positive: "Gain advantage on courage checks in dangerous situations.",
    negative: "Suffer disadvantage on courage checks in dangerous situations.",
    category: "Mental"
  },
  {
    id: "quickReflexes",
    name: "Quick Reflexes",
    namePtBr: "Reflexos Rápidos",
    positive: "Gain advantage on initiative rolls.",
    negative: "Suffer disadvantage on initiative rolls.",
    category: "Physical"
  },
  {
    id: "keenEye",
    name: "Keen Eye",
    namePtBr: "Olho Aguçado",
    positive: "Gain advantage on ranged attack rolls.",
    negative: "Suffer disadvantage on ranged attack rolls.",
    category: "Physical"
  },
  {
    id: "charismatic",
    name: "Charismatic",
    namePtBr: "Carismático",
    positive: "Gain advantage on persuasion and diplomacy checks.",
    negative: "Suffer disadvantage on persuasion and diplomacy checks.",
    category: "Social"
  },
  {
    id: "toughSkin",
    name: "Tough Skin",
    namePtBr: "Pele Resistente",
    positive: "Gain advantage when resisting physical damage.",
    negative: "Suffer disadvantage when resisting physical damage.",
    category: "Physical"
  },
  {
    id: "scholar",
    name: "Scholar",
    namePtBr: "Estudioso",
    positive: "Gain advantage on knowledge and lore checks.",
    negative: "Suffer disadvantage on knowledge and lore checks.",
    category: "Mental"
  },
  {
    id: "nimbleFingers",
    name: "Nimble Fingers",
    namePtBr: "Dedos Ágeis",
    positive: "Gain advantage on lockpicking and sleight of hand.",
    negative: "Suffer disadvantage on lockpicking and sleight of hand.",
    category: "Physical"
  },
  {
    id: "ironWill",
    name: "Iron Will",
    namePtBr: "Vontade de Ferro",
    positive: "Gain advantage to resist mental effects and fear.",
    negative: "Suffer disadvantage to resist mental effects and fear.",
    category: "Mental"
  },
  {
    id: "vision",
    name: "Vision",
    namePtBr: "Visão",
    positive: "Gain advantage on perception checks involving sight.",
    negative: "Suffer disadvantage on perception checks involving sight.",
    category: "Physical"
  },
  {
    id: "social",
    name: "Social",
    namePtBr: "Social",
    positive: "Gain advantage on social interaction checks.",
    negative: "Suffer disadvantage on social interaction checks.",
    category: "Social"
  },
  {
    id: "temper",
    name: "Temper",
    namePtBr: "Temperamento",
    positive: "Remain composed under pressure, gaining advantage on composure checks.",
    negative: "Lose composure easily, suffering disadvantage on composure checks.",
    category: "Mental"
  },
  {
    id: "body",
    name: "Body",
    namePtBr: "Corpo",
    positive: "Have a resilient body, handling physical strain with advantage.",
    negative: "Have a fragile body, struggling with physical strain and suffering disadvantage.",
    category: "Physical"
  },
  {
    id: "insight",
    name: "Insight",
    namePtBr: "Intuição",
    positive: "Gain advantage on detecting lies and understanding intentions.",
    negative: "Suffer disadvantage when detecting lies and understanding intentions.",
    category: "Social"
  },
  {
    id: "learning",
    name: "Learning",
    namePtBr: "Aprendizado",
    positive: "Learn new skills more easily, gaining advantage when doing so.",
    negative: "Struggle to learn new skills, suffering disadvantage when doing so.",
    category: "Mental"
  }
];

export const talentsData: TalentData[] = baseTalents.flatMap(talent => [
  {
    id: `${talent.id}_pos`,
    name: talent.name,
    namePtBr: talent.namePtBr,
    description: talent.positive,
    descriptionPtBr: talent.positive,
    category: talent.category,
    type: "positive",
  },
  {
    id: `${talent.id}_neg`,
    name: talent.name,
    namePtBr: talent.namePtBr,
    description: talent.negative,
    descriptionPtBr: talent.negative,
    category: talent.category,
    type: "negative",
  }
]);