import { useAppContext } from "@/context/AppContext";
import { useRef, useState } from "react";
import { ExportSheet } from "../ExportSheet";
import { speciesData } from "@/data/species";
import { talentsData } from "@/data/talents";
import { equipmentPackages, defaultEquipment } from "@/data/equipment";
import { Download } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

/** Step 7: Summary + PDF export */
export function SummaryStep() {
  const { state, t, language } = useAppContext();
  const ts = t.summary;

  const exportRef = useRef<HTMLDivElement>(null);

  const species = speciesData.find((s) => s.id === state.speciesId);
  const subtype = species?.subtypes?.find((s) => s.id === state.elfSubtypeId);
  const pkg = equipmentPackages.find((p) => p.id === state.equipmentPackageId);

  const getSpeciesName = () => {
    if (!species) return "—";
    const base = (t.species as any)[species.translationKey]?.name ?? species.translationKey;
    if (subtype) return `${base} (${(t.species as any)[subtype.translationKey]?.name ?? subtype.translationKey})`;
    return base;
  };

  const passive = subtype
    ? (language === "pt-br" ? subtype.passivePtBr : subtype.passive)
    : species
      ? (language === "pt-br" ? species.passivePtBr : species.passive)
      : "—";

  const posTalents = state.positiveTalents.map((id) => talentsData.find((t) => t.id === id)!);
  const negTalents = state.negativeTalents.map((id) => talentsData.find((t) => t.id === id)!);

  const allEquipment = [
    ...(pkg?.items.map((i) => (language === "pt-br" ? i.namePtBr : i.name)) ?? []),
    ...defaultEquipment.map((i) => (language === "pt-br" ? i.namePtBr : i.name)),
  ];

  const [notes, setNotes] = useState("");

  const exportData = {
    name: state.name,
    gender: state.gender,
    weight: state.weight,
    height: state.height,
    age: state.age,
    hp: state.hp,
    mana: state.mana,
    species: species?.id,
    elfSubtype: subtype?.id ?? null,
    attributes: state.attributes,
    positiveTalents: posTalents,
    negativeTalents: negTalents,
    wealth: { copper: 200, silver: 100, gold: 50, platinum: 0 },
    equipment: allEquipment,
    notes: notes
  };

  const downloadPDF = async () => {
    if (!exportRef.current) return;

    const canvas = await html2canvas(exportRef.current, { scale: 2 });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save(`${state.name || "character"}_${language}.pdf`);
  };

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="rounded-lg border border-border bg-card p-4 space-y-2">
      <h3 className="font-display text-lg text-primary">{title}</h3>
      {children}
    </div>
  );

  return (
    <div className="animate-fade-in space-y-6">

      {/* UI normal */}
      <div id="character-sheet">
        <div>
          <h2 className="font-display text-2xl md:text-4xl text-gold-gradient">{ts.title}</h2>
          <p className="mt-1 text-lg text-muted-foreground">{ts.desc}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Section title={ts.characterInfo}>
            <div className="grid grid-cols-2 gap-1 text-lg">
              <span className="text-muted-foreground">{t.basics.name}:</span><span>{state.name || "—"}</span>
              <span className="text-muted-foreground">{t.basics.gender}:</span><span>{state.gender ? (t.basics.genders as any)[state.gender] : "—"}</span>
              <span className="text-muted-foreground">{t.basics.weight}:</span><span>{state.weight ? (t.basics.weights as any)[state.weight] : "—"}</span>
              <span className="text-muted-foreground">{t.basics.height}:</span><span>{state.height ? (t.basics.heights as any)[state.height] : "—"}</span>
              <span className="text-muted-foreground">{t.basics.age}:</span><span>{state.age ? (t.basics.ages as any)[state.age] : "—"}</span>
            </div>
          </Section>

          <Section title={ts.speciesInfo}>
            <p className="text-lg">{getSpeciesName()}</p>
            <p className=" text-muted-foreground">{passive}</p>
          </Section>

          <Section title={ts.attributesInfo}>
            <div className="grid grid-cols-2 gap-1 text-lg">
              <span className="text-muted-foreground">{t.attributes.hp} <span className="font-bold text-primary">{state.hp}/{state.hp}</span> </span>
              <span className="text-muted-foreground">{t.attributes.mana} <span className="font-bold text-primary">{state.mana}/{state.mana}</span></span>

              {Object.entries(state.attributes).map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span className="text-muted-foreground">{(t.attributes.names as any)[k] ?? k}</span>
                  <span className="font-bold text-primary">{v}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section title={ts.talentsInfo}>
            <div className="space-y-1 text-lg">
              {posTalents.map((tl) => (
                <div key={tl.id} className="text-emerald">
                  + {language === "pt-br" ? tl.namePtBr : tl.name}
                </div>
              ))}
              {negTalents.map((tl) => (
                <div key={tl.id} className="text-ruby">
                  - {language === "pt-br" ? tl.namePtBr : tl.name}
                </div>
              ))}
            </div>
          </Section>

          <Section title={ts.wealthInfo}>
            <div className="grid grid-cols-2 gap-1 text-lg">
              <span className="text-muted-foreground">{t.wealth.copper}:</span><span>200</span>
              <span className="text-muted-foreground">{t.wealth.silver}:</span><span>100</span>
              <span className="text-muted-foreground">{t.wealth.gold}:</span><span>50</span>
              <span className="text-muted-foreground">{t.wealth.platinum}:</span><span>0</span>
            </div>
          </Section>

          <Section title={ts.equipmentInfo}>
            <ul className="space-y-0.5 ">
              {allEquipment.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </Section>
        </div>

        <div className="grid mt-4">
          {/* NOTES */}
          <div className="space-y-1.5">
            <label className="text-lg font-display text-primary">{ts.notes}</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={ts.notesPlaceholder}
              className="
                w-full
                min-h-[120px]
                resize-y
                rounded-md
                border border-border
                bg-background
                p-3
                text-foreground
                placeholder:text-muted-foreground
                focus:outline-none
                focus:ring-2
                focus:ring-primary
              "
            />
          </div>
        </div>
      </div>

      {/* EXPORT */}
      <div style={{ position: "absolute", left: "-9999px", top: 0 }}>
        <div ref={exportRef}>
          <ExportSheet data={exportData} />
        </div>
      </div>

      {/* BOTÕES */}
      <div className="flex gap-3">
        <button
          onClick={downloadPDF}
          className="flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-lg text-primary"
        >
          <Download className="h-4 w-4" />
          PDF
        </button>
      </div>
    </div>
  );
}