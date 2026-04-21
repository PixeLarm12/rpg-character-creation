import { useAppContext } from "@/context/AppContext";
import { speciesData } from "@/data/species";
import { Shield, Footprints, Sparkles } from "lucide-react";

/** Step 1: Species selection */
export function SpeciesStep() {
  const { state, dispatch, t, language } = useAppContext();
  const tSpecies = t.species;

  const selected = speciesData.find((s) => s.id === state.speciesId);

  const selectedSubtype = selected?.subtypes?.find(
    (sub) => sub.id === state.elfSubtypeId
  );

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h2 className="font-display text-2xl md:text-4xl text-gold-gradient">{tSpecies.title}</h2>
        <p className="mt-1 text-lg text-muted-foreground">{tSpecies.desc}</p>
      </div>

      {/* Species grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {speciesData.map((sp) => {
          const name = (tSpecies as any)[sp.translationKey]?.name ?? sp.translationKey;
          const active = state.speciesId === sp.id;
          return (
            <button
              key={sp.id}
              onClick={() => dispatch({ type: "SET_SPECIES", speciesId: sp.id, elfSubtypeId: null })}
              className={`rounded-lg border p-3 text-left text-lg font-display transition-all
                ${active ? "border-primary bg-secondary glow-gold" : "border-border bg-card hover:border-primary/50"}
              `}
            >
              {name}
            </button>
          );
        })}
      </div>

      {/* Selected species detail */}
      {selected && (
        <div className="rounded-lg border border-primary/20 bg-card p-4 animate-fade-in">

          <div className="grid md:grid-cols-2 gap-4 items-center">

            {/* IMAGE */}
            <div className="w-full h-full object-cover grayscale hover:grayscale-0 transition">
              <img
                src={selectedSubtype?.image ?? selected.image}
                alt={selectedSubtype?.translationKey ?? selected.translationKey}
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXT CONTENT */}
            <div className="space-y-3">
              <h3 className="font-display text-lg text-primary">
                {(tSpecies as any)[selected.translationKey]?.name}
              </h3>

              <p className="text-lg text-secondary-foreground">
                {(tSpecies as any)[selected.translationKey]?.desc}
              </p>

              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Footprints className="h-3.5 w-3.5 text-primary" />
                  {tSpecies.movement}: {selected.movement}m
                </span>

                <span className="flex items-center gap-1">
                  <Shield className="h-3.5 w-3.5 text-primary" />
                  {tSpecies.bonus}: {selected.attributeBonus.attribute} +{selected.attributeBonus.value}
                </span>

                <span className="flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  {tSpecies.passive}: {language === "pt-br" ? selected.passivePtBr : selected.passive}
                </span>
              </div>
            </div>
          </div>

          {/* Elf subtypes */}
          {selected.hasSubtypes && selected.subtypes && (
            <div className="space-y-2 pt-4">
              <p className="text-lg font-display text-primary">{tSpecies.selectSubtype}</p>

              <div className="grid grid-cols-2 gap-2">
                {selected.subtypes.map((sub) => {
                  const subName = (tSpecies as any)[sub.translationKey]?.name ?? sub.translationKey;
                  const subActive = state.elfSubtypeId === sub.id;

                  return (
                    <button
                      key={sub.id}
                      onClick={() =>
                        dispatch({
                          type: "SET_SPECIES",
                          speciesId: selected.id,
                          elfSubtypeId: sub.id,
                        })
                      }
                      className={`rounded-md border p-2 text-left transition-all
                        ${subActive ? "border-primary bg-secondary" : "border-border bg-muted hover:border-primary/50"}
                      `}
                    >
                      <div className="font-display">{subName}</div>
                      <div className="mt-1 text-muted-foreground">
                        {language === "pt-br" ? sub.passivePtBr : sub.passive}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
