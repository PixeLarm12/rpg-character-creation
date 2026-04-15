import { AppProvider, useAppContext } from "@/context/AppContext";
import { LanguageSwitcher } from "@/components/rpg/LanguageSwitcher";
import { Stepper } from "@/components/rpg/Stepper";
import { SpeciesStep } from "@/components/rpg/SpeciesStep";
import { CharacterInfoStep } from "@/components/rpg/CharacterInfoStep";
import { AttributesStep } from "@/components/rpg/AttributesStep";
import { TalentsStep } from "@/components/rpg/TalentsStep";
import { WealthStep } from "@/components/rpg/WealthStep";
import { EquipmentStep } from "@/components/rpg/EquipmentStep";
import { SummaryStep } from "@/components/rpg/SummaryStep";
import { toast } from "sonner";
import { ChevronLeft, ChevronRight, Sword } from "lucide-react";

const TOTAL_STEPS = 7;

function CharacterCreator() {
  const { state, t, currentStep, setCurrentStep } = useAppContext();

  /** Validate current step before advancing */
  const validate = (): boolean => {
    switch (currentStep) {
      case 0:
        if (!state.speciesId) { toast.error(t.validation.selectSpecies); return false; }
        if (state.speciesId === "elf" && !state.elfSubtypeId) { toast.error(t.validation.selectSubtype); return false; }
        return true;
      case 1:
        if (!state.name.trim()) { toast.error(t.validation.enterName); return false; }
        if (!state.weight) { toast.error(t.validation.selectWeight); return false; }
        if (!state.height) { toast.error(t.validation.selectHeight); return false; }
        if (!state.age) { toast.error(t.validation.selectAge); return false; }
        return true;
      case 2:
        if (!state.attributeMethod) { toast.error(t.validation.attributeMethod); return false; }
        if (state.attributeMethod === "archetype" && !state.archetypeId) { toast.error(t.validation.distributeAll); return false; }
        return true;
      case 3:
        if (state.positiveTalents.length !== 2 || state.negativeTalents.length !== 2) {
          toast.error(t.validation.selectTalents); return false;
        }
        return true;
      case 5:
        if (!state.equipmentPackageId) { toast.error(t.validation.selectEquipment); return false; }
        return true;
      default:
        return true;
    }
  };

  const next = () => {
    if (validate() && currentStep < TOTAL_STEPS - 1) setCurrentStep(currentStep + 1);
  };
  const back = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const steps = [
    <SpeciesStep key={0} />,
    <CharacterInfoStep key={1} />,
    <AttributesStep key={2} />,
    <TalentsStep key={3} />,
    <WealthStep key={4} />,
    <EquipmentStep key={5} />,
    <SummaryStep key={6} />,
  ];

  return (
    <div className="min-h-screen bg-background min-w-screen">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-2xl lg:max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Sword className="h-5 w-5 text-primary" />
            <h1 className="font-display text-lg text-gold-gradient">{t.app.title}</h1>
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      {/* Stepper */}
      <div className="mx-auto max-w-2xl lg:max-w-6xl px-4 pt-4">
        <Stepper />
      </div>

      {/* Step content */}
      <main className="mx-auto max-w-2xl lg:max-w-6xl px-4 py-6">
        {steps[currentStep]}
      </main>

      {/* Navigation */}
      <div className="mx-auto flex max-w-2xl lg:max-w-6xl items-center justify-between px-4 pb-8">
        <button
          onClick={back}
          disabled={currentStep === 0}
          className="flex items-center gap-1 rounded-md border border-border bg-secondary px-4 py-2 font-display text-sm text-secondary-foreground transition-all hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-4 w-4" />
          {t.nav.back}
        </button>
        {currentStep < TOTAL_STEPS - 1 && (
          <button
            onClick={next}
            className="flex items-center gap-1 rounded-md bg-primary px-4 py-2 font-display text-sm text-primary-foreground transition-all hover:opacity-90 glow-gold"
          >
            {t.nav.next}
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <AppProvider>
      <CharacterCreator />
    </AppProvider>
  );
}
