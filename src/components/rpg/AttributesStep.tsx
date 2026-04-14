import { useAppContext } from "@/context/AppContext";
import { archetypesData } from "@/data/equipment";
import { speciesData } from "@/data/species";
import { Minus, Plus } from "lucide-react";
import { useCallback, useMemo } from "react";

const MAIN_ATTRS = ["CHA", "INT", "DEX", "PER", "STR", "RES"] as const;
const FIXED_ATTRS = ["COR", "EXA"] as const;
const PREDEFINED_VALUES = [-1, -1, 0, 0, 1, 2];

/** Step 3: Attribute assignment with 3 methods */
export function AttributesStep() {
  const { state, dispatch, t, language } = useAppContext();
  const ta = t.attributes;

  // Species bonus
  const species = speciesData.find((s) => s.id === state.speciesId);
  const subtype = species?.subtypes?.find((s) => s.id === state.elfSubtypeId);
  const bonusAttr = subtype?.attributeBonus ?? species?.attributeBonus;

  const methodBtns: { key: "predefined" | "points" | "archetype"; label: string; desc: string }[] = [
    { key: "predefined", label: ta.method1, desc: ta.method1Desc },
    { key: "points", label: ta.method2, desc: ta.method2Desc },
    { key: "archetype", label: ta.method3, desc: ta.method3Desc },
  ];

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h2 className="font-display text-2xl text-gold-gradient">{ta.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{ta.desc}</p>
      </div>

      {/* Method selection */}
      <div className="space-y-2">
        <h3 className="text-sm font-display text-primary">{ta.methodTitle}</h3>
        <div className="grid gap-2 sm:grid-cols-3">
          {methodBtns.map((m) => (
            <button
              key={m.key}
              onClick={() => dispatch({ type: "SET_ATTRIBUTE_METHOD", method: m.key })}
              className={`rounded-lg border p-3 text-left transition-all text-sm
                ${state.attributeMethod === m.key ? "border-primary bg-secondary glow-gold" : "border-border bg-card hover:border-primary/50"}
              `}
            >
              <div className="font-display">{m.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{m.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Species bonus indicator */}
      {bonusAttr && (
        <p className="text-xs text-muted-foreground">
          {ta.speciesBonus}: {bonusAttr.attribute} +{bonusAttr.value}
        </p>
      )}

      {/* Method-specific UI */}
      {state.attributeMethod === "predefined" && <PredefinedMethod />}
      {state.attributeMethod === "points" && <PointsMethod />}
      {state.attributeMethod === "archetype" && <ArchetypeMethod />}

      {/* Fixed attributes display */}
      {state.attributeMethod && (
        <div className="flex gap-4 rounded-md border border-border bg-muted p-3 text-sm">
          {FIXED_ATTRS.map((a) => (
            <div key={a} className="flex items-center gap-2">
              <span className="font-display text-muted-foreground">{ta.names[a]}</span>
              <span className="font-bold">0</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ---- Predefined Distribution ----
function PredefinedMethod() {
  const { state, dispatch, t } = useAppContext();
  const ta = t.attributes;
  const attrs = state.predefinedAssignment;

  // Track which predefined values are assigned
  const assignedValues = MAIN_ATTRS.map((a) => attrs[a]);
  const availableValues = [...PREDEFINED_VALUES];
  assignedValues.forEach((v) => {
    if (v !== 0 || PREDEFINED_VALUES.filter((x) => x === 0).length > assignedValues.filter((x, i) => x === 0 && attrs[MAIN_ATTRS[i]] === 0).length) {
      const idx = availableValues.indexOf(v);
      if (idx !== -1) availableValues.splice(idx, 1);
    }
  });

  // Simple: let user pick value per attribute via cycling
  const cycleValue = (attr: string, dir: number) => {
    const current = attrs[attr] || 0;
    const next = current + dir;
    if (next < -1 || next > 3) return;

    const newAssignment = { ...attrs, [attr]: next };
    // Check adjustment usage
    const baseSum = PREDEFINED_VALUES.reduce((a, b) => a + b, 0); // = 1
    const newSum = MAIN_ATTRS.reduce((s, a) => s + (newAssignment[a] || 0), 0);
    const adjustmentUsed = newSum !== baseSum;

    dispatch({ type: "SET_PREDEFINED", assignment: newAssignment, adjustmentUsed: Math.abs(newSum - baseSum) <= 1 && adjustmentUsed });
  };

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">{ta.method1Desc}</p>
      <div className="grid gap-2 sm:grid-cols-2">
        {MAIN_ATTRS.map((a) => (
          <div key={a} className="flex items-center justify-between rounded-md border border-border bg-card px-3 py-2">
            <span className="font-display text-sm">{ta.names[a]}</span>
            <div className="flex items-center gap-2">
              <button onClick={() => cycleValue(a, -1)} className="rounded bg-muted p-1 hover:bg-secondary"><Minus className="h-3 w-3" /></button>
              <span className="w-8 text-center font-bold text-primary">{attrs[a] || 0}</span>
              <button onClick={() => cycleValue(a, 1)} className="rounded bg-muted p-1 hover:bg-secondary"><Plus className="h-3 w-3" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- Point Distribution ----
function PointsMethod() {
  const { state, dispatch, t } = useAppContext();
  const ta = t.attributes;
  const attrs = state.attributes;

  const pointsUsed = useMemo(
    () => MAIN_ATTRS.reduce((s, a) => s + ((attrs[a] || 0) + 2), 0),
    [attrs]
  );
  const remaining = 8 - pointsUsed;

  const adjust = useCallback(
    (attr: string, dir: number) => {
      const current = attrs[attr] || -2;
      const next = current + dir;
      if (next > 3 || next < -2) return;
      if (dir > 0 && remaining <= 0) return;
      dispatch({ type: "SET_ATTRIBUTES", attributes: { ...attrs, [attr]: next } });
    },
    [attrs, remaining, dispatch]
  );

  // Initialize to -2 if first render
  const needsInit = MAIN_ATTRS.every((a) => attrs[a] === 0);
  if (needsInit) {
    const init: Record<string, number> = { COR: 0, EXA: 0 };
    MAIN_ATTRS.forEach((a) => (init[a] = -2));
    dispatch({ type: "SET_ATTRIBUTES", attributes: init });
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-display text-primary">{ta.pointsRemaining}:</span>
        <span className={`font-bold text-lg ${remaining < 0 ? "text-destructive" : "text-primary"}`}>{remaining}</span>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        {MAIN_ATTRS.map((a) => (
          <div key={a} className="flex items-center justify-between rounded-md border border-border bg-card px-3 py-2">
            <span className="font-display text-sm">{ta.names[a]}</span>
            <div className="flex items-center gap-2">
              <button onClick={() => adjust(a, -1)} className="rounded bg-muted p-1 hover:bg-secondary"><Minus className="h-3 w-3" /></button>
              <span className="w-8 text-center font-bold text-primary">{attrs[a] ?? -2}</span>
              <button onClick={() => adjust(a, 1)} className="rounded bg-muted p-1 hover:bg-secondary"><Plus className="h-3 w-3" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- Archetype ----
function ArchetypeMethod() {
  const { state, dispatch, t } = useAppContext();
  const ta = t.attributes;

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-display text-primary">{ta.selectArchetype}</h4>
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
        {archetypesData.map((arch) => {
          const active = state.archetypeId === arch.id;
          const label = (ta.archetypes as any)[arch.translationKey] ?? arch.translationKey;
          return (
            <button
              key={arch.id}
              onClick={() => dispatch({ type: "SET_ARCHETYPE", archetypeId: arch.id, attributes: arch.attributes })}
              className={`rounded-lg border p-3 text-left transition-all
                ${active ? "border-primary bg-secondary glow-gold" : "border-border bg-card hover:border-primary/50"}
              `}
            >
              <div className="font-display text-sm">{label}</div>
              <div className="mt-1 flex flex-wrap gap-1 text-xs text-muted-foreground">
                {MAIN_ATTRS.map((a) => (
                  <span key={a}>{a}:{arch.attributes[a] ?? 0}</span>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {/* Show selected archetype attributes */}
      {state.archetypeId && (
        <div className="grid gap-2 sm:grid-cols-2">
          {MAIN_ATTRS.map((a) => (
            <div key={a} className="flex items-center justify-between rounded-md border border-border bg-card px-3 py-2">
              <span className="font-display text-sm">{ta.names[a]}</span>
              <span className="font-bold text-primary">{state.attributes[a] ?? 0}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
