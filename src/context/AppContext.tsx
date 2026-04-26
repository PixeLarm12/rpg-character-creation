import React, { createContext, useContext, useReducer, useState, ReactNode } from "react";
import { Language, Translations, translations } from "@/i18n";

// ---- Character State Types ----
export interface CharacterState {
  // Step 1
  speciesId: string | null;
  elfSubtypeId: string | null;
  // Step 2
  name: string;
  gender: string;
  weight: string;
  height: string;
  age: string;
  // Step 3
  hp: number | null;
  mana: number | null;
  defense: number | null;
  attributeMethod: "points" | "archetype" | null;
  attributes: Record<string, number>;
  archetypeId: string | null;
  predefinedAssignment: Record<string, number>;
  predefinedAdjustmentUsed: boolean;
  // Step 4
  positiveTalents: string[];
  negativeTalents: string[];
  // Step 6
  equipmentPackageId: string | null;
}

export type CharacterAction =
  | { type: "SET_SPECIES"; speciesId: string; elfSubtypeId?: string | null }
  | { type: "SET_BASICS"; field: string; value: string }
  | { type: "SET_HP_MANA"; hp: number; mana: number, defense: number }
  | { type: "SET_ATTRIBUTE_METHOD"; method: "points" | "archetype" }
  | { type: "SET_ATTRIBUTES"; attributes: Record<string, number> }
  | { type: "SET_ARCHETYPE"; archetypeId: string; attributes: Record<string, number> }
  | { type: "SET_PREDEFINED"; assignment: Record<string, number>; adjustmentUsed: boolean }
  | { type: "TOGGLE_TALENT"; talentId: string; talentType: "positive" | "negative" }
  | { type: "SET_EQUIPMENT"; packageId: string }
  | { type: "RESET" };

const initialAttributes: Record<string, number> = {
  CHA: 0, INT: 0, DEX: 0, PER: 0, STR: 0, RES: 0, COR: 0, EXA: 0,
};

export const initialState: CharacterState = {
  speciesId: null,
  elfSubtypeId: null,
  name: "",
  gender: "",
  weight: "",
  height: "",
  age: "",
  hp: null,
  mana: null,
  attributeMethod: null,
  attributes: { ...initialAttributes },
  archetypeId: null,
  predefinedAssignment: { ...initialAttributes },
  predefinedAdjustmentUsed: false,
  positiveTalents: [],
  negativeTalents: [],
  equipmentPackageId: null,
};

function characterReducer(state: CharacterState, action: CharacterAction): CharacterState {
  switch (action.type) {
    case "SET_SPECIES":
      return { ...state, speciesId: action.speciesId, elfSubtypeId: action.elfSubtypeId ?? null };
    case "SET_BASICS":
      return { ...state, [action.field]: action.value };
    case "SET_HP_MANA":
      return {
        ...state,
        hp: action.hp,
        mana: action.mana,
        defense: action.defense,
      };
    case "SET_ATTRIBUTE_METHOD":
      return {
        ...state,
        attributeMethod: action.method,
        attributes: {
          COR: 0,
          EXA: 0,
          CHA: -2,
          INT: -2,
          DEX: -2,
          PER: -2,
          STR: -2,
          RES: -2,
        },
        archetypeId: null,
        predefinedAssignment: { ...initialAttributes },
        predefinedAdjustmentUsed: false,
      };
    case "SET_ATTRIBUTES":
      return { ...state, attributes: action.attributes };
    case "SET_ARCHETYPE":
      return { ...state, archetypeId: action.archetypeId, attributes: { ...action.attributes, COR: 0, EXA: 0 } };
    case "SET_PREDEFINED":
      return { ...state, predefinedAssignment: action.assignment, predefinedAdjustmentUsed: action.adjustmentUsed, attributes: { ...action.assignment, COR: 0, EXA: 0 } };
    case "TOGGLE_TALENT": {
      const key = action.talentType === "positive" ? "positiveTalents" : "negativeTalents";
      const list = state[key];
      if (list.includes(action.talentId)) {
        return { ...state, [key]: list.filter((t) => t !== action.talentId) };
      }
      if (list.length >= 2) return state;
      return { ...state, [key]: [...list, action.talentId] };
    }
    case "SET_EQUIPMENT":
      return { ...state, equipmentPackageId: action.packageId };
    case "RESET":
      return { ...initialState };
    default:
      return state;
  }
}

// ---- Context ----
interface AppContextValue {
  state: CharacterState;
  dispatch: React.Dispatch<CharacterAction>;
  t: Translations;
  language: Language;
  setLanguage: (lang: Language) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(characterReducer, initialState);
  const [language, setLanguage] = useState<Language>("en");
  const [currentStep, setCurrentStep] = useState(0);
  const t = translations[language];

  return (
    <AppContext.Provider value={{ state, dispatch, t, language, setLanguage, currentStep, setCurrentStep }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within AppProvider");
  return ctx;
}
