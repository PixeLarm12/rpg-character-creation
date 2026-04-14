import { en } from "./en";
import { ptBr } from "./pt-br";

export type Translations = typeof en;
export type Language = "en" | "pt-br";

export const translations: Record<Language, Translations> = {
  en,
  "pt-br": ptBr as Translations,
};
