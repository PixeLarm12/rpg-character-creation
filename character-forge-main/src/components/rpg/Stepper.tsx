import { useAppContext } from "@/context/AppContext";
import { Check } from "lucide-react";

const STEP_KEYS = ["species", "basics", "attributes", "talents", "wealth", "equipment", "summary"] as const;

/** Visual stepper showing progress through character creation */
export function Stepper() {
  const { t, currentStep, setCurrentStep } = useAppContext();
  const labels = STEP_KEYS.map((k) => t.steps[k]);

  return (
    <div className="flex items-center justify-center gap-1 overflow-x-auto pb-2">
      {labels.map((label, i) => {
        const done = i < currentStep;
        const active = i === currentStep;
        return (
          <div key={i} className="flex items-center">
            <button
              onClick={() => i < currentStep && setCurrentStep(i)}
              disabled={i > currentStep}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-display transition-all
                ${active ? "bg-primary text-primary-foreground glow-gold" : ""}
                ${done ? "bg-secondary text-primary cursor-pointer hover:bg-muted" : ""}
                ${!active && !done ? "text-muted-foreground cursor-not-allowed" : ""}
              `}
            >
              {done ? <Check className="h-3 w-3" /> : <span className="font-bold">{i + 1}</span>}
              <span className="hidden sm:inline">{label}</span>
            </button>
            {i < labels.length - 1 && (
              <div className={`mx-1 h-px w-4 sm:w-8 ${i < currentStep ? "bg-primary" : "bg-border"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
