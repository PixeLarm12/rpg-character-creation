import { useAppContext } from "@/context/AppContext";
import { Coins } from "lucide-react";

const WEALTH = [
  { key: "copper", value: 200, color: "text-orange-400" },
  { key: "silver", value: 100, color: "text-gray-300" },
  { key: "gold", value: 50, color: "text-primary" },
  { key: "platinum", value: 0, color: "text-blue-300" },
] as const;

/** Step 5: Wealth display (auto-assigned) */
export function WealthStep() {
  const { t } = useAppContext();
  const tw = t.wealth;

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h2 className="font-display text-2xl md:text-4xl text-gold-gradient">{tw.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{tw.desc}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {WEALTH.map((w) => (
          <div key={w.key} className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4">
            <Coins className={`h-8 w-8 ${w.color}`} />
            <span className="font-display text-sm">{(tw as any)[w.key]}</span>
            <span className="text-2xl md:text-4xl font-bold text-foreground">{w.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
