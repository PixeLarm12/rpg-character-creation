import { useAppContext } from "@/context/AppContext";
import { talentsData } from "@/data/talents";
import { Check } from "lucide-react";

/** Step 4: Talent selection (2 positive, 2 negative) */
export function TalentsStep() {
  const { state, dispatch, t, language } = useAppContext();
  const tt = t.talents;

  const positives = talentsData.filter((t) => t.type === "positive");
  const negatives = talentsData.filter((t) => t.type === "negative");

  const renderList = (
    items: typeof talentsData,
    type: "positive" | "negative",
    selected: string[],
    label: string,
    hint: string
  ) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-sm text-primary">{label}</h3>
        <span className="text-xs text-muted-foreground">
          {selected.length}/2 {tt.selected}
        </span>
      </div>

      <p className="text-xs text-muted-foreground">{hint}</p>

      <div className="grid gap-2 sm:grid-cols-2">
        {items.map((talent) => {
          const active = selected.includes(talent.id);

          const baseId = talent.id;

          const isSelectedInOtherList =
          type === "positive"
            ? state.negativeTalents.includes(baseId)
            : state.positiveTalents.includes(baseId);

          const isLimitReached = selected.length >= 2;
          const isDisabledByLimit = isLimitReached && !active;

          const isDisabled = isSelectedInOtherList || isDisabledByLimit;

          return (
            <button
              key={`${talent.id}-${talent.type}`}
              onClick={() => {
                if (isDisabled) return;

                dispatch({
                  type: "TOGGLE_TALENT",
                  talentId: talent.id,
                  talentType: type,
                });
              }}
              className={`flex items-start gap-2 rounded-md border p-3 text-left text-sm transition-all
                ${
                  active
                    ? "border-primary bg-secondary"
                    : "border-border bg-card hover:border-primary/50"
                }
                ${
                  isSelectedInOtherList
                    ? "opacity-40 cursor-not-allowed border-red-700"
                    : isDisabledByLimit
                    ? "opacity-40 cursor-not-allowed"
                    : ""
                }
              `}
              title={
                isSelectedInOtherList
                  ? tt.alreadySelected
                  : isDisabledByLimit
                  ? tt.limitReached
                  : ""
              }
            >
              <div
                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border ${
                  active
                    ? "border-primary bg-primary"
                    : "border-muted-foreground"
                }`}
              >
                {active && (
                  <Check className="h-3 w-3 text-primary-foreground" />
                )}
              </div>

              <div>
                <div className="font-display">
                  {language === "pt-br"
                    ? talent.namePtBr
                    : talent.name}
                </div>

                <div className="mt-0.5 text-xs text-muted-foreground">
                  {language === "pt-br"
                    ? talent.descriptionPtBr
                    : talent.description}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h2 className="font-display text-2xl md:text-4xl text-gold-gradient">
          {tt.title}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {tt.desc}
        </p>
      </div>

      {renderList(
        positives,
        "positive",
        state.positiveTalents,
        tt.positive,
        tt.selectPositive
      )}

      {renderList(
        negatives,
        "negative",
        state.negativeTalents,
        tt.negative,
        tt.selectNegative
      )}
    </div>
  );
}