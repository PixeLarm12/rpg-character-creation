import { useAppContext } from "@/context/AppContext";
import { equipmentPackages, defaultEquipment } from "@/data/equipment";
import { Package, CheckCircle } from "lucide-react";

/** Step 6: Equipment package selection */
export function EquipmentStep() {
  const { state, dispatch, t, language } = useAppContext();
  const te = t.equipment;

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h2 className="font-display text-2xl md:text-4xl text-gold-gradient">{te.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{te.desc}</p>
      </div>

      {/* Packages */}
      <div className="grid gap-3 sm:grid-cols-2">
        {equipmentPackages.map((pkg) => {
          const active = state.equipmentPackageId === pkg.id;
          const label = (te as any)[pkg.translationKey] ?? pkg.translationKey;
          const desc = (te as any)[pkg.translationKey + "Desc"] ?? "";
          return (
            <button
              key={pkg.id}
              onClick={() => dispatch({ type: "SET_EQUIPMENT", packageId: pkg.id })}
              className={`rounded-lg border p-4 text-left transition-all
                ${active ? "border-primary bg-secondary glow-gold" : "border-border bg-card hover:border-primary/50"}
              `}
            >
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-primary" />
                <span className="font-display">{label}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
              <ul className="mt-2 space-y-1 text-xs">
                {pkg.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    {language === "pt-br" ? item.namePtBr : item.name}
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>

      {/* Default items */}
      <div className="rounded-lg border border-border bg-muted p-4">
        <h3 className="font-display text-sm text-primary">{te.defaultItems}</h3>
        <div className="mt-2 grid grid-cols-2 gap-1 text-xs text-muted-foreground sm:grid-cols-4">
          {defaultEquipment.map((item, i) => (
            <span key={i} className="flex items-center gap-1">
              <span className="text-primary">•</span>
              {language === "pt-br" ? item.namePtBr : item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
