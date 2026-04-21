import { useAppContext } from "@/context/AppContext";
import { Globe } from "lucide-react";

/** Language toggle button */
export function LanguageSwitcher() {
  const { language, setLanguage } = useAppContext();

  const toggle = () => setLanguage(language === "en" ? "pt-br" : "en");

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 rounded-md border border-border bg-secondary px-3 py-1.5 text-lg font-display text-secondary-foreground transition-colors hover:bg-muted"
      aria-label="Switch language"
    >
      <Globe className="h-4 w-4" />
      {language === "en" ? "PT-BR" : "EN"}
    </button>
  );
}
