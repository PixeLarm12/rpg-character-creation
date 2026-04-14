// Talent data for the RPG character creator
export interface TalentData {
  id: string;
  name: string;
  namePtBr: string;
  description: string;
  descriptionPtBr: string;
  type: "positive" | "negative";
  category: string;
}

export const talentsData: TalentData[] = [
  // Positive talents
  { id: "brave", name: "Brave", namePtBr: "Corajoso", description: "+1 to courage checks in dangerous situations.", descriptionPtBr: "+1 em testes de coragem em situações perigosas.", type: "positive", category: "Mental" },
  { id: "quickReflexes", name: "Quick Reflexes", namePtBr: "Reflexos Rápidos", description: "+1 to initiative rolls.", descriptionPtBr: "+1 em rolagens de iniciativa.", type: "positive", category: "Physical" },
  { id: "keenEye", name: "Keen Eye", namePtBr: "Olho Aguçado", description: "+1 to ranged attack rolls.", descriptionPtBr: "+1 em ataques à distância.", type: "positive", category: "Physical" },
  { id: "charismatic", name: "Charismatic", namePtBr: "Carismático", description: "+1 to persuasion and diplomacy checks.", descriptionPtBr: "+1 em testes de persuasão e diplomacia.", type: "positive", category: "Social" },
  { id: "toughSkin", name: "Tough Skin", namePtBr: "Pele Resistente", description: "+1 natural armor.", descriptionPtBr: "+1 de armadura natural.", type: "positive", category: "Physical" },
  { id: "scholar", name: "Scholar", namePtBr: "Estudioso", description: "+1 to knowledge and lore checks.", descriptionPtBr: "+1 em testes de conhecimento e sabedoria.", type: "positive", category: "Mental" },
  { id: "nimbleFingers", name: "Nimble Fingers", namePtBr: "Dedos Ágeis", description: "+1 to lockpicking and sleight of hand.", descriptionPtBr: "+1 em abrir fechaduras e prestidigitação.", type: "positive", category: "Physical" },
  { id: "ironWill", name: "Iron Will", namePtBr: "Vontade de Ferro", description: "+1 to resist mental effects and fear.", descriptionPtBr: "+1 para resistir efeitos mentais e medo.", type: "positive", category: "Mental" },
  // Negative talents
  { id: "clumsy", name: "Clumsy", namePtBr: "Desajeitado", description: "-1 to acrobatics and balance checks.", descriptionPtBr: "-1 em testes de acrobacia e equilíbrio.", type: "negative", category: "Physical" },
  { id: "shortTempered", name: "Short-Tempered", namePtBr: "Temperamental", description: "-1 to composure checks when provoked.", descriptionPtBr: "-1 em testes de compostura quando provocado.", type: "negative", category: "Mental" },
  { id: "frailBody", name: "Frail Body", namePtBr: "Corpo Frágil", description: "-1 to max health points.", descriptionPtBr: "-1 em pontos de vida máximos.", type: "negative", category: "Physical" },
  { id: "gullible", name: "Gullible", namePtBr: "Ingênuo", description: "-1 to insight and deception detection checks.", descriptionPtBr: "-1 em testes de intuição e detecção de mentiras.", type: "negative", category: "Social" },
  { id: "slowLearner", name: "Slow Learner", namePtBr: "Aprendiz Lento", description: "-1 to learning new skills.", descriptionPtBr: "-1 para aprender novas habilidades.", type: "negative", category: "Mental" },
  { id: "cowardly", name: "Cowardly", namePtBr: "Covarde", description: "-1 to courage checks.", descriptionPtBr: "-1 em testes de coragem.", type: "negative", category: "Mental" },
  { id: "poorVision", name: "Poor Vision", namePtBr: "Visão Fraca", description: "-1 to perception checks involving sight.", descriptionPtBr: "-1 em testes de percepção envolvendo visão.", type: "negative", category: "Physical" },
  { id: "sociallyAwkward", name: "Socially Awkward", namePtBr: "Socialmente Estranho", description: "-1 to social interaction checks.", descriptionPtBr: "-1 em testes de interação social.", type: "negative", category: "Social" },
];
