import { useAppContext } from "@/context/AppContext";

/** Step 2: Character basics (name, gender, weight, height, age) */
export function CharacterInfoStep() {
  const { state, dispatch, t } = useAppContext();
  const tb = t.basics;

  const setField = (field: string, value: string) =>
    dispatch({ type: "SET_BASICS", field, value });

  const selectClass =
    "w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary";

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h2 className="font-display text-2xl text-gold-gradient">{tb.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{tb.desc}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Name */}
        <div className="space-y-1.5">
          <label className="text-sm font-display text-primary">{tb.name}</label>
          <input
            type="text"
            value={state.name}
            onChange={(e) => setField("name", e.target.value)}
            placeholder={tb.namePlaceholder}
            className={selectClass}
          />
        </div>

        {/* Gender */}
        <div className="space-y-1.5">
          <label className="text-sm font-display text-primary">{tb.gender}</label>
          <input
            type="text"
            value={state.gender}
            onChange={(e) => setField("gender", e.target.value)}
            placeholder={tb.genderPlaceholder}
            className={selectClass}
          />
        </div>

        {/* Weight */}
        <div className="space-y-1.5">
          <label className="text-sm font-display text-primary">{tb.weight}</label>
          <select value={state.weight} onChange={(e) => setField("weight", e.target.value)} className={selectClass}>
            <option value="">—</option>
            {Object.entries(tb.weights).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>
        </div>

        {/* Height */}
        <div className="space-y-1.5">
          <label className="text-sm font-display text-primary">{tb.height}</label>
          <select value={state.height} onChange={(e) => setField("height", e.target.value)} className={selectClass}>
            <option value="">—</option>
            {Object.entries(tb.heights).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>
        </div>

        {/* Age */}
        <div className="space-y-1.5">
          <label className="text-sm font-display text-primary">{tb.age}</label>
          <select value={state.age} onChange={(e) => setField("age", e.target.value)} className={selectClass}>
            <option value="">—</option>
            {Object.entries(tb.ages).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
